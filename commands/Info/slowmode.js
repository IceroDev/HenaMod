const { EmbedBuilder } = require("discord.js");
let flag = `ManageMessages`;
module.exports = {
  name: "slowmode",
  description: "Change le slowmode du salon actuel",
  options: [
    {
        type: 4,
        name: 'temps',
        description: 'temps devant être appliqué au slowmode',
        required: true,
        min_value: 0,
        max_value: 3600
        
    }
  ],

  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(flag)) {
        return await interaction.reply({
            content: `Niveau de permission trop bas`,
            ephemeral: true
        });
    }
    var timeToSet = interaction.options.getInteger('temps');
      // Create Embed
      const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setDescription(
          '__**Temps**__ : ' +
            timeToSet +
            's\n__**Modérateur**__ : ' +
            '<@!' +
            interaction.user.id +
            '>'
        )
        .setTitle(`Ce salon est maintenant en slooooooooow mode :turtle:️`);

      if (timeToSet === 0) {
        const embed = new EmbedBuilder()
          .setColor('#008000')
          .setTitle(`Slowmode terminé, bon tchat! :person_running:️`);
          interaction.channel.setRateLimitPerUser(timeToSet)
          return interaction.reply( { embeds: [embed] } );
      } else {
        interaction.channel.setRateLimitPerUser(timeToSet)
        return interaction.reply( { embeds: [embed] } );
      }
  },
};
