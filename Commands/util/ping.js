const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Testing.',
    Perms: "ADMINISTRATOR",
    execute(client, interaction, arguments) {

        const Response = new MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${client.ws.ping}ms`)
        interaction.reply({embeds: [Response]})

    }
}