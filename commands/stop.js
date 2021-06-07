const { MessageEmbed } = require("discord.js");
const { COLOR } = require("../config.json");

const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "STOP THE MUSIC AND TAKE REST",
  execute(client, message, args) {
    let embed = new MessageEmbed().setColor(COLOR);

    const { channel } = message.member.voice;

    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL");
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("THERE IS NOTHING PLAYING THAT I COULD STOP");
      return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};