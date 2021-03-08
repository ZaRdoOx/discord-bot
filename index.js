const Discord = require("discord.js");

const Client = new Discord.Client();

const prefix = "-";

Client.on("ready", () => {
    console.log("bot opérationnel");
});


Client.on("guildMemberAdd", member => {
    console.log("New Member");
    member.guild.channels.cache.find(channel => channel.id === "817567215053176832").send(`Welcome to the server, ${member}`);
});

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.content == prefix + "help"){
        message.channel.send("Bot is In development");

    }

});




Client.login(process.env.TOKEN);