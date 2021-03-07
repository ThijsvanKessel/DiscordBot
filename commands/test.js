module.exports = {
    name: 'test',
    description: "It do be testy",
    execute(message, args){
        message.channel.send('Test Complete!');
    }
}