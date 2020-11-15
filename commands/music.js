const fs = require('fs');

var dispatcher;
var connection;

module.exports = {
    name: 'music',
    description: 'Play random music',
    guildOnly: true,
    cooldown: 5,
    async execute(message, args) {
        if (args[0] === 'kill' && dispatcher)
        {
            dispatcher.destroy();
            connection.disconnect();
        }
        else if (message.member.voice.channel) {
            connection = await message.member.voice.channel.join();

            const musics = fs.readdirSync('music');//.filter(file => file.endsWith('.mp3'));
            const index = Math.floor(Math.random() * musics.length);
            // Create a dispatcher
            dispatcher = connection.play(`music/${musics[index]}`, { volume: 0.5});
            console.log(musics[index]);

            dispatcher.on('start', () => {
                console.log('audio.mp3 is now playing!');
            });

            dispatcher.on('finish', () => {
                console.log('audio.mp3 has finished playing!');
            });

            // Always remember to handle errors appropriately!
            dispatcher.on('error', console.error);
        }
    },
};