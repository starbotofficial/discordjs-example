const Discord = require('discord.js')
const bot = new Discord.Client()

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

bot.on('message', message => {
      if(message.content === '!test') {
      message.reply('Heya !\nYou just send : ', message.content);  
      }
});
          
bot.login('TOKEN');
