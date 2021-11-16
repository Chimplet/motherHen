const { MessageEmbed } = require('discord.js');
const economy = require('../../Handlers/economy')
module.exports = {
    name: 'additem',
    description: 'Add new shop item.',
    Perms: "ADMINISTRATOR",
    options: [
        {
            name: "price",
            description: "Price of new item.",
            type: "INTEGER",
            required: true


        },
        {
            name: "description",
            description: "Description of new item.",
            type: "STRING",
            required: true

        },
        {
            name: "name",
            description: "Name of new item.",
            type: "STRING",
            required: true

        }
        
    ],
    async execute(client, interaction, arguments) {
        const price = interaction.options.getInteger('price');
        const description = interaction.options.getString('description')
        const name = interaction.options.getString('name')
        const itemId = interaction.options.getString('name')
        const guildId = interaction.guildId;
        const newItem = await economy.addItem(guildId, itemId, price, description, name)
        console.log(newItem)
        interaction.reply(`<@${interaction.member.user.id}> New item has been added!\n-=-=-=-=-=-=-=-=-=-=-=-=-=-\nName: ${name}\nPrice: ${price}\nDescription : ${description}\n-=-=-=-=-=-=-=-=-=-=-=-=-=-`)





        
    }
}