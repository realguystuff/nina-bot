const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping ms. Sorta like internet speed test.'),
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`Rountrip latency (message to server to message): ${sent.createdTimestamp - interaction.createdTimestamp} ms
Websocket heartbeat (repeating signal to server): NaN`)
	},
};