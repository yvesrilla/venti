const {config} = require('dotenv')
const {Client} = require('discord.js');

config();

const client = new Client({intents: ['Guilds', 'GuildMessages']})



client.login(process.env.BOT_TOKEN)