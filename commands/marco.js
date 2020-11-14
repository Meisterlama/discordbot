module.exports = {
    name: 'marco',
    aliases: ['ocram'],
    description: 'Polo!',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('Polo !');
    },
};