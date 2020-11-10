module.exports = {
    name: 'server',
    description: 'Display Server name',
    guildOnly: true,
    execute(message, args) {
        message.channel.send(`This server name is: ${message.guild.name}`);
    },
};