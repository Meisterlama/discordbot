module.exports = {
    name: 'avatar',
    aliases : ['icon', 'pfp'],
    description: 'Display your avatar',
    execute(message, args) {
        if (!message.mentions.users.size) {
            return message.channel
                .send(`Your avatar: ${message.author.displayAvatarURL({
                    format: "png",
                    dynamic: true
                })}`);
        }
    },
};