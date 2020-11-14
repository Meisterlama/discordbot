module.exports = {
    name: 'status',
    description: 'Set the status of the bot',
    cooldown: 5,
    admin: true,
    execute(message, args) {
        const status = args.join(' ');
        console.log(status);
        message.client.user.setActivity(status, { type: "PLAYING"}).catch(console.error);
    },
};