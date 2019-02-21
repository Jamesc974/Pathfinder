const Discord = require("discord.js");
const setting = require("./setting.json");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const embed = new Discord.RichEmbed();
bot.commands = new Discord.Collection();
prefix = "!";

fs.readdir("./commands/", (err, files) => {
    
      if(err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
      }
    
      jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
      });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = setting.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});


bot.on("ready", async () => {
    console.log(`${bot.user.username} est en ligne !`);
});

//-----------------------------------------------------------------------------------------
//-----------------------------------Réglements--------------------------------------------
//-----------------------------------------------------------------------------------------

bot.on('message', message => {
  if (message.content.startsWith(prefix + "reglement")) {
    if(message.author.id == "104935392658137088") {
      let args = message.content.split(" ").slice(1);
      let thingToEcho = args.join(" ")
      var iconm = message.author.avatarURL
      var embed1 = new Discord.RichEmbed()
        .setTitle("Règlement")
        .setDescription(`La communauté possède un règlement qui se doit d'être respecté, afin de maintenir une bonne ambiance au sein du serveur. Toute infraction au règlement résultera à une sanction adaptée à la gravité de vos actes. Le Staff se réserve le droit s'il en juge nécessaire, de sanctionner tout comportement incorrect, même si celui-ci ne rentre pas dans le règlement`)
        .setColor("#CD2929")
      var embed2 = new Discord.RichEmbed()
        .setTitle("__**Les règles générales (s'appliquent en vocal et à l'ecrit)**__")
        .setDescription(
        `
        Sont interdits les comportements suivant (le non-respect de ces interdictions peuvent s'ensuivre d'un ban)
        • Le troll
        • Tout comportement discriminatoire/haine/insultant (homophobie, racisme, sexisme, etc...)
        • Le partage d'informations privées sans le consentement de la personne concernée.
        • Les double comptes
        • Le contournement de mute, ban, et autres sanctions.
        `)
        .setColor("#CD2929")
      var embed5 = new Discord.RichEmbed()
        .setAuthor("Bienvenue !", iconm)
        .addField("si votre compte Discord n'a pas son adresse e-mail de vérifiée, vous ne serrez pas apte à ècrire dans ce salon.")
        .setColor("#A901DB")
        .setTimestamp()
        .setFooter("Create by TarKyo")
      message.delete().catch(O_o=>{});
      message.guild.channels.find("name", "📃-règlement").sendEmbed(embed1)
      message.guild.channels.find("name", "📃-règlement").sendEmbed(embed2)
      message.guild.channels.find("name", "📃-règlement").sendEmbed(embed5)
    }else{
      return message.reply("Tu n'as pas la permission.")
  }}});

//-----------------------------------------------------------------------------------------
//--------------------------------------Role-----------------------------------------------
//-----------------------------------------------------------------------------------------

bot.on('message', message => {
  if (message.content.startsWith(prefix + "roleinfo")) {
    if(message.author.id == "104935392658137088") {
      let args = message.content.split(" ").slice(1);
      let thingToEcho = args.join(" ")
      var iconm = message.author.avatarURL
      var embed11 = new Discord.RichEmbed()
        .addField(":video_game: Joueur", "Il s’agit du rôle que vous obtenez en arrivant sur le serveur Discord.")
        .setColor("#151414")
      var role = new Discord.RichEmbed()
        .addField(":milky_way: Rôles général", 'Ces différents rôles peuvent être obtenu en ajoutant la réaction qui lui est associé.\nSi tu cherhe as avoir un role fait `' + `!role` +'` dans #💡-commandes ')
        .setColor("#4354C0")
      var jeu = new Discord.RichEmbed()
        .addField("👤 Personnage", 'Ces différents rôles peuvent être obtenu en ajoutant la réaction qui lui est associé. Si tu cherhe as avoir un role jeu fait `' + `!perso` +'`')
        .setColor("#0E8CB3")
      message.delete().catch(O_o=>{});
      message.guild.channels.find("name", "🌀-rôles").sendEmbed(embed11)
      message.guild.channels.find("name", "🌀-rôles").sendEmbed(role)
      message.guild.channels.find("name", "🌀-rôles").sendEmbed(jeu)
    }else{
      return message.reply("Tu n'as pas la permission.")
  }}});

//-----------------------------------------------------------------------------------------
//-----------------------------------postes pro--------------------------------------------
//-----------------------------------------------------------------------------------------

bot.on('message', message => {
  if (message.content.startsWith(prefix + "pap")) {
    if(message.author.id == "404351381093351425") {
      if(message.channel.id == "484044429288538134") {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var iconm = message.author.avatarURL
        var poste = new Discord.RichEmbed()
          .addField(":warning: Les postes à pourvoirs", 
          `Ce salon a pour objectif de parler des recrutements non conventionnels qui sont ouverts sur le serveur.
          Nous vous informerons des nouveaux postes le plus rapidement possible.`)
          .setColor("#C0013D")
        message.delete().catch(O_o=>{});
        message.guild.channels.find("name", "postes-disponible").sendEmbed(poste)
      }
    }else{
      return message.reply("Tu n'as pas la permission.")
  }}});

//-----------------------------------------------------------------------------------------
//------------------------------------Annonces---------------------------------------------
//-----------------------------------------------------------------------------------------

bot.on('message', message => {
  if (message.content.startsWith(prefix + "annonce")) {
    if(message.author.id == "104935392658137088") {
      if(message.channel.id == "547830748258893852") {
        let args = message.content.split(" ").slice(1);
        let thingToEcho = args.join(" ")
        var iconm = message.author.avatarURL
        var embed = new Discord.RichEmbed()
          .setAuthor("📣 annonce", iconm)
          .addField("Nouvelle annonce:", thingToEcho)
          .setColor("#A901DB")
          .setTimestamp()
          .setFooter(`Par ${message.author.tag}`)
        message.delete().catch(O_o=>{});
        message.guild.channels.find("name", "annonces").sendEmbed(embed)
        .then(function (message) {
          message.react("👍")
          message.react("👎")
      }).catch(function() {
      });
    }else{
      return message.reply("Tu n'as pas la permission.")
  }};
}});

//-----------------------------------------------------------------------------------------
//--------------------------------------Idées----------------------------------------------
//-----------------------------------------------------------------------------------------

bot.on('message', message => {
  if (message.content.startsWith(prefix + "idee")) {
    if(message.channel.id == "547930283328929793") {
      let args = message.content.split(" ").slice(1);
      let thingToEcho = args.join(" ")
      var iconm = message.author.avatarURL
      var idee = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag}`, iconm)
        .addField("Iddé:", thingToEcho)
        .setColor("#A901DB")
        .setTimestamp()
        .setFooter(`•`)
      message.delete().catch(O_o=>{});
      message.guild.channels.find("name", "boite-à-idées").sendEmbed(idee)
      .then(function (message) {
        message.react("👍")
        message.react("👎")
      })
    }
  }
});

bot.login(process.env.TOKEN);

bot.on('guildMemberAdd', member => {
  var welcomemsg = new Discord.RichEmbed()
  .setColor("#009900")
  .setDescription(`${member}, nous te souhaitons la bienvenue :wave:`)
  var welcomemsgsend = member.guild.channels.find("name", "👤-salon-accueil")
  if(!welcomemsgsend) return;

  welcomemsgsend.sendEmbed(welcomemsg);
  var role = member.guild.roles.find('name', '🎮 Joueur');
  member.addRole(role)
});

bot.on('guildMemberRemove', member => {
 var welcomemsg = new Discord.RichEmbed()
  .setColor("#bc0000")
  .setDescription(`${member}, nous a quitté. :wave: ! `)
  var welcomemsgsend = member.guild.channels.find(`name`, "👤-salon-accueil")
  if(!welcomemsgsend) return;

  welcomemsgsend.sendEmbed(welcomemsg);
});

//-----------------------------------------------------------------------------------------
//---------------------------------systeme role--------------------------------------------
//-----------------------------------------------------------------------------------------

//Embed for error
function sendError(message, description) {
	embed.setColor("0xCC0000").setDescription(':x: ' + description);
	return message.channel.send({ embed: embed }).then(msg => msg.delete(10000)).catch(console.error);

}

//embed for short text
function sendEmbed(message, description, type, suppression) {
	colorList = ["AQUA", "GREEN", "BLUE", "PURPLE", "GOLD", "ORANGE", "0xFF7F00", "0xFFFF00", "0x22FF00", "0x2200FF", "0x663399", "0x7851a9"];
	var color = colorList[Math.floor(Math.random() * colorList.length)];
	var embed = new Discord.RichEmbed();
	embed.setColor(color).setDescription(description);

	if (type === 'send') {
		return message.channel.send({ embed: embed }).then((msg) => { if (suppression) { msg.delete(10000) } }).catch(console.error);
	}
	if (type === 'reply') {
		return message.reply({ embed: embed }).then(msg => { if (suppression) { msg.delete(10000) } }).catch(console.error);
	}

}


bot.on('message', async message => {

	//Variable to reach simply the message
	const splitMessage = message.content.split(' ');

	//function used to determine if the message channel is the botChannel defined on the setting file
	function isBotChannel() {
		return ((message.channel.id === setting.salonBotId));
	}
	function isCommand(command) {
		return splitMessage[0] === setting.prefix + command;
	}
	if (message.author.bot) return;

	//prefix check
	if (!splitMessage[0].startsWith(setting.prefix)) return;

	//BotChannel check
	if (isBotChannel()) {

		if (isCommand('role')) {

			//role id for the years
			let PC = "547915203472523266";
			let PS4 = "547915249039441921";
			let XBOX = "547915282459394091";
			let NoMicro = "548100886271098881";
			let Videaste = "548100781828603906";
			


			if (message.member.roles.has("359433618512150539")) { return sendError(message, `Impossible d\'effectuer l\'action, vous êtes déjà considéré comme présenté. Si \n besoin envoyé un message à <@175586990916501505> ou <@&356867242924965889>`); }

			let messageAuthorId = message.author.id;

			function takeReactionOfTheYear() {
				//embed of the year
				let yearChoose = new Discord.RichEmbed()
					.setTitle("Bienvenue sur le serveur")
					.setDescription("*Merci d'indiquer t'es roles que tu désire*")
					.setColor("#8B008B")
					.addField("PC", "💻", true)
					.addField("PS4", "📟", true)
					.addField("XBOX", "📱", true)
					.addField("Videaste", "🎥", true)
					.addField("NoMicro", "🔇", true)
					.setFooter("créé par TarKyo");

				//send embed ans add reaction
				message.author.send({ embed: yearChoose }).then(async embedMessage => {
					await embedMessage.react("💻");
					await embedMessage.react("📟");
					await embedMessage.react("📱");
					await embedMessage.react("🎥");
					await embedMessage.react("🔇");

					// Create a reaction collector
					const filter = (reaction, user) => (reaction.emoji.name === "💻" || reaction.emoji.name === "📟" || reaction.emoji.name === "📱" || reaction.emoji.name === "🎥" || reaction.emoji.name === "🔇" ) && user.id === messageAuthorId
					// (reaction.emoji.name === "🎮" || reaction.emoji.name === "📷" || reaction.emoji.name === "🌠" || reaction.emoji.name === "📖" || reaction.emoji.name === "🖌" || reaction.emoji.name === "🎁" || reaction.emoji.name === "🌌" || reaction.emoji.name === "⚡" || reaction.emoji.name === "🐺" ) && user.id === messageAuthorId
					const collector = embedMessage.createReactionCollector(filter, { time: 555555555 ,max: 9999, maxEmojis: 99999, maxUsers: 9999 })
					await collector.on("collect", async MessageReaction => {
						//action of one reaction
						const chosen = MessageReaction.emoji.name;

						switch (chosen) {
							case "💻":
								message.member.addRole(PC);
								break;
							case "📟":
								message.member.addRole(PS4);
								break;
							case "📱":
								message.member.addRole(XBOX);
								break;
							case "🎥":
								message.member.addRole(Videaste);
								break;
							case "🔇":
								message.member.addRole(NoMicro);
								break;
						}
					});
				}).catch(console.log);
			}
			message.delete();
			sendEmbed(message, `Un message privée t'as été envoyé, merci de le regarder`, 'reply', true)
			takeReactionOfTheYear();
		}
	}
});

bot.on('message', async message => {

	//Variable to reach simply the message
	const splitMessage = message.content.split(' ');

	//function used to determine if the message channel is the botChannel defined on the setting file
	function isBotChannel() {
		return ((message.channel.id === setting.salonBotId));
	}
	function isCommand(command) {
		return splitMessage[0] === setting.prefix + command;
	}
	if (message.author.bot) return;

	//prefix check
	if (!splitMessage[0].startsWith(setting.prefix)) return;

	//BotChannel check
	if (isBotChannel()) {

		if (isCommand('perso')) {

			//role id for the years
			let Bloodhound = "548136498570985472";
			let Gibraltar = "548136557090177049";
			let Lifeline = "548136588786532362";
			let Pathfinder = "548136620302270465";
			let Wraith = "548136670151835649";
			let Bangalore = "548136697385451541";
			let Caustic = "548136712149139463";
			let Mirage = "548136766708645889";


			if (message.member.roles.has("359433618512150539")) { return sendError(message, `Impossible d\'effectuer l\'action, vous êtes déjà considéré comme présenté. Si \n besoin envoyé un message à <@175586990916501505> ou <@&356867242924965889>`); }

			let messageAuthorId = message.author.id;

			function takeReactionOfTheYear() {
				let yearChoose = new Discord.RichEmbed()
					.setTitle("Bienvenue sur le serveur")
					.setDescription("*Merci d'indiquer t'es roles que tu désire*")
					.setColor("#8B008B")
					.addField("Bloodhound", "1️⃣", true)
					.addField("Gibraltar", "2️⃣", true)
					.addField("Lifeline", "3️⃣", true)
					.addField("Pathfinder", "4️⃣", true)
					.addField("Wraith", "5️⃣", true)
					.addField("Bangalore", "6️⃣", true)
					.addField("Caustic", "7️⃣", true)
					.addField("Mirage", "8️⃣", true)
					.addField("❓ Vous avez d'autres idées de jeux ?", "Faite le nous s'avoir", true)
					.setFooter("By TarKyo");

				//send embed ans add reaction
				message.author.send({ embed: yearChoose }).then(async embedMessage => {
					await embedMessage.react("1️⃣");
					await embedMessage.react("2️⃣");
					await embedMessage.react("3️⃣");
					await embedMessage.react("4️⃣");
					await embedMessage.react("5️⃣");
					await embedMessage.react("6️⃣");
					await embedMessage.react("7️⃣");
					await embedMessage.react("8️⃣");

					// Create a reaction collector
					const filter = (reaction, user) => (reaction.emoji.name === "1️⃣" || reaction.emoji.name === "2️⃣" || reaction.emoji.name === "3️⃣" || reaction.emoji.name === "4️⃣" || reaction.emoji.name === "5️⃣" || reaction.emoji.name === "6️⃣" || reaction.emoji.name === "7️⃣" || reaction.emoji.name === "8️⃣" ) && user.id === messageAuthorId
					// (reaction.emoji.name === "🎮" || reaction.emoji.name === "📷" || reaction.emoji.name === "🌠" || reaction.emoji.name === "📖" || reaction.emoji.name === "🖌" || reaction.emoji.name === "🎁" || reaction.emoji.name === "🌌" || reaction.emoji.name === "⚡" || reaction.emoji.name === "🐺" ) && user.id === messageAuthorId
					const collector = embedMessage.createReactionCollector(filter, { time: 555555555 ,max: 9999, maxEmojis: 99999, maxUsers: 9999 })
					await collector.on("collect", async MessageReaction => {
						//action of one reaction
						const chosen = MessageReaction.emoji.name;

						switch (chosen) {
							case "1️⃣":
								message.member.addRole(Bloodhound);
								break;
							case "2️⃣":
								message.member.addRole(Gibraltar);
								break;
							case "3️⃣":
								message.member.addRole(Lifeline);
								break;
							case "4️⃣":
								message.member.addRole(Pathfinder);
								break;
							case "5️⃣":
								message.member.addRole(Wraith);
								break;
							case "6️⃣":
								message.member.addRole(Bangalore);
								break;
							case "7️⃣":
								message.member.addRole(Caustic);
								break;
							case "8️⃣":
								message.member.addRole(Mirage);
								break;
						}
					});
				}).catch(console.log);
			}
			message.delete();
			sendEmbed(message, `Un message privée t'as été envoyé, merci de le regarder`, 'reply', true)
			takeReactionOfTheYear();
		}
	}
});
