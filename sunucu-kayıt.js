const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`${client.user} **Kayıt Sistem
__Tek komut ile kayıt ve isim yapabilirsin.__**

> \`${client.ayarlar.prefix}erkek-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kadın-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}yetkili-role [@rolEtiket]\`
> \`${client.ayarlar.prefix}kayıtsız-role [@rolEtiket]\`

\`\`\`        [ Kapatma Komutları ]        \`\`\`
> 🗑️ **${client.ayarlar.prefix}erkek-sil**
> 🗑️ **${client.ayarlar.prefix}kadın-sil**
> 🗑️ **${client.ayarlar.prefix}yetkili-sil**
> 🗑️ **${client.ayarlar.prefix}kayıtsız-sil**

\`\`\`İsim başına tag koyması için
${client.ayarlar.prefix}kayıt-tag 🚀
${client.ayarlar.prefix}kayıt-tag-kapat\`\`\``).setImage('https://api.creavite.co/out/06bbf416-46b0-4f91-a608-adb20558370c_standard.gif')

.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://api.creavite.co/out/2f9cad67-d17a-4e13-a4cd-989492b9cfb6_standard.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kayıt'],
  permLevel: 0
}

exports.help = {
  name: 'sunucu-kayıt'
};