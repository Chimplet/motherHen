const { MessageEmbed } = require('discord.js');
const economy = require('../../Handlers/economy')
const talkedRecently = new Set();
  
module.exports = {
    name: 'layeggs',
    description: 'Lay a random sized cluster of eggs, with a low chance of a fertilized egg',
    async execute(client, interaction, arguments) {
        if (talkedRecently.has(interaction.member.user.id)) {
            interaction.reply(`<@${interaction.member.user.id}>Give your bumhole a break (1 min cooldown)`)
        } else {
            const guildId = interaction.guildId;
            const userId = interaction.member.user.id
            var eggsAmnt = Math.floor(Math.random() * 100);
            var fertChance = Math.floor(Math.random() * 100);
            const newEggs = await economy.addEggs(guildId, userId, eggsAmnt)
            if (fertChance === 56) {
                const newFertEggs = await economy.addFertEggs(guildId, userId, 1)
                interaction.reply(`<@${userId}>'s You laid ${eggsAmnt} egg(s) !\nNew balance: ${newEggs}\n-=-=-=-=-=-=-=-=-=-=-=-=-=-\nYou pooped out a fertilized egg !\nNew balance: ${newFertEggs}`)

            } else {
                interaction.reply(`<@${userId}>'s You laid ${eggsAmnt} egg(s) !\nNew balance: ${newEggs}`)

            }
            


        talkedRecently.add(interaction.member.user.id);
        setTimeout(() => {
          talkedRecently.delete(interaction.member.user.id);
        }, 60000);
        }

    }
}
