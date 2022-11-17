const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "MTA0MjM0MTQwNTY2MzcxMTI5NQ.GljsG9.0rfif2U9YBXGubO_H9DJVPEC4bdLrHIj7cdQGc"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "U!About"){
        message.reply("Uraz is an discord bot that can help you with creating and compiling code.")
    }
})

client.login(provess.env.TOKEN)