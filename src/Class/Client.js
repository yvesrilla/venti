
const {Client, ActivityType, GatewayIntentBits} = require('discord.js');



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ],
})

client.on('ready', () =>
{
    console.log("online!");
    client.user.setActivity('my dev rewrite code!', { type: ActivityType.Watching });
});



module.exports = client