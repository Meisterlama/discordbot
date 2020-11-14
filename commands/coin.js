module.exports = {
    name: 'coin',
    description: 'Toss a coin',
    cooldown: 5,
    execute(message, args) {
        const result = Math.floor(Math.random() * 2);
        textResult = (result) ? 'Pile' : 'Face';
        message.channel.send(textResult);
    },
};