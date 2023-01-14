const client = require('../index');

client.on('ready', () => {
	console.log('HullPS is online');

	const Activities = ['Slash Commands'];

	setInterval(() => {
		client.user.setActivity(
			Activities[Math.floor(Math.random() * Activities.length)],
			{ type: 'WATCHING' }
		);
	}, 180000);

});
