const {config} = require('dotenv')
const client = require('./Class/Client')
config();

client.login(process.env.BOT_TOKEN);