// Load libraries
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const request = require('request-promise-native')
const emoji = require('node-emoji')
const hn = require('./hn');
const bot = require('./telegram'); 

// Configure the application
const PORT = parseInt(process.APP_PORT) || 3000;
const TOKEN = require('./config').token;

const WEBHOOK = `${process.argv[2]}/${TOKEN}`

// setWebhook
const setWebhook = bot(TOKEN, 'setWebhook');
const sendMessage = bot(TOKEN, 'sendMessage');

const botMessage = (req, resp, next) => {
	let m = {};
	if ('message' in req.body)
		m = req.body.message;
	else if ('edited_message' in req.body)
		m = req.body.edited_message;

	req.telegram = {
		type: '',
		message_id: m.message_id,
		chat_id: m.chat.id,
		first_name: m.chat.first_name,
		date: m.date,
		text: m.text,
		entities: m.entities || []
	}
	if (req.telegram.text == '/start')
		req.telegram.type = 'start';

	else if (req.telegram.text.startsWith('/newstories'))
		req.telegram.type = 'newstories';

	else
		req.telegram.type = 'error';

	next();
}

// Create an instance of the application
const app = express();

app.use(morgan('tiny'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post(`/${TOKEN}`, botMessage,
	(req, resp) => {
		let message = null;
		console.info(req.telegram);
		switch (req.telegram.type) {
			case 'start':
				message = {
					chat_id: req.telegram.chat_id,
					text: `
						*Welcome to Hackers News*
						Today's date is _${(new Date()).toString()}_
						News source from [Hacker's News](https://github.com/HackerNews/API)
					`,
					parse_mode: 'Markdown'
				}
				break;

			case 'newstories':
				const post = Math.min(parseInt(req.telegram.text.substring(11)) || 5, 5);
				console.log('post = ', post);
				hn.topNews()
					.then(results => {
						const r = results
							.splice(-post)
							.map(nid => hn.getNews(nid))
						return (Promise.all(r));
					})
					.then(results => {
						console.info('news\n', results);
					})
					.catch(error => { console.error('error: ', error); })
				break;

			default:
				message = {
					chat_id: req.telegram.chat_id,
					text: emoji.emojify('Hmmm... I cannot process your message :frown:')
				}
		}

		if (message)
			sendMessage(message)
				.then(result => { console.info('message sent'); })
				.catch(error => { console.error('error: ', error); })

		resp.status(200).json({});
	}
)

setWebhook({ url: WEBHOOK })
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
