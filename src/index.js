const {config} = require('dotenv')
const {Client, ActivityType} = require('discord.js');

config();

const client = new Client({intents: ['Guilds', 'GuildMessages']})

client.on('ready', () =>
{
    console.log("online!");
    client.user.setActivity('my dev rewrite code!', { type: ActivityType.Watching });
});

client.login(process.env.BOT_TOKEN)