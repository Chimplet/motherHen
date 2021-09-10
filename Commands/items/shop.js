const itemSchema = require('../../db/schemas/itemSchema')
const { MessageButton, MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");
const { client } = require('../../index')
module.exports = {
    name: 'shop',
    description: 'Displays shop items avaiable to buy/sell',
    async execute(client, interaction, arguments) {
        var curPage = 0;
        var pageCount = 2;
        const row = new MessageActionRow().addComponents(
            
            new MessageButton()
            .setCustomId('backButton')
            .setLabel('<=')
            .setStyle('SUCCESS')  ,
            /*
            new MessageButton()
            .setCustomId('forButton')
            .setLabel('=>')
            .setStyle('SUCCESS'),
            */
            
            new MessageSelectMenu()
            .setCustomId('select')
            .setPlaceholder('Nothing selected')
            .addOptions([
                {
                    label: 'Select me',
                    description: 'This is a description',
                    value: 'first_option',
                },
                {
                    label: 'You can select me too',
                    description: 'This is also a description',
                    value: 'second_option',
                },
            ])
        )
        var items = await itemSchema.find({})
        var shopEmbeds = [
            shopEmbed1 = new MessageEmbed({
                title: `Mother Hen's Wares\n-=-=-=-=-=-=-=-=-=-=-=-=-=-\nPAGE 1`,
                color: "GREEN",
                thumbnail: 'https://cdn.discordapp.com/icons/867616104162525224/a7dc4d134ada8a79fe5009ca89c9e340.webp?size=128'
            }),
            shopEmbed2 = new MessageEmbed({
                title: `Mother Hen's Wares\n-=-=-=-=-=-=-=-=-=-=-=-=-=-\nPAGE 2`,
                color: "GREEN",
                thumbnail: 'https://cdn.discordapp.com/icons/867616104162525224/a7dc4d134ada8a79fe5009ca89c9e340.webp?size=128'
            })

            

        ]
        /*
        items.forEach(element => {
            shopEmbed.addField(element.name, `-=-=-=-=-=-=-=-=-\nPrice : ${element.price}\nDescription : ${element.description}`)
        });
        */
        interaction.reply(({embeds: [shopEmbeds[0]], components: [row]}))

        client.on('interactionCreate', async interaction2 => {
            if (interaction2.isButton()) {
                console.log(interaction2)
                if (interaction2.customId === 'forButton' && curPage < pageCount) {
                    curPage++;
                    interaction2.message.edit(({embeds: [shopEmbeds[curPage]], components: [row]}))

                } else {
                    curPage--;
                    interaction2.message.edit(({embeds: [shopEmbeds[curPage]], components: [row]}))
                }
            }
        
        });

    }


}