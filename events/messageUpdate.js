const { DiscordAPIError, MessageEmbed } = require("discord.js")

module.exports = (client, oldmsg, newmsg) => {
    if(oldmsg.author.bot)return;
    let embed = new MessageEmbed()
    .setTitle("Message modifié")
    .addField("Utilisateur",oldmsg.author.username)
    .addField("Contenu",oldmsg.content + "** -> **" + newmsg.content)
    .addField("Salon","<#"+oldmsg.channel.id+">")
    .setColor("#363940")
    .setThumbnail(oldmsg.author.avatarURL({format:"png",dynamic:true, size:1024}))
    client.channels.cache.get("975222096424734781").send(embed)
  }
  