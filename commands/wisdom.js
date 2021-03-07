module.exports = {
    name: 'wisdom',
    description: "this is wisdom",
    execute(message, args, Discord){
        var RandomNumber;
        var IrohWisdom;
        RandomNumber = Math.floor(Math.random() * Math.floor(15));;
        console.log(RandomNumber);
        switch (RandomNumber){
            case 0: IrohWisdom = "There is nothing wrong with a life of peace and prosperity. I suggest you think about what it is you want from your life."; break;
            case 1:
                IrohWisdom = 'Be careful what you wish for, admiral. History is not always kind to its subjects.';
                break;
            case 2:
                IrohWisdom = 'Failure is only the opportunity to begin again.';
                break;
            case 3:
                IrohWisdom = 'Sometimes, the best way to solve your own problems is to help someone else.';
                break;
            case 4:
                IrohWisdom = 'Good times become good memories, but bad times make good lessons.';
                break;
            case 5:
                IrohWisdom = 'It is usually best to admit mistakes when they occur, and to seek to restore honor.';
                break;
            case 6:
                IrohWisdom = 'It is important to draw wisdom from many different places.';
                break;
            case 7:
                IrohWisdom = 'It is time for you to look inward and start asking yourself the big question: Who are you and what do you want?';
                break;
            case 8:
                IrohWisdom = 'Sharing tea with a fascinating stranger is one of life’s true delights.';
                break;
            case 9:
                IrohWisdom = 'Hope is something you give yourself. That is the meaning of inner strength.';
                break;
            case 10:
                IrohWisdom = 'Somtimes life is like this dark tunnel. You can’t always see the light at the end of the tunnel, but if you just keep moving you will come to a better place.';
                break;
            case 11:
                IrohWisdom = 'Destiny is a funny thing. You never know how things are going to work out. But if you keep an open mind and an open heart, I promise you will find your own destiny.';
                break;
            case 12:
                IrohWisdom = 'While it is always best to believe in oneself, a little help from other can be a great blessing.';
                break;
            case 13:
                IrohWisdom = "Pride is not the opposite of shame, but its source. True humility is the only antidote to shame.";
                break;
            case 14:
                IrohWisdom = 'Life happens wherever you are, wheter you make it or not.';
                break;
            case 15:
                IrohWisdom = 'Life happens wherever you are, wheter you make it or not.';
                break;
            default:
                IrohWisdom = 'NO!';
        }
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#384281')
        .setTitle('Uncle Iroh')
        .setImage('https://cdn.discordapp.com/attachments/812289264792371242/814424897769570314/Kerst_Iroh.png')
        .addFields({name: 'Wisdom', value: IrohWisdom});
        message.channel.send(newEmbed);
    }
}