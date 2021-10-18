const { getVoiceConnection } = require('@discordjs/voice')
const BaseCommand = require('../BaseCommand')

module.exports = class DisconnectCommand extends BaseCommand {
    constructor(client) {
        super(client, {
            name: 'disconnect',
            aliases: ['dc'],
            group: 'music',
            memberName: 'disconnect',
            description: 'Disconnects the bot from a voice channel if present',
            throttling: {
                usages: 1,
                duration: 1
            },
            guildOnly: true
        })
    }
    
    async run(interaction, manager) {
        const connection = getVoiceConnection(manager.guild.id)
        if (connection) {
            connection.destroy()
            interaction.reply(":wave: Goodbye...")
        } else {
            interaction.reply({ content: ":face_with_raised_eyebrow: I ain't in a voice channel...", ephemeral: true })
        }
    }
}