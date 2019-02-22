onst Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("❓ Tu as mis son nom ❓");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❗ Non, tu n'as pas les perms");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("❗❗ Cette personne ne peut pas être expulsée!");
    let kickEmbed = new Discord.RichEmbed()
    .setDescription("Kick - Pathfinder")
    .setColor("#A901DB")
    .addField("Utilisateur Kick¬", `${kUser}`, true)
    .addField("Kick Par¬", `<@${message.author.id}>`, true)
    .addField("Kick Dans¬", message.channel, true)
    .addField("Raison¬", kReason, true);

    let kickChannel = message.guild.channels.find(`name`, "logs");
    if(!kickChannel) return message.channel.send("❗ Impossible de trouver le canal des incidents.")

    message.guild.member(kUser).kick(kReason);
    message.delete().catch(O_o=>{});
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
