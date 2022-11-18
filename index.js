const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix:"n.",
    owners: ["737379291490418698"]
}


client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.lodCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands = (bot, false)


module.exports = bot









client.on("messageCreate", (message) => {
    if (message.content == "!about"){
        message.reply("Uraz is an discord bot that can help you create code and manage your server")
    }
})

//client.on("messageCreate", (message) => {
    //if (message.content == "Abi ben nerdeyim?"){
       // message.reply("Ebenin nikahında.")
   // }
//})

const welcomeChannelId = "1042862157282426971"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome.`,
        files: [img]
    })
})




client.login(process.env.TOKEN)