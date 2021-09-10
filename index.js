const { Client, Collection, Intents } = require('discord.js')
const client = new Client({ intents: 32767})
const { Token } = require('./config.json')
const mongo = require('./db/init/mongo')
module.exports = client;
client.commands = new Collection();

['events', 'commands', 'economy'].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
})

client.on('ready', async () => {
    await mongo().then(mongoose => {
        try {
            console.log("[!]Connected to MongoDB")
        } catch(e) {

        } finally {
            console.log("HEREREEERE")
            //mongoose.connection.close()
        }
    })
})
client.login('ODgzMTc2NTEwNjc1MTIwMTQ4.YTGIOA.SUHqhhCde8qhOAO1L-HTTK4coy8')
