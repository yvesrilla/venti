const {config} = from('dotenv')
const {Client} = from('discord.js');

config();

const client = new Client({intents: ['Guilds', 'GuildMessages']})



client.login(process.env.BOT_TOKEN)