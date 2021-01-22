const Discord = require('discord.js');
const funnyWords = require("funny-words");

exports.run = async (client, message, args) => {
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`İkram edeceğin istediğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var gifler = [
  "https://www.sarfmarket.com.tr/sirma-meyveli-soda-cilek-24lu-fiyati-su-ve-soda-sirma-17550-48-B.png",
  "https://www.sarfmarket.com.tr/sirma-meyveli-soda-elma-24lu-fiyati-su-ve-soda-sirma-17555-41-B.png",
  "https://cdn.shopify.com/s/files/1/0752/2329/products/dads_old_fashioned_blue_cream_soda_2048x.jpg?v=1571276733",
  "https://cdn.shopify.com/s/files/1/0269/2121/products/QuarantineSodaPop.jpg?v=1584661515",
];
let resimler = gifler[Math.floor(Math.random() * gifler.length)];
if(message.author.id === message.mentions.members.first().id) return message.channel.send(new Discord.MessageEmbed().setColor('#00567e').setTitle('Dur Orda!').setDescription('Aç gözlü olma oğlum ikram ediceksin.')).then(a => a.delete({timeout: 10000}))
message.channel.send(`> ${message.author} ${message.mentions.members.first()} **kişisine soda ikram ediyor..**`, new Discord.MessageAttachment(resimler));
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'soda'
};