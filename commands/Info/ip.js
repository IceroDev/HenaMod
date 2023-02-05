const { EmbedBuilder } = require('discord.js');module.exports = {
  name: "ip",
  description: "Donne des informations sur une adresse ip ou un domaine",
  options: [
    {
        type: 3,
        name: 'requête',
        description: 'Le domaine/l\ip devant être recherchée',
        required: true,
    }
  ],

  run: async (client, interaction) => {
    var query = interaction.options.getString('requête');
    const axios = require("axios");
axios
  .get(`http://ip-api.com/json/${query}?fields=66846719&lang=fr`)
  .then( async response => {
    if(response.data.status == "fail") return await interaction.reply( { content: "Votre requête a échouée. Votre IP/Domaine est il/elle valide ?", ephemeral: true } );
    var embed = new EmbedBuilder()
    .setTitle("Recherche pour "+query)
    .setDescription(`
        • **IP : ** ${response.data.query}
        • **Pays : ** ${response.data.country}
        • **Région : ** ${response.data.regionName}
        • **Ville : ** ${response.data.city}(${response.data.zip})
        • **TimeZone : ** ${response.data.timezone}
        • **ISP : ** ${response.data.isp}
        • **Organisation : ** ${response.data.org}
        • **AS : ** ${response.data.as}
        • **Reverse DNS : ** ${response.data.reverse}
        • **Mobile ? : ** ${response.data.mobile == true ? ":white_check_mark:" : ":x:"}
    • **Proxy ? : ** ${response.data.proxy == true ? ":white_check_mark:" : ":x:"}
        • **Hosting ? : ** ${response.data.hosting == true ? ":white_check_mark:" : ":x:"}
        `)
    .setImage("https://cache.ip-api.com/"+response.data.lon+","+response.data.lat+",10")
    .setColor("2f3136")
    .setThumbnail("https://flagcdn.com/w1280/"+response.data.countryCode.toLowerCase()+".png")
    return interaction.reply( { embeds: [embed] } );
  })
}
}
