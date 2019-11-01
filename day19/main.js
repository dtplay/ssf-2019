// Load libraries
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const request = require('request-promise-native')
const hn = require('./hn');

// Configure the application
const PORT = parseInt(process.APP_PORT) || 3000;
const TOKEN = require('./config').token;

const TELEGRAM = `https://api.telegram.org/bot${TOKEN}/setWebhook`;

// Create an instance of the application
const app = express();

app.use(morgan('tiny'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post(`/${TOKEN}`,
	(req, resp) => {
		console.info(req.body);
		resp.status(200).json({});
	}
)

const WEBHOOK = `${process.argv[2]}/${TOKEN}`
//console.log('webhook ', WEBHOOK)

// Register the webhook
request.post(TELEGRAM)
	.form({ url: WEBHOOK })
	.then(result => {
		// start the server
		console.info('result: ', result);
		app.listen(PORT,
			() => {
				console.info(`Application started on port ${PORT} at ${new Date()}`);
			}
		);
	})
	.catch(error => {
		console.error('error: ', error);
	});
