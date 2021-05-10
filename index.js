// Discord 
const Discord = require('discord.js');
const bot = new Discord.Client();
// Bot important variables
let prefix = '';
let token = 'insert here your bot token';

// Starting bot and setting up a status
bot.on('ready', () => {
  console.log('Heeere we go!');
  bot.user.setStatus('online');
  bot.user.setPresence({
    game: {
      name: 'Your Status ',
      type: "PLAYING",
      // url: "https://www.twitch.tv/"
    }
  });
});

// An example of basic command
bot.on('message', message => {
      if(message.content === '!test') {
      message.reply('Heya !\nYou just send : ', message.content);  
      }
});

// Setting up a handler
  // Setting up fs, which'll read your files
const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command.description, command);
}
  // Bot responds to commands 
bot.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;
  try {
	  bot.commands.get(command).execute(message, args);
	} catch (error) {
	  console.error(error);
		message.reply('An error occured when i tried to execute this command.');
	}
});  

bot.login(token);
