const client = require("../index");
const { EmbedBuilder } = require("discord.js");

client.on("messageDelete", message => {
    if(message.author.bot)return;
    let embed = new EmbedBuilder()
    .setTitle("Message supprimé")
    .addFields(
        {
            name : 'Utilisateurs',
            value : message.author.username,
        },
        {
            name : 'Contenu',
            value : message.content,
        },
        {
            name : 'Salon',
            value : '<#'+message.channel.id+'>',
        }
    )
    .setColor("#363940")
    .setThumbnail(message.author.avatarURL({format:"png",dynamic:true, size:1024}));
    try {
    client.channels.cache.get("975222096424734781").send({ embeds: [embed] });
        } catch (error) {
  console.error(error);
        }
  })