module.exports = {
    name: 'reactmessage',
    description: 'Send a message and react to it',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('coucou').then(sentMessage => {
            sentMessage.react('👍')
        });
    },
};