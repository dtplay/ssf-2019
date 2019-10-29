// Load the libaries
const cors = require('cors');
const morgan = require('morgan');
const mysql = require('mysql');
const express = require('express');

const config = require('./config');

// Queries
const SELECT_TV_SHOWS = 'select tvid as id, name as show_name from tv_shows limit ? skip ?';
const SELECT_TV_SHOWS_BY_NAME = 'select * from tv_shows where name like ?';

// Configure the application
const PORT = parseInt(process.argv[2] || process.env.APP_PORT) || 3000;

// Create a connection pool
const pool = mysql.createPool(config);

const app = express();

// Define the request the app will be handling
// log every request
app.use(morgan('combined'));

app.use(cors());

// q - name
app.get('/api/tv_shows/search',
    (req, resp) => {
        const q = req.query.q;

        if (!q) {
            resp.status(400).type('application/json')
                .json({ message: 'Bad request missing q'});
            return;
        }

        //Get a connection from the pool
        pool.getConnection(
            (err, conn) => {
                if (err) {
                    resp.status(500).type('application/json')
                        .json({ error: JSON.stringify(err) })
                    return;
                }
                //const query = 'select * from tv_shows where name like "%' + q + '%"';
                conn.query(
                    SELECT_TV_SHOWS_BY_NAME,
                    [ `%${q}%` ],
                    (err, result) => {
                        conn.release();
                        if (err) {
                            resp.status(500).type('application/json')
                                .json({ error: JSON.stringify(err) })
                            return;
                        }
                        resp.status(200).type('application/json').json(result);
                    }
                )

            }
        )

    }
)

//start - default to 0, size - 10
app.get('/api/tv_shows',
    (req, resp) => {
        const start = parseInt(req.query['start']) || 0;
        const size = parseInt(req.query['size']) || 10;
        //Checkout a connection from our pool
        pool.getConnection(
            (err, conn) => {
                // Check if there are any errors, handle it
                if (err) {
                    resp.status(500).type('application/json')
                        .json({ error: JSON.stringify(err) })
                    return;
                }
                // Perform the query
                conn.query(
                    //SELECT_TV_SHOWS, // the SQL
                    'select tvid as id, name as show_name from tv_shows limit ? offset ?',
                    [ size, start ],
                    (err, result) => { //function to handle the result
                        conn.release(); // release the connection
                        if (err) {
                            resp.status(500).type('application/json')
                                .json({ error: JSON.stringify(err) })
                            return;
                        }
                        resp.status(200).type('application/json')
                            .json(result);
                    }
                )
            }
        )
    }
);

app.use(express.static(__dirname + '/public'));

app.use((req, resp) => {
    resp.status(404).type('text/html')
    .send(`Not found`);
});

// Start the server
app.listen(PORT, () => {
    console.info(`Application started at port ${PORT} on ${new Date()}`);
});