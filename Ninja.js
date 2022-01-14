const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
console.log('Here it is - The Ninja bot');

} );
client.login('OTMxMTM0OTEzNjY5OTE0NjU0.YeAA9w.hZBw4Ftcl2n1WPVn4YIicqv_xxs');