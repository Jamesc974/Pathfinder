const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //!clear 15
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Vous n'avez pas la permission.");
    if(!args[0]) return message.channel.send("Impossible de supprimer autant de messages");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Nettoyage de ${args[0]} messages :ok_hand: .`).then(msg => msg.delete(5000));
    }
);
}

module.exports.help = {
    name: "clear"
}
