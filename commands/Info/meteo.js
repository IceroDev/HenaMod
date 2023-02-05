const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "meteo",
  description: "Donne des informations sur la météo dans une ville",
  options: [
    {
      type: 3,
      name: "requête",
      description: "La ville pour laquelle vous voulez la météo",
      required: true,
    },
    {
        type: 3,
        name: "visibilité",
        description: "Le résultat doit-il être public ? (oui|non)",
        required: false,
      }
  ],

  run: async (client, interaction) => {
    var query = interaction.options.getString("requête");
    var visibility = interaction.options.getString("visibilité");
    var weather = require("weather-js");
    weather.find(
      { search: query, degreeType: "C" },
      function (err, result) {
        data = JSON.stringify(result, null, 2);
        if (err){
            return console.log(err);
        } 
        console.log(result[0])
        var embed = new EmbedBuilder()
          .setTitle("Météo "+result[0].location.name)
          .setDescription(
            "🌡️ Température actuelle: " +
              result[0].current.temperature +
              "°C\n" +
              "☁️ Vents actuel: " +
              result[0].current.windspeed +
              "\n" +
              "💧 Humidité actuelle: " +
              result[0].current.humidity +
              "%\n\n\n" +
              "**__Prévisions__ :**\n" +
              "**Aujourd'hui :**\n" +
              "🌡️ Température min: " +
              result[0].forecast[1].low +
              "°C\n" +
              "🌡️ Température max: " +
              result[0].forecast[1].high +
              "°C\n" +
              "💧 Risque précipitations: " +
              result[0].forecast[1].precip +
              "%\n\n" +
              "**Demain :**\n" +
              "🌡️ Température min: " +
              result[0].forecast[2].low +
              "°C\n" +
              "🌡️ Température max: " +
              result[0].forecast[2].high +
              "°C\n" +
              "💧 Risque précipitations: " +
              result[0].forecast[2].precip +
              "%\n\n" +
              "**Après-demain :**\n" +
              "🌡️ Température min: " +
              result[0].forecast[3].low +
              "°C\n" +
              "🌡️ Température max: " +
              result[0].forecast[3].high +
              "°C\n" +
              "💧 Risque précipitations: " +
              result[0].forecast[1].precip +
              "%\n"
          )
          .setImage(`https://cache.ip-api.com/${result[0].location.long},${result[0].location.lat},10`)
          .setColor("2f3136")
          .setThumbnail(result[0].current.imageUrl)
        if(visibility == "oui" || visibility == "yes" || visibility == "o" || visibility == "y"){
            return interaction.reply({ embeds: [embed] });
        }else{
            return interaction.reply({ embeds: [embed], ephemeral: true });
        }
        
      }
    );
  },
};
