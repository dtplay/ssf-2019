// Load the libraries
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const morgan = require('morgan');

// SQL
const GET_GAMES = "select * from game order by ranking limit ? offset ?";

// Configure the application
const PORT = parseInt(process.argv[2] || process.env.APP_PORT) || 3000;

// Setup a connection pool for MySQL
const pool = mysql.createPool(require('./config'));

const app = express();

// Install standard middleware
app.use(cors());
app.use(morgan('tiny'));

// Define the routes

// GET /health
app.get('/health', 
    (req, resp) => {
        //ping the database
    }
)

// GET /api/comments/:gid

// GET /api/games?limit=20&offset=10
// Default for limit = 20
// Default for offset = 0
// comment: ''
app.get('/api/games', 
    (req, resp) => {
        const limit = parseInt(req.query.limit) || 20;
        const offset = parseInt(req.query.offset) || 0;

        // Get a connection from the pool
        pool.getConnection(
            (err, conn) => {
                if (err)
                    return resp.status(500).json({ message: JSON.stringify(err) });

                conn.query(
                    GET_GAMES, [ limit, offset ],
                    (err, result) => {
                        conn.release();
                        if (err)
                            return resp.status(500).json({ message: JSON.stringify(err) });
                        resp.status(200)
                            .json(
                                result.map(v => {
                                    v.comment = '';
                                    return (v);
                                })
                            )
                    }
                )
            }
        )
    }
)

app.use((req, resp) => {
    // Response 404 in JSON
    resp.status(404).json({ message: `Not found: ${req.originalUrl}` });
});

// Start the server
app.listen(PORT, () => {
    console.info(`Application started at port ${PORT} on ${new Date()}`);
});