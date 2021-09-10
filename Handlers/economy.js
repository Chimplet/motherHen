const { Mongoose } = require('mongoose')
const { user } = require('..')
const mongo = require('../db/init/mongo')
const profileSchema = require('../db/schemas/profileSchema')
const itemSchema = require('../db/schemas/itemSchema')
const chickenSchema = require('../db/schemas/chickenSchema')



module.exports = async (client) => {

}
module.exports.addItem = async (guildId, itemId, price, description, name) => {
    return await mongo().then(async (mongoose) => {
        try {


            const result = await itemSchema.findOneAndUpdate({
                guildId,
                itemId
            }, {
                guildId, 
                $set: {
                    name: name,
                    price: price,
                    description: description
                }
            }, {
                upsert: true,
                new: true

            })
            
            return result.item
        } finally {
            //mongoose.connection.close()
        }
    })
} 
module.exports.addEggs = async (guildId, userId, eggsAmnt) => {
    return await mongo().then(async (mongoose) => {
        try {


            const result = await profileSchema.findOneAndUpdate({
                guildId,
                userId,
            }, {
                guildId, 
                userId,
                $inc: {
                    eggs: eggsAmnt
                }
            }, {
                upsert: true,
                new: true

            })
            
            return result.eggs
        } finally {
            //mongoose.connection.close()
        }
    })
} 
module.exports.addFertEggs = async (guildId, userId, eggsAmnt) => {
    return await mongo().then(async (mongoose) => {
        try {
            console.log("Running findOneAndUpdate()")

            const result = await profileSchema.findOneAndUpdate({
                guildId,
                userId,
            }, {
                guildId, 
                userId,
                $inc: {
                    ferteggs: eggsAmnt
                }
            }, {
                upsert: true,
                new: true

            })
            
            return result.ferteggs
        } finally {
            //mongoose.connection.close()
        }
    })
} 

module.exports.getEggs = async (guildId, userId) => {

    return await mongo().then(async mongoose => {
        try {
            console.log('Running findOne()')

            const result = await profileSchema.findOne({
                guildId,
                userId
            })

            let eggs = 0;
            let ferteggs = 0;
            console.log(result)
            if (result) {
                eggs = result.eggs
                fertEggs = result.ferteggs
            } else {
                console.log('Inserting data')
                await new profileSchema({
                    guildId,
                    userId,
                    eggs,
                    ferteggs
                }).save()
            }
            var eggbal = {
                eggs,
                ferteggs
            }
            return eggbal
        } finally {
            //mongoose.connection.close()
        }
    })
}
