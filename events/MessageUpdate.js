const client = require("../index");
const { EmbedBuilder } = require("discord.js");

client.on("messageUpdate", function(oldMessage, newMessage) {
    if(oldMessage.author.bot)return;
    let embed = new EmbedBuilder()
    .setTitle("Message modifié")
    .addFields(
        {
            name : 'Utilisateurs',
            value : oldMessage.author.username,
        },
        {
            name : 'Ancien MSG',
            value : oldMessage.content,
        },
        {
            name : 'Nouveau MSG',
            value : newMessage.content,
        },
        {
            name : 'Salon',
            value : '<#'+oldMessage.channel.id+'>',
        }
    )
    .setColor("#363940")
    .setThumbnail(oldMessage.author.avatarURL({format:"png",dynamic:true, size:1024}));
    try {
    client.channels.cache.get("975222096424734781").send({ embeds: [embed] });
        } catch (error) {
  console.error(error);
        }
  })