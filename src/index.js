const {Client} = require('discord.js')
require('dotenv').config();

const client = new Client({intents: ['Guilds', 'GuildMessages']});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    console.log('Hello world!');
  });


const TOKEN = process.env.TOKEN;
client.login(TOKEN)