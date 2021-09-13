const itemSchema = require('../../db/schemas/itemSchema')
const { MessageButton, MessageEmbed, MessageActionRow, MessageSelectMenu} = require("discord.js");
const { client } = require('../../index')
const economy = require('../../Handlers/economy');
const { deleteModel } = require('mongoose');
module.exports = {
    name: 'shop',
    description: 'Displays shop items avaiable to buy/sell',
    async execute(client, interaction, arguments) {
        var curPage = 0;
        const guildId = interaction.guildId;
        var pageCount = 2;
        const shopRow = new MessageActionRow().addComponents(
            
            new MessageButton()
            .setCustomId('backButton')
            .setLabel('<=')
            .setStyle('PRIMARY')  ,
            new MessageButton()
            .setCustomId('forButton')
            .setLabel('=>')
            .setStyle('PRIMARY'),
            new MessageButton()
            .setCustomId('buyButton')
            .setLabel('BUY')
            .setStyle('SUCCESS')
        
            /*

            */
        )

        var buyRows = [

        ]
        var itemSelects = [

        ]
        var itemSelectsList = [

        ]
            
        

        
        var shopEmbeds = [
            shopEmbed = new MessageEmbed({
                title: `Mother Hen's Wares\n-=-=-=-=-=-=-=-=-=-=-=-=-=-\nPAGE 1`,
                color: "ORANGE",
                thumbnail: 'https://cdn.discordapp.com/icons/867616104162525224/a7dc4d134ada8a79fe5009ca89c9e340.webp?size=128'
            })
        ]
        var buyEmbed = new MessageEmbed({
            title: 'BUY MENU\n-=-=-=-=-=-=-=-=-=-=-=-=-=-\nPAGE 1',
            color: "GREEN",
            thumbnail: 'https://cdn.discordapp.com/icons/867616104162525224/a7dc4d134ada8a79fe5009ca89c9e340.webp?size=128'

        })

    



        var curPage = 0;
        var curList = 0;
        var items = await itemSchema.find({})
        let itemAmnt = 0;
        let selectAmnt = 0;
        var pageCount = shopEmbeds.length;
        items.forEach(element => {
            console.log(`${element.name} loaded`)
            if (itemAmnt === 5) {
                itemAmnt = 0;
                curPage++
                curList++
                shopEmbeds[curPage] = new MessageEmbed({
                    title: `Mother Hen's Wares\n-=-=-=-=-=-=-=-=-=-=-=-=-=-\nPAGE 1`,
                    color: "ORANGE",
                    thumbnail: 'https://cdn.discordapp.com/icons/867616104162525224/a7dc4d134ada8a79fe5009ca89c9e340.webp?size=128'
                });
                buyRows[curList] = new MessageActionRow().addComponents(
                    new MessageSelectMenu({
                        customId: curList,
                        options: itemSelects
                    
    
                    })
                )



            }
            selectAmnt++;
            itemSelects[itemAmnt] = {
                label: `${element.name} : ${element.price} eggs(s)`,
                descrition: `${element.description}`,
                value : element.price,
                customId: element.itemId
            }
            shopEmbeds[curPage].addField(element.name, `-=-=-=-=-=-=-=-=-\nPrice : ${element.price}\nDescription : ${element.description}`)
            itemAmnt++;

        });
        pageCount = shopEmbeds.length;

        console.log(buyRows[curList])
        interaction.reply(({embeds: [shopEmbeds[0]], components: [shopRow]}))
        curPage = 0;
        client.on('interactionCreate', async interaction2 => {
            if (interaction2.isButton()) {
                if (interaction2.customId === 'forButton' && curPage < pageCount) {
                    curPage++;
                    interaction2.message.edit(({embeds: [shopEmbeds[curPage]], components: [shopRow]}))

                } else if (interaction2.customId === 'backButton' && curPage > 0){
                    curPage--;
                    interaction2.message.edit(({embeds: [shopEmbeds[curPage]], components: [shopRow]}))
                } else if (interaction2.customId === 'buyButton'){
                    buyRows[curList]
                    interaction2.message.edit(({embeds: [buyEmbed], components: [buyRows[curList]]}))

                }


            } else if (interaction2.isSelectMenu()) {
                if (interaction2.customId === 'a') {
                    
                }
            }
        
        });

    }


}