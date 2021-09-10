const { Message } = require('discord.js')
const economy = require('../../Handlers/economy')
module.exports = {
    name: 'balance',
    description: 'Shows user egg balance.',
    options: [
        {
            name: "target",
            description: "Target balance",
            type: "USER",
            required: false

        }

    ],
    async execute(client, interaction, arguments) {
        const target = interaction.options.getUser('target');
        var targetId;
        var targetName;
        if (!target) {
            targetId = interaction.member.user.id
            targetName = interaction.member.user.username
        } else {
            targetName = target.username
            targetId = target.id
        }
        const guildId = interaction.guildId;
        const userId = targetId;
        var eggBals = await economy.getEggs(guildId, userId)
        console.log(await economy.getEggs(guildId, userId).fertEggsBal)
        interaction.reply(`<@${targetId}> has : \n-=-=-=-=-=-=-=-=-=-=-=-=-=-\n${eggBals.ferteggs} fertilized egg(s)\n${eggBals.eggs} egg(s)`)

        


    }
}