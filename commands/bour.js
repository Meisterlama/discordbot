const Discord = require('discord.js');

function getUserFromMention(client, mention) {
    if (!mention) return;

    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return client.users.cache.get(mention);
    }
}

const displaySettings = {
    format: "png",
    dynamic: true
}

module.exports = {
    name: 'bour',
    description: 'fébour la personne mentionnée, fébour ninno sinon',
    usage: '[mention of the person to bour]',
    execute(message, args) {

        if (args.length === 1) {
            const user = getUserFromMention(message.client, args[0]);
            if (!user) return message.channel.send("There is no mention in the message");


            const messageEmbed = new Discord.MessageEmbed()
                .setColor('#db00ff')
                .setTitle(`fé bour ${user.username}`)
                .setAuthor('Un gars srx', message.author.displayAvatarURL(displaySettings))
                .setDescription('Marmaille la un nich1 ca')
                .setThumbnail(`${user.displayAvatarURL(displaySettings)}`);

            return message.channel.send(messageEmbed);
        } else if (args.length === 0) {
            const messageEmbed = new Discord.MessageEmbed()
                .setColor('#db00ff')
                .setTitle(`fé bour Ninno`)
                .setAuthor('Un gars srx', message.author.displayAvatarURL(displaySettings))
                .setDescription('Marmaille la un nich1 ca')
                .setThumbnail('https://media.discordapp.net/attachments/266970857073672193/695346284109889596/dans_ma_soute.jpg');

            return message.channel.send(messageEmbed);
        } else {
            return message.channel.send("This command only take 0 or 1 arguments");
        }

    },
};