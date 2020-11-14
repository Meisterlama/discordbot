module.exports = {
    name: 'invite',
    description: 'Generate an invitation link for the bot',
    cooldown: 5,
    admin: true,
    execute(message, args) {
        message.client.generateInvite()
            .then(link => message.channel.send(link))
            .catch(console.error);
    },
};