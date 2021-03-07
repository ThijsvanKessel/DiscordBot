module.exports = {
    name: 'help',
    description: "help",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('Help')
        .addFields(
            {name: '!ping', value: 'PING PONG'},
            {name: '!wisdom', value: 'Uncle Iroh'},
            {name: '!suicide', value: 'Suicide is Badass'},
        )
        message.channel.send(newEmbed);
    }
}