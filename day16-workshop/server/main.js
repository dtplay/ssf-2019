//Setup the libraries
const mysql = require('mysql');
const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');
const morgan = require('morgan');

// Queries
const SEARCH_TV_SHOWS_BY_SUMMARY = 'select * from tv_shows where summary like ?';

// Configuration
const PORT = parseInt(process.argv[2] | process.env.APP_PORT) || 3000;
const pool = mysql.createPool(require('./config'));

// Create an instance of the application
const app = express();

let available = false;

// Configure handlebars
app.engine('hbs', hbs({ defaultLayout: 'main.hbs' }));
app.set('view engine', 'hbs');

// Configure cors and morgan
app.use(cors());

app.use((req, resp, next) => {
    if (available)
        return next();

    resp.status(503);
    resp.format({
        'application/json': () => {
            resp.json({ message: 'Service is currently not available'});
        },
        'default': () => {
            resp.render('not_available');
        }
    })
})

app.use(morgan('tiny'));

// Routes

// GET /api/tv_shows/search?q=
// q search the summary field - 15mins
app.get('/api/tv_shows/search',
    (req, resp) => {
        const q = req.query.q || '';

        pool.getConnection(
            (err, conn) => {
                //Check error - skip
                conn.query(
                    SEARCH_TV_SHOWS_BY_SUMMARY, [ `%${q}%` ],
                    (err, result) => {
                        conn.release();
                        //Skip error checks
                        resp.status(200);
                        resp.format({
                            'application/json': () => {
                                resp.type('application/json').json(result);
                            },
                            'default': () => {
                                resp.render('search_by_summary', 
                                    { movies: result, generateOn: (new Date()).toString() });
                            }
                        })
                    }
                )
            }
        );
    }
);

pool.getConnection(
    (err, conn) => {
        // skip error check
        // Start the server
        app.listen(PORT, () => {
            console.info(`Application started on port ${PORT} at ${new Date()}`);
        });
        if (err) {
            available = false;
            console.info(`\tDB is available: ${available}`);
        } else 
            conn.ping((err) => {
                conn.release();
                available = !err;
                console.info(`\tDB is available: ${available}`);
            })
    }
)