const punchlines = require('../punchline.json');

module.exports = {
    name: 'embellie',
    description: 'Insulte celui qui le merite',
    cooldown: 3,
    usage: '[mention de l\'embellie]',
    execute(message, args) {
        const index = Math.floor(Math.random() * punchlines.length);
        return message.channel.send(punchlines[index]);
    },
};