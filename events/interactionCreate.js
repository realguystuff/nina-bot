const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			interaction.reply({ content: `I don't know how did you get here. No command matching ${interaction.commandName} was found. Error 404 Not Found.`, ephemeral: true })
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			interaction.reply({ content: `Please report this to Nina#8307:
			
\`\`\`js
${error}
\`\`\``, ephemeral: true })
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};