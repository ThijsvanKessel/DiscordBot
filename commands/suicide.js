module.exports = {
    name: 'suicide',
    description: "suicide is badass",
    execute(message, args, Discord){
        var RandomNumber;
        var ImageLink;
        RandomNumber = Math.floor(Math.random() * Math.floor(6));;
        console.log(RandomNumber);
        switch (RandomNumber){
            case 0: ImageLink = "https://cdn.discordapp.com/attachments/799550980919132181/814441740236226602/giphy_1.gif"; break;
            case 1: ImageLink = 'https://cdn.discordapp.com/attachments/799550980919132181/814441741754695680/giphy_2.gif'; break;
            case 2: ImageLink = 'https://cdn.discordapp.com/attachments/799550980919132181/814441743507783700/giphy_3.gif'; break;
            case 3: ImageLink = 'https://cdn.discordapp.com/attachments/799550980919132181/814441747483459584/giphy_5.gif'; break;
            case 4: ImageLink = 'https://cdn.discordapp.com/attachments/799550980919132181/814441750051160124/giphy_6.gif'; break;
            case 5: ImageLink = 'https://cdn.discordapp.com/attachments/799550980919132181/814441750105554944/giphy_4.gif'; break;
            case 6: ImageLink = 'https://cdn.discordapp.com/attachments/799550980919132181/814441751598071828/giphy.gif'; break;
            default: ImageLink = 'Error';
        }
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('Suicide is Badass')
        .setImage(ImageLink)
        message.channel.send(newEmbed);
    }
}