import {Client} from 'discord.js';

const client = new Client({intents: ['Guilds', 'GuildMessages']})

const TOKEN = 
    'ODE5NTE5NzU0Nzc4NzA1OTcw.Gqzemn.FqZpljp7p-20FET1LLSd0EXnJa4mGjdLqF3xFI'

client.login(TOKEN)