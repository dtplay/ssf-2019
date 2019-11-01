// Load libraries
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const request = require('request-promise-native')
const emoji = require('node-emoji')
const hn = require('./hn');
const bot = require('./telegram'); 

// Configure the application
const NUMBERS = [ ':one:', ':two:', ':three:', ':four:', ':five:' ];
const PORT = parseInt(process.APP_PORT) || 3000;
const TOKEN = require('./config').token;

const WEBHOOK = `${process.argv[2]}/${TOKEN}`

// setWebhook
const setWebhook = bot(TOKEN, 'setWebhook');
const sendMessage = bot(TOKEN, 'sendMessage');

const createReplyKeyboard = (news) => {
	const keyboard = [];

	for (let i in news) {
		const key = [{ text: emoji.emojify(`${NUMBERS[i]} ${news[i].title}`) }]
		keyboard.push(key)
	}

	return (JSON.stringify({
		keyboard: keyboard,
		resize_keyboard: true
	}))
}

const createInlineKeyboard = (news) => {
	const keyboard = [];

	for (let i in news) {
		const key = [{
			text: emoji.emojify(`${NUMBERS[i]} ${news[i].title}`),
			callback_data: news[i].id
		}]
		keyboard.push(key)
	}

	return (JSON.stringify({ inline_keyboard: keyboard }));
}

const botMessage = (req, resp, next) => {
	let m = {};

	console.info(req.body);

	if (('message' in req.body) || ('edited_message' in req.body)) {
		m = (req.body['message'] || req.body['edited_message'])
		req.telegram = {
			type: '',
			message_id: m.message_id,
			chat_id: m.chat.id,
			first_name: m.chat.first_name,
			date: m.date,
			text: m.text,
			entities: m.entities || []
		}

	} else if ('callback_query' in req.body) {
		m = req.body.callback_query;
		req.telegram = {
			type: 'callback',
			message_id: m.message.message_id,
			chat_id: m.message.chat.id,
			first_name: m.from.first_name,
			date: m.message.date,
			itemId: parseInt(m.data)
		}
	}

	if (!req.telegram.type) {
		if (req.telegram.text == '/start')
			req.telegram.type = 'start';

		else if (req.telegram.text.startsWith('/newstories'))
			req.telegram.type = 'newstories';

		else 
			req.telegram.type = 'error';
	}

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
		console.info(req.telegram);
		switch (req.telegram.type) {
			case 'start':
				var message = {
					chat_id: req.telegram.chat_id,
					text: `
						*Welcome to Hackers News*
						Today's date is _${(new Date()).toString()}_
						News source from [Hacker's News](https://github.com/HackerNews/API)
					`,
					parse_mode: 'Markdown'
				}
				sendMessage(message)
					.then(result => { console.info('message sent'); })
					.catch(error => { console.error('error: ', error); })
				break;

			case 'callback':
				hn.getNews(req.telegram.itemId)
					.then(result => {
						var message = {
							chat_id: req.telegram.chat_id,
							text: `
								*${result.title}*
								Post: _${(new Date(result.time * 1000)).toString()}_
								[](${result.url})
							`,
							parse_mode: 'markdown',
						}
						sendMessage(message)
							.then(result => { console.info('message sent'); })
							.catch(error => { console.error('error: ', error); })
					})
					.catch(error => { console.error('error: ', error); })
				break;

			case 'newstories':
				const post = Math.min(parseInt(req.telegram.text.substring(11)) || 5, 5);
				hn.topNews()
					.then(results => {
						const r = results
							.splice(-post)
							.map(nid => hn.getNews(nid))
						return (Promise.all(r));
					})
					.then(results => {
						console.info('news\n', results);
						var message = {
							chat_id: req.telegram.chat_id,
							text: `*Your ${post} news from Hacker's News*`,
							parse_mode: 'Markdown',
							reply_markup: createInlineKeyboard(results)
						}
						sendMessage(message)
							.then(result => { console.info('message sent'); })
							.catch(error => { console.error('error: ', error); })
					})
					.catch(error => { console.error('error: ', error); })
				break;

			default:
				var message = {
					chat_id: req.telegram.chat_id,
					text: emoji.emojify('Hmmm... I cannot process your message :frowning:')
				}
				sendMessage(message)
					.then(result => { console.info('message sent'); })
					.catch(error => { console.error('error: ', error); })
		}


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
