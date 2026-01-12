require('dotenv').config();
require('@snazzah/davey');
const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages
    ]
});

const BOT_TOKEN = process.env.DISCORD_TOKEN;
const SES_KANAL_ID = process.env.SES_KANAL_ID;
let voiceConnection = null;

client.once('ready', () => {
    console.log(`${client.user.tag} Bot aktif. kullandığın icin tessekur ederiz.`);
    sesKanalinaGir();
});



async function sesKanalinaGir() {
    try {
        const guild = client.guilds.cache.first();
        if (!guild) {
            console.log('Bot hiçbir sunucuda değil. sunucuya ekle ve tekrar dene.');
            return;
        }

        const voiceChannel = guild.channels.cache.get(SES_KANAL_ID);
        if (!voiceChannel) {
            console.log('Ses kanalı bulunamadı. id yanlış.');
            return;
        }

        voiceConnection = joinVoiceChannel({
            channelId: SES_KANAL_ID,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator
        });

        console.log(`"${voiceChannel.name}" ses kanalına girildi.`);
        
        voiceConnection.on('stateChange', (oldState, newState) => {
            if (newState.status === 'disconnected') {
                console.log('Ses bağlantısı koptu yeniden baslatıyoruz..');
                setTimeout(sesKanalinaGir, 5000);
            }
        });

    } catch (error) {
        console.error('Ses kanalına girerken hata oluştu. Lütfen Yetkililerimize Ulaş. Dc:chayoo2:', error);
    }
}

client.login(BOT_TOKEN);