const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const gifs = require("./gifs2");

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`);
    bot.user.setActivity("Use .help")
});
const prefix = '.';
bot.on("message", function(message){
    function getEmbed(description, links){
        const embed = new Discord.RichEmbed()
        .setColor(0xA9E2F3)
        .setDescription(description)
        .setImage(gifs.getRandomGifs(links));
        return embed;
    }
   if (!message.content.startsWith(config.prefix) || message.author.bot) return;
    if (message.content.startsWith(config.prefix + "help")){
        message.channel.send({embed: {
            color: 0xA9E2F3,
            title: "Those are my avalable commands",
            fields: [{
                name: "Replying back commands",
                value: "hello, lol, swearwords [fuck, bitch, darn, shit]"
              },
              {
                name: "RP gifs commands",
                value: "kiss, waifu, okay, hit, hug, rip, facepalm, cuddle, high, shoot, cry, panic, sleepy, happy, poke, love, confused, zifameme"
              }  
            ],
            timestamp: new Date(),
            footer: {
                icon_url: config.ownerURL,
              text: "© Bought to you by Mashiro#9329"
            }
          }
        });
    } else
    if(message.content.startsWith(config.prefix + "waifu")){
        const links = ["https://media.giphy.com/media/13SM7NflGsD8Zi/giphy.gif", "https://media1.tenor.com/images/a94c43cc1e79e3b3ad6f774b5964c4ab/tenor.gif?itemid=5569566", "https://media.giphy.com/media/8YZirtPwOyXuGnhRBq/giphy.gif", "https://media.giphy.com/media/IdqwymaXerCARdLmVF/giphy.gif",  "https://media.giphy.com/media/137Unryf0pROHC/giphy.gif", "https://media.giphy.com/media/hqmfSOtJ5sCq0Gov1Q/giphy.gif", "https://media1.tenor.com/images/64e0528a06b474ffb14525c437da2544/tenor.gif?itemid=11031890"];
        message.channel.send(getEmbed("Here is a waifu as you asked!", links)); 
    } else
    if(message.content.startsWith(config.prefix + "hit")){
        const links = ["https://media.giphy.com/media/oS56qcrdYDBw4/giphy.gif", "https://media.giphy.com/media/FNV7vS6uOKvte/giphy.gif", "https://media.giphy.com/media/nDd0Y5Jb3jFyE/giphy.gif", "https://media.giphy.com/media/4GpVuj6JGOq0E/giphy.gif"];
        message.channel.send(getEmbed("What did you say!", links));  
    } else 
    if (message.content.startsWith(config.prefix + "kiss")){
        const links = ["https://media.giphy.com/media/ln9F6PWm6PpYc/giphy.gif", "https://media.giphy.com/media/cj2rtfqmm0xWAjQDNr/giphy.gif", "https://media.giphy.com/media/WqEqKrn8ASELzHQZ99/giphy.gif", "https://media.giphy.com/media/kGXfTG7yMmwoz6qMDy/giphy.gif"];
        message.channel.send(getEmbed("Here is a kiss from me", links));
    } else
    if (message.content.startsWith(config.prefix + "hug")){
        const links = ["https://media.giphy.com/media/XbVdr6K2kQ3p6/giphy.gif", "https://media.giphy.com/media/iviBUyNqP46Aw/giphy.gif", "https://media.giphy.com/media/9haQXx4YgpmqA/giphy.gif", "https://media.giphy.com/media/LIqFOpO9Qh0uA/giphy.gif"];
        message.channel.send(getEmbed("I felt like hugging you", links));
    } else
    if (message.content.startsWith(config.prefix + "facepalm")){
        const links = ["https://media.giphy.com/media/TesWa4wY23L2dHgLav/giphy.gif", "https://media.giphy.com/media/qHY6ij6LYizle/giphy.gif", "https://media.giphy.com/media/TpOm1K4dUV1bW/giphy.gif", "https://uploads.disquscdn.com/images/614647f82ca87f972788fb805bb7892033a7a9e65f0f0e0ef0e308e3536bf738.gif", "https://uploads.disquscdn.com/images/6318a310b2253b712a3ae693955dfa790e5de9c61050051bc23b27f1ab0aecc9.gif"];
       message.channel.send(getEmbed("Is there something else to say?", links));
    } else
    if (message.content.startsWith(config.prefix + "cuddle")){
        const links= ["https://media.giphy.com/media/efZbqYBLbyqCd1V0cz/giphy.gif", "https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif", "https://media.giphy.com/media/QlFyrikSI01Fe/giphy.gif"];
        message.channel.send(getEmbed("Here is a cuddle for me because warmth must be share", links));
    } else
    if(message.content.startsWith(config.prefix + "okay")){
        const links = ["https://i.imgur.com/QJCJzGK.gif", "https://media.giphy.com/media/gp6dzmdd8jalW/giphy.gif", "https://media.giphy.com/media/ehb9cVHEPbOyjEG2pn/giphy.gif" ,"https://media.giphy.com/media/S6UbcRuGQBKqA/giphy.gif", "https://media.giphy.com/media/12swa4UfSd6Viw/giphy.gif", "https://media.giphy.com/media/VBc6l3CqQonqo/giphy.gif", "https://media.giphy.com/media/y9qc62nPZ2CKA/giphy.gif"];
        message.channel.send(getEmbed("I'm okay with anything you said", links));
    } else
    if (message.content.startsWith(config.prefix + "high")){
        const links = ["https://i.imgur.com/9HiD4bD.gif", "https://media.giphy.com/media/LnKa2WLkd6eAM/giphy.gif", "https://media.giphy.com/media/hop9gooDLQ3XW/giphy.gif"];
        message.channel.send(getEmbed("Do you want to go for one too?", links));
    } else
    if (message.content.startsWith(config.prefix + "mad")){
        const links = ["https://media.giphy.com/media/H770OqMixDZLi/giphy.gif", "https://media.giphy.com/media/dpkRPUbZbl0R2/giphy.gif", "https://media.giphy.com/media/9w9Z2ZOxcbs1a/giphy.gif", "https://i.imgur.com/A9i8vkm.gif", "https://media.giphy.com/media/eoZOuZVqMg240/giphy.gif"];
        message.channel.send(getEmbed("You made me mad are you happy now?", links));
    } else
    if (message.content.startsWith(config.prefix + "rip")){
        const links = ["https://i.imgur.com/48g3Wfg.gif", "https://media.giphy.com/media/QlzWvcGPLZJK/giphy.gif", "https://medyns.tumblr.com/image/163494895478", "https://media.giphy.com/media/ESPOlCh9luPIc/giphy.gif"];
        message.channel.send(getEmbed("Press **F** to pay you respects;-;", links));
    } else
    if (message.content.startsWith(config.prefix + "shoot")){
        const links = ["https://media.giphy.com/media/LQXsJsrXknnYQ/giphy.gif","https://media.giphy.com/media/26RG3Fp2Ixxdu/giphy.gif", "https://media.giphy.com/media/6PT4Z3wTSoc2k/giphy.gif"];
        message.channel.send(getEmbed("You are shooting someone nice!", links));
    } else
    if (message.content.startsWith(config.prefix + "cry")){
        const links = ["https://media.giphy.com/media/w3Z1uoMob8yxa/giphy.gif", "https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif", "https://media.giphy.com/media/70egUiCHXuMdW/giphy.gif", "https://media.giphy.com/media/eE4GChj7uREZ2/giphy.gif"];
        message.channel.send(getEmbed("That made me really sad", links));
    } else
    if (message.content.startsWith(config.prefix + "panic")){
        const links = ["https://media.giphy.com/media/DAR3mwN73NVte/giphy.gif", "https://media.giphy.com/media/yW3kVoQMQyEtG/giphy.gif", "https://media.giphy.com/media/7E8NRqvOTKERyQjokV/giphy.gif", "https://media.giphy.com/media/1FMaabePDEfgk/giphy.gif", "https://media.giphy.com/media/XAxF8t8e4EgBa/giphy.gif", "https://media.giphy.com/media/zj0BxstyhGufC/giphy.gif"];
        message.channel.send(getEmbed("How can I calm down now?", links));
    } else 
    if (message.content.startsWith(config.prefix + "sleepy")){
        const links = ["https://media.giphy.com/media/H0rMaocpLyQ5W/giphy.gif", "https://media.giphy.com/media/Byzxt2ompZJyE/giphy.gif", "https://media.giphy.com/media/a9lgeWGF7Ysrm/giphy.gif", "https://media.giphy.com/media/Y1Bl4MvP3fDq/giphy.gif"];    
        message.channel.send(getEmbed("I'm going to head to bed now", links));
    } else
    if (message.content.startsWith(config.prefix + "happy")){
        const links = ["https://media.giphy.com/media/hJ97343YfPuRq/giphy.gif", "https://media.giphy.com/media/6KKp5gwP3hxSw/giphy.gif", "https://media.giphy.com/media/SvxiY4ASu9waY/giphy.gif", "https://media.giphy.com/media/ewPchl0e1zm3S/giphy.gif", "https://media.giphy.com/media/1xVfHenZgbysbdumIP/giphy.gif", "https://media.giphy.com/media/fnrQq33oetoSxC8o0U/giphy.gif"];
        message.channel.send(getEmbed("Yeah!>ω<", links));
    } else 
    if (message.content.startsWith(config.prefix + "poke")){
        const links = ["https://media.giphy.com/media/pWd3gD577gOqs/giphy.gif", "https://media.giphy.com/media/lDudK8NHk1Xck/giphy.gif", "https://media.giphy.com/media/aZSMD7CpgU4Za/giphy.gif"];
        message.channel.send(getEmbed("Look my way for once!>w<", links))
    } else 
    if (message.content.startsWith(config.prefix + "love")){
        const links = ["https://media.giphy.com/media/e534FDictN80o/giphy.gif", "https://media1.tenor.com/images/8cf2b503ad17768be12a861e6bfa731c/tenor.gif?itemid=11419202", "https://media.giphy.com/media/1wXgBZCZ52mtlWvz0k/giphy.gif", "https://media.giphy.com/media/W6A8Tb3i7cn1GJXPhz/giphy.gif", "https://media.giphy.com/media/knjPVcUPwtfoY/giphy.gif", "https://media.giphy.com/media/17VkqcFVuRVnO/giphy.gif"];
        message.channel.send(getEmbed("Omg I wasn't ready for that<3", links))
    }else 
    if (message.content.startsWith(config.prefix + "confused")){
        const links = ["https://media.giphy.com/media/xT0xeuOy2Fcl9vDGiA/giphy.gif", "https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif", "https://i.imgur.com/b9uJrC1.gif", "https://media.giphy.com/media/35TeXIvmZ0LPq/giphy.gif"];
        message.channel.send(getEmbed("Come again?", links))
    }else
    if (message.content.startsWith(config.prefix + "zifameme")){
        const links = ["https://cdn.discordapp.com/attachments/510323422450941953/567228118062858240/IMG_20190415_090125.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/567228117362540550/IMG_20190415_090058.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/565860120890834974/MEME2019-04-11-02-25-03.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/566167047277379584/despicable_me_1.png", "https://cdn.discordapp.com/attachments/510323422450941953/565857161947906048/MEME2019-04-11-10-58-15.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/552449639018922004/MEME2019-03-05-01-16-55.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/552601552951705611/MEME2019-03-05-11-20-54.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/552601553400365056/MEME2019-03-05-11-17-47.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/552601553400365058/MEME2019-03-05-11-15-17.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/558573450944315402/MEME2019-03-22-10-49-35.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/559097092300079135/MEME2019-03-23-09-29-05.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/559097093059510309/MEME2019-03-23-09-31-24.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/548984975601565696/MEME2019-02-23-11-50-05.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/548990470181879818/MEME2019-02-24-12-10-44.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/549650326417047552/MEME2019-02-25-07-52-53.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/550682598574129153/MEME2019-02-28-03-07-26.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/553505944818941952/MEME2019-03-08-11-03-33.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/542715690780459047/received_530907724068212.jpeg", "https://cdn.discordapp.com/attachments/510323422450941953/542715476334346241/received_574980419647228.jpeg", "https://cdn.discordapp.com/attachments/510323422450941953/543844403203276810/MEME2019-02-09-07-23-06.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/545357816853168148/MEME2019-02-13-03-00-14.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/545361120807092224/MEME2019-02-13-11-49-58.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/545361121368997897/MEME2019-02-13-11-46-24.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/545601446574424100/MEME2019-02-14-03-44-42.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/546638885363384330/MEME2019-02-17-12-25-35.jpg", "https://cdn.discordapp.com/attachments/510323422450941953/548982437670158354/MEME2019-02-20-11-30-01.jpg"];
        message.channel.send(getEmbed("**I see you are a man of culture as well**", links))
    
}});

const swearWords = ["darn", "bitch", "fuck", "shit"];
bot.on("message" ,function(message){
    if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("***This is a Christian server!***");
  message.channel.send("Swear counter:...*oh looks like it's broken well I will let that slide*");
} else
if (message.content === "lol"){
    message.reply("I wonder what might be so funny?")
} else
if (message.content === "hello"){
    message.reply("Oh hi there, welcome back!")

}});

bot.on('ready', function(){
    console.log('bot is online!');
 });
 bot.on('error', console.error);
 bot.login(config.token);
