const { getFiles } = require("../util/functions")
const fs = require("fs")
const { CommandInteractionOptionResolver } = require("discord.js")


module.exports = (bot, reload) => {
    const {client} = bot

    fs.readdirSync("./commands/").forEach((category)  => {
        let files = getFiles(`./commands/${category}`, ".js")

        CommandInteractionOptionResolver.forEach((f) => {
            if (reload)
                delete require.cache[require.resolve(`../commands/${category}/${f}`)]
            const command = require(`../commands/${category}/${f}`)
            client.commands.set(command.name, command)
        })
    })
    console.log(`Loaded ${client.commands.size} commands`)
}