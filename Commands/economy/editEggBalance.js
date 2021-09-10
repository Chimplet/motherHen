const { MessageEmbed } = require('discord.js');
const economy = require('../../Handlers/economy')
module.exports = {
    name: 'editbalance',
    description: 'Edit a users egg balance.',
    Perms: "ADMINISTRATOR",
    options: [
        {
            name: "quantity",
            description: "Number of eggs to edit by",
            type: "INTEGER",
            required: true


        },
        {
            name: "type",
            description: "Type of eggs to edit",
            type: "INTEGER",
            required: true

        },
        {
            name: "target",
            description: "Target balance",
            type: "USER",
            required: false

        }
    ],
    async execute(client, interaction, arguments) {
        const target = interaction.options.getUser('target');
        const eggsAmnt = interaction.options.getInteger('quantity')
        const eggsType = interaction.options.getInteger('type')
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
        if (eggsType === 1) {
            const newEggs = await economy.addEggs(guildId, userId, eggsAmnt)
            interaction.reply(`<@${targetId}>'s **egg** balance was changed by : ${eggsAmnt} egg(s)\nNew balance: ${newEggs}`)
        } else if (eggsType === 2) {
            const newFertEggs = await economy.addFertEggs(guildId, userId, eggsAmnt)
            interaction.reply(`<@${targetId}>'s **fertilized egg** balance was changed by : ${eggsAmnt} egg(s)\nNew balance: ${newFertEggs}`)
        }
        
    }
}