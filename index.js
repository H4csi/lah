// File: index.js

const { makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');
const config = require('./config.js'); // Mengambil konfigurasi dari file config.js

// --- Fungsi Serangan (Placeholder) ---
// Di sinilah Anda bisa menempelkan fungsi-fungsi "attack" dari script asli
// seperti troli, santet, bom, dll.
async function kirimTroli(waClient, target) {
    console.log(`Menjalankan serangan .troli ke ${target}`);
    // GANTI BAGIAN INI dengan kode fungsi .troli dari script asli
    await waClient.sendMessage(target, { text: `🔥 Serangan .troli dari ${config.botName}!` });
}
async function kirimSantet(waClient, target) {
    console.log(`Menjalankan serangan .santet ke ${target}`);
    // GANTI BAGIAN INI dengan kode fungsi .santet dari script asli
    await waClient.sendMessage(target, { text: `🔥 Serangan .santet dari ${config.botName}!` });
}


// --- Fungsi Utama Bot ---
async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('./kunu_wa_session');
    const waClient = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        auth: state,
        browser: [config.botName, "Chrome", "1.0.0"],
    });

    // Handler untuk Pairing Code
    if (!waClient.authState.creds.registered) {
        const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });
        const question = (text) => new Promise((resolve) => readline.question(text, resolve));
        try {
            let phoneNumber = config.botNumber;
            if (!phoneNumber) {
                phoneNumber = await question(`Masukkan nomor WhatsApp untuk ${config.botName} (diawali 62): `);
            }
            const pairingCode = await waClient.requestPairingCode(phoneNumber.trim());
            console.log(`\n====================================\nKODE PAIRING ANDA: ${pairingCode}\n====================================`);
            readline.close();
        } catch (e) {
            console.error("Gagal meminta pairing code:", e);
            readline.close();
        }
    }

    // Handler untuk koneksi
    waClient.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'open') {
            console.log(`Berhasil terhubung sebagai ${waClient.user.name || config.botName}!`);
        } else if (connection === 'close') {
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Koneksi terputus, mencoba menghubungkan kembali:', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp();
            } else {
                console.log('Koneksi terputus permanen. Hapus folder kunu_wa_session dan restart.');
            }
        }
    });

    // Handler untuk pesan masuk
    waClient.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0];
        if (!msg.message) return;

        const senderNumber = msg.key.remoteJid.split('@')[0];
        const commandText = msg.message.conversation || msg.message.extendedTextMessage?.text || '';

        // Bot hanya merespons perintah dari nomor Owner
        if (senderNumber !== config.ownerNumber) {
            return;
        }

        // Contoh command handler
        if (commandText.startsWith('.troli')) {
            const target = commandText.split(' ')[1];
            if (!target) {
                waClient.sendMessage(msg.key.remoteJid, { text: "Format salah. Gunakan: .troli 628xxxx" }, { quoted: msg });
                return;
            }
            await kirimTroli(waClient, target.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
            waClient.sendMessage(msg.key.remoteJid, { text: `Perintah .troli ke ${target} telah dieksekusi.` }, { quoted: msg });
        
        } else if (commandText.startsWith('.santet')) {
            const target = commandText.split(' ')[1];
            if (!target) {
                waClient.sendMessage(msg.key.remoteJid, { text: "Format salah. Gunakan: .santet 628xxxx" }, { quoted: msg });
                return;
            }
            await kirimSantet(waClient, target.replace(/[^0-9]/g, '') + '@s.whatsapp.net');
            waClient.sendMessage(msg.key.remoteJid, { text: `Perintah .santet ke ${target} telah dieksekusi.` }, { quoted: msg });
        
        } else if (commandText.startsWith('.menu')) {
            const menu = `
╭─「 **${config.botName}** 」
│- Owner: **${config.ownerName}**
╰───────────────────

💥 *MENU ATTACK*
- \`.troli <nomor>\`
- \`.santet <nomor>\`

_Bot ini aktif dan siap menerima perintah._
            `;
            waClient.sendMessage(msg.key.remoteJid, { text: menu }, { quoted: msg });
        }
    });

    // Simpan kredensial
    waClient.ev.on('creds.update', saveCreds);
}

// Jalankan bot
connectToWhatsApp();
