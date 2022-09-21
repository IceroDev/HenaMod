const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = (client, msg) => {
    if(msg.author.bot)return;
    let embed = new MessageEmbed()
    .setTitle("Message supprimé")
    .addField("Utilisateur",msg.author.username)
    .addField("Contenu",msg.content)
    .addField("Salon","<#"+msg.channel.id+">")
    .setColor("#363940")
    .setThumbnail(msg.author.avatarURL({format:"png",dynamic:true, size:1024}))
    client.channels.cache.get("975222096424734781").send(embed)
  }
  