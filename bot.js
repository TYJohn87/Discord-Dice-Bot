var Discord = require('discord.js');
var auth = require('./auth.json');
var version = require('./version.json');

var bot = new Discord.Client();
bot.on('ready', () => {
  console.log("Discord Bot is starting on "+version.version);
});
bot.on('message', message => {
	if (message.channel.type != 'text') return;

	var ran = Math.floor(Math.random()*100)+1;

	if (message.content === '!dice') {
		var name = message.member.user.username
		message.channel.send(''+(name)+'骰出了'+(ran)+'點');
	}
});
bot.login(auth.token);
