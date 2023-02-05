const { EmbedBuilder } = require("discord.js");
let flag = `ManageMessages`;
module.exports = {
  name: "clear",
  description: "Supprime une certaine quantité de messages",
  options: [
    {
        type: 4,
        name: 'nombre',
        description: 'le nombre de messages devant être supprimés',
        required: true,
        min_value: 1,
        max_value: 100
        
    }
  ],

  run: async (client, interaction) => {
    if (!interaction.member.permissions.has(flag)) {
        return await interaction.reply({
            content: `Niveau de permission trop bas`,
            ephemeral: true
        });
    }
    var msgToClear = interaction.options.getInteger('nombre');
      // Create Embed
      const embed = new EmbedBuilder()
        .setColor('#7393B3')
        .setDescription(
          '__**Messages supprimés**__ : ' +
          msgToClear +
            '\n__**Modérateur**__ : ' +
            '<@!' +
            interaction.user.id +
            '>'
        )
        .setTitle(`Un modérateur a supprimé des messages 🗑️`);
        interaction.channel.messages.fetch({limit: msgToClear}).then(messages => interaction.channel.bulkDelete(messages, true));
        return interaction.reply( { embeds: [embed] } );
      
  },
};
