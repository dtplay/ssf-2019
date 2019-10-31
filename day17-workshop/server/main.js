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
const GET_GAMES_BY_NAME = 'select * from game where name like ? limit 5';
const COUNT_GAMES = 'select count(*) as game_count from game where name like ?';

const getGames = mkQuery(GET_GAMES, pool);
const getCommentsByGid = mkQuery(GET_COMMENTS_BY_GID, pool);
const getGamesByName = mkQuery(GET_GAMES_BY_NAME, pool);
const countGames = mkQuery(COUNT_GAMES, pool);

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

/* 
    { 
        games: [],
        count: 200
    }
*/
app.get('/api/search',
    (req, resp) => {
        const q = `%${req.query.q}%` || '';
        const p0 = getGamesByName([ q ])
        const p1 = countGames([ q ])
        Promise.all([ p0, p1 ])
            .then(results => {
                const r0 = results[0];
                const r1 = results[1];
                console.info('>r1 = ', r1);
                resp.status(200).json({
                    games: r0, 
                    count: r1[0].game_count
                })
            })
            .catch(error => {
                resp.status(500).json({ message: JSON.stringify(error) });
            })
    }
)

app.get('/api/search/sequential',
    (req, resp) => {
        const q = `%${req.query.q}%` || '';
        const p1 = countGames([ q ])
        getGamesByName([ q ])
            .then(result => {
                return Promise.all([ Promise.resolve(result), countGames([ q ])])
            })
            .then(results => {
                const r0 = results[0];
                const r1 = results[1];
                console.info('>r1 = ', r1);
                resp.status(200).json({
                    games: r0, 
                    count: r1[0].game_count
                })
            })
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
