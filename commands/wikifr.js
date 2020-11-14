const wikipedia = require('wikijs').default;
const Discord = require('discord.js');

function chunkString(str) {
    return str.match(/(.|\n){1,1000}\./g);
}

module.exports = {
    name: 'wikifr',
    description: 'Wikipedia article',
    cooldown: 5,
    async execute(message, args) {

        const wiki = new wikipedia({ apiUrl: 'https://fr.wikipedia.org/w/api.php' });
        let name;
        if (args.length === 0) {
            const names = await wiki.random();
            name = names[0];
        } else {
            name = args.join(' ');
        }
        const page = await wiki.page(name).catch(error => {});
        if (!page) return message.channel.send("No article was found");
        
        const pageSummary = await page.summary();
        const pageImage = await page.mainImage();
        if (!pageSummary || !pageImage) return message.channel.send("No article was found");

        let strings;
        if (pageSummary.length > 1000) {
            strings = chunkString(pageSummary, 1000);
        } else {
            strings = [pageSummary];
        }

        let otherEmbed = new Discord.MessageEmbed()
            .setColor(0xff0000)
            .setTitle(page.raw.title)
            .setAuthor('Random Wikipedia Article', 'https://fr.wikipedia.org/static/images/mobile/copyright/wikipedia.png', 'https://wikipedia.org')
            .setURL(page.raw.fullurl)
            .setImage((pageImage) ? `${pageImage}` : '')
        for (let str of strings) {
            otherEmbed.addField('\u200B', str.trim());
        }

        await message.channel.send(otherEmbed);

    },
};