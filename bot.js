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
	var a = Math.floor(Math.random()*26)+1;

	if (message.content === '!dice') {
		var name = message.member.user.username
		message.channel.send(''+(name)+'骰出了'+(ran)+'點');
	}
	
	if (message.content === '!R6') {
	message.channel.send('看門狗推薦選擇第'+(a)+'個!');
	}
	
	if (message.content === '!fuck') {
		var name = message.member.user.username
		message.channel.send('死'+(name)+'今天我沒打死你，我就不當機器人了!');
	}

});
bot.login(auth.token);