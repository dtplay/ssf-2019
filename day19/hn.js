const request = require('request-promise-native')
const HN = 'https://hacker-news.firebaseio.com/v0';

const topNews = () => 
	request.get(`${HN}/newstories.json`)
		.then(r => JSON.parse(r));

const getNews = (newsId) => 
	request.get(`${HN}/item/${newsId}.json`)
		.then(r => JSON.parse(r));


module.exports = { topNews, getNews }; 
