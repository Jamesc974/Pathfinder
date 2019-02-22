const Discord = require ("discord.js");

exports.run = (bot, message, args) => {
    let iconm = message.author.avatarURL;
    let helpembed = new Discord.RichEmbed()
    .setDescription("Menu des commande")
    .setColor("#ffffff")
    .addField("📘 Commandes de basse", "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    .addField(" ▶️ Une Idée", "la Commande: **!idee** Vous permet d'envoyer une idée au staff.")
    .addField(" ▶️ Besoin d'un Rôle", "la Commmande **!role** Vous permet de d'avoir certains rôles.")
    .addField(" ▶️ Personnage Apex ?", "la Commmande **!perso** Vous permet de choisir le personnage que vous jouez le plus.");

    try{
        message.delete().catch(O_o=>{});
        message.channel.sendMessage(helpembed);
    }catch(e){
        message.reply("Vos message privé sont verrouillés. Je ne peux pas vous envoyer les commandes.");
    }
}

module.exports.help = {
    name: "hhelp"
  }
