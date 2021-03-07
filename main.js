const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');
const { disconnect } = require('process');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Uncle Iroh Up And Running!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    switch (command){
        case 'help': client.commands.get('help').execute(message, args, Discord); break;
        case 'ping': client.commands.get('ping').execute(message, args); break;
        case 'test': client.commands.get('test').execute(message, args); break;
        case 'wisdom': client.commands.get('wisdom').execute(message, args, Discord); break;
        case 'suicide': client.commands.get('suicide').execute(message, args, Discord); break;
        default: message.channel.send('Watte, ik begrijp het niet');
    }
});


client.login('Nzk4NDY2MTc2Mjg2OTgyMTY1.X_1bkw.bR4uCMsuqNF_OHiJqocFHHX_Oec');