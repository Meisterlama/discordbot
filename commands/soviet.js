var dispatcher;
var connection;

module.exports = {
    name: 'soviet',
    description: 'Play soviet',
    guildOnly: true,
    async execute(message, args) {
        if (args[0] === 'kill' && dispatcher)
        {
            dispatcher.destroy();
            connection.disconnect();
        }
        else if (message.member.voice.channel) {
            connection = await message.member.voice.channel.join();

            // Create a dispatcher
            dispatcher = connection.play('music/soviet.mp3', { volume: 0.5});

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