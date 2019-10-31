// Load the libraries
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const morgan = require('morgan');
const mkQuery = require('./dbutil');

// Configure the application
const PORT = parseInt(process.argv[2] || process.env.APP_PORT) || 3000;

// Setup a connection pool for MySQL
const pool = mysql.createPool(require('./config'));

// SQL
const GET_GAMES = 'select * from game order by ranking limit ? offset ?';
const GET_COMMENTS_BY_GID = 'select * from comment where gid = ? limit 50';

const getGames = mkQuery(GET_GAMES, pool);
const getCommentsByGid = mkQuery(GET_COMMENTS_BY_GID, pool);

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
app.get('/api/comment/:gid',
	(req, resp) => {
        const gid = parseInt(req.params.gid);
        
        getCommentsByGid([ gid ])
            .then(result => {
                resp.status(200).json(result);
            })
            .catch(error => {
                resp.status(500).json({ message: JSON.stringify(error) });
            })
	}
);

// GET /api/games?limit=20&offset=10
// Default for limit = 20
// Default for offset = 0
// comment: ''
app.get('/api/games', 
    (req, resp) => {
        const limit = parseInt(req.query.limit) || 20;
        const offset = parseInt(req.query.offset) || 0;

        getGames([ limit, offset ])
            .then(result => {
                resp.status(200)
                    .json(
                        result.map(v => {
                            v.comment = `/api/comment/${v.gid}`;
                            return (v);
                        })
                    )
            })
            .catch(error => {
                resp.status(500).json({ message: JSON.stringify(error) });
            })
        }
)

app.use(express.static(__dirname + '/public'));

app.use((req, resp) => {
    // Response 404 in JSON
    resp.status(404).json({ message: `Not found: ${req.originalUrl}` });
});

// Start the server
app.listen(PORT, () => {
    console.info(`Application started at port ${PORT} on ${new Date()}`);
});
