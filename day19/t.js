hn.topNews()
	.then(results => {
		const r = results
			.splice(-5)
			.map(nid => hn.getNews(nid))
		return (Promise.all(r));
	})
	.then(results => {
		console.info('news\n', results);
	})
	.catch(error => {
	});
