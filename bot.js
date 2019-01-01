const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("529739729990582306")
setInterval(function() {
channel.send(`**كريييييييييييييدت مولللللللع نااار شراااااااااار**`);
}, 30)
})

client.login("Mzk5ODU5MDg5Mzk3Nzc2Mzg0.Dw1NYQ.-TRu7uE6GSW7rzeyR2GzKdjNqOk");
