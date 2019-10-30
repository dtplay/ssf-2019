// Load the libraries
const mysal = require('mysql');
const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');
const mysql = require('mysql');

// SQL statements
const GET_TV_SHOWS_SUMMARY = 'select tvid, name from tv_shows limit ? offset ?';
const GET_TV_SHOW_BY_TVID = 'select * from tv_shows where tvid = ?';

// Configure the application
const PORT = parseInt(process.argv[2] || process.env.APP_PORT) || 3000;

const pool = mysql.createPool(require('./config'));

// configure the routes
const app = express();

app.use(cors());

app.get('/api/tv_show/:tvid',
	(req, resp) => {
		const tvid = parseInt(req.params.tvid);

		pool.getConnection(
			(err, conn) => {
				if (err) 
					return resp.status(500).json({ error: err });
				conn.query(
					GET_TV_SHOW_BY_TVID, [ tvid ],
					(err, result) => {
						conn.release();
						if (result.length > 0)
							return resp.status(200).json(result);
						return resp.status(404).json({ error: `Not found: ${tvid}` });
					}
				)
			}
		)
	}
)

app.get('/api/tv_shows',
	(req, resp) => {
		const size = parseInt(req.size) || 20;
		const skip = parseInt(req.skip) || 0;

		pool.getConnection(
			(err, conn) => {
				if (err) 
					return resp.status(500).json({ error: err });
				conn.query(
					GET_TV_SHOWS_SUMMARY, [ size, skip ],
					(err, result) => {
						conn.release();
						if (err) 
							return resp.status(500).json({ error: err });
						const processed = result.map(
							v => {
								return {
									url: `/api/tv_show/${v.tvid}`,
									name: v.name
								}
							}
						)
						return resp.status(200).json(processed);
					}
				)
			}
		)
	}
);

app.use('/images', express.static(__dirname + '/assets'));

app.use(express.static(__dirname + '/public'));


// Start the server
app.listen(PORT, 
	() => {
		console.info(`Application started on port ${PORT} at ${new Date()}`);
	}
);
