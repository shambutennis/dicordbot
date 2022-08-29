const{ SlashCommandBuilder }=require('@discordjs/builders');
const{ REST } =  require('@discordjs/rest');
const{ Routes }=require('discord-api-types/v9');
const{ clientId, guildId, token}=require('./config.json');

const commands = [
    new SlashCommandBuilder().setName('tictactoe').setDescription('Play a game of tictactoe'),
]
const rest= new REST({version: 9}).setToken(token)
rest.put(Routes.applicationGuildCommands(clientId,guildId), {body: commands.map(commands => commands.toJSON())})
    .then(()=> console.log('success registered command'))
    .catch(console.error);
