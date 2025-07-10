// =================================================================
// KODE REMAKE FINAL - UNTUK KUNUN (SUDAH DIPERBAIKI)
// =================================================================

// --- Bagian Import Library ---
const { Telegraf, Markup } = require('telegraf');
const { makeWASocket, useMultiFileAuthState, DisconnectReason } = require('@whiskeysockets/baileys');
const pino = require('pino');
const fs = require('fs');

// === KONFIGURASI UTAMA (SUDAH DIISI SESUAI DATA ANDA) ===
const CONFIG = {
    TELEGRAM_BOT_TOKEN: '8139581146:AAHP0gukOYBVrgC7iX2FfjP9DODUP9O-qjU',
    OWNER_TELEGRAM_ID: '7046416688',
    OWNER_NAME: 'Kunun',
    BOT_NAME: 'Kunun-Bot',
    OWNER_TELEGRAM_USERNAME: 'Kenanrp123',
    GAMBAR_MENU_URL: 'https://thumbor.prod.vidiocdn.com/IEO56idpTodiN--Pb7O3R1sni3Q=/250x250/filters:quality(70)/vidio-web-prod-channel/uploads/channel/image/54165/lucu-tapi-ketawa-e6c959.jpg',
    PREMIUM_DB_FILE: './kunun_premium_users.json'
};
// =================================================

// --- Database Sederhana untuk User Premium ---
let premiumUsers = new Set();
if (fs.existsSync(CONFIG.PREMIUM_DB_FILE)) {
    try {
        const data = JSON.parse(fs.readFileSync(CONFIG.PREMIUM_DB_FILE));
        premiumUsers = new Set(data);
    } catch (e) {
        console.log('File premium_users.json rusak, memulai dengan daftar kosong.');
    }
}
const savePremiumUsers = () => {
    fs.writeFileSync(CONFIG.PREMIUM_DB_FILE, JSON.stringify([...premiumUsers]));
};

// --- Inisialisasi Bot ---
const teleBot = new Telegraf(CONFIG.TELEGRAM_BOT_TOKEN);
let waClient = null;

// --- Fungsi Koneksi WhatsApp ---
async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('./kunu_wa_session');
    waClient = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: false,
        auth: state,
        browser: [CONFIG.BOT_NAME, "Chrome", "1.0.0"],
    });

    if (!waClient.authState.creds.registered) {
        console.log("Tidak ada session, silakan gunakan Pairing Code.");
        const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });
        const question = (text) => new Promise((resolve) => readline.question(text, resolve));
        try {
            const phoneNumber = await question(`Masukkan nomor WhatsApp untuk ${CONFIG.BOT_NAME} (diawali 62): `);
            const pairingCode = await waClient.requestPairingCode(phoneNumber.trim());
            console.log(`\n====================================\nKODE PAIRING ANDA: ${pairingCode}\n====================================`);
            readline.close();
        } catch (e) {
            console.error("Gagal meminta pairing code:", e);
            readline.close();
        }
    }

    waClient.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === 'close') {
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
            console.log('Koneksi WhatsApp terputus, mencoba menghubungkan kembali:', shouldReconnect);
            if (shouldReconnect) {
                connectToWhatsApp();
            } else {
                console.log('Koneksi terputus permanen. Hapus folder kunu_wa_session dan restart.');
            }
        } else if (connection === 'open') {
            console.log('Berhasil terhubung ke WhatsApp!');
            teleBot.telegram.sendMessage(CONFIG.OWNER_TELEGRAM_ID, `✅ **${CONFIG.BOT_NAME} Terhubung!**\n\nBot WhatsApp berhasil terhubung dan siap menerima perintah dari Telegram.`, { parse_mode: 'Markdown' });
        }
    });
    waClient.ev.on('creds.update', saveCreds);
}

// --- Fungsi Serangan WA (Placeholder) ---
async function kirimSeranganWA(nomor) {
    if (!waClient) throw new Error('Koneksi WhatsApp belum siap.');
    const id = nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    // GANTI BAGIAN INI dengan fungsi .troli, .santet dari script asli jika Anda sudah menyalinnya
    await waClient.sendMessage(id, { text: `🔥 Serangan dikirim oleh ${CONFIG.BOT_NAME}!` });
    console.log(`Serangan terkirim ke ${nomor}`);
}

// --- Middleware & Tampilan Menu ---
const isOwner = (ctx) => ctx.from.id.toString() === CONFIG.OWNER_TELEGRAM_ID;
const isPremium = (ctx) => premiumUsers.has(ctx.from.id.toString()) || isOwner(ctx);

const menuUtama = (ctx) => {
    const uptime = new Date(process.uptime() * 1000).toISOString().substr(11, 8);
    const menuText = `
╭─「 **${CONFIG.BOT_NAME}** 」
│- Developed by **${CONFIG.OWNER_NAME}**
│- Runtime: ${uptime}
│- Status WA: ${waClient && waClient.user ? 'Terhubung' : 'Terputus'}
╰───────────────────

👑 *MENU OWNER*
- \`/addprem <user_id>\`
- \`/delprem <user_id>\`
- \`/listprem\`

💥 *MENU ATTACK (Premium)*
- \`/attack <nomor_wa>\`

ℹ️ *INFO*
- \`/status\` - Cek status bot
- \`/myid\` - Cek ID Telegram Anda
    `;
    try {
        ctx.replyWithPhoto(CONFIG.GAMBAR_MENU_URL, {
            caption: menuText,
            parse_mode: 'Markdown',
            ...Markup.inlineKeyboard([
                [Markup.button.url(`Hubungi ${CONFIG.OWNER_NAME}`, `https://t.me/${CONFIG.OWNER_TELEGRAM_USERNAME}`)]
            ])
        });
    } catch (e) {
        console.error("Gagal mengirim menu dengan foto, mengirim teks saja.", e);
        ctx.reply(menuText, { parse_mode: 'Markdown' });
    }
};

// --- Perintah-perintah Telegram ---
teleBot.start(menuUtama);
teleBot.command('menu', menuUtama);
teleBot.command('myid', (ctx) => ctx.reply(`ID Telegram Anda adalah: \`${ctx.from.id}\``, { parse_mode: 'Markdown' }));
teleBot.command('status', menuUtama);

// Perintah Owner
teleBot.command('addprem', (ctx) => {
    if (!isOwner(ctx)) return ctx.reply('⛔ Perintah ini hanya untuk Owner.');
    const userId = ctx.message.text.split(' ')[1];
    if (!userId) return ctx.reply('Gunakan: /addprem <user_id>');
    premiumUsers.add(userId);
    savePremiumUsers();
    ctx.reply(`✅ User ID \`${userId}\` berhasil ditambahkan sebagai premium.`, { parse_mode: 'Markdown' });
});

teleBot.command('delprem', (ctx) => {
    if (!isOwner(ctx)) return ctx.reply('⛔ Perintah ini hanya untuk Owner.');
    const userId = ctx.message.text.split(' ')[1];
    if (!userId) return ctx.reply('Gunakan: /delprem <user_id>');
    premiumUsers.delete(userId);
    savePremiumUsers();
    ctx.reply(`🗑️ User ID \`${userId}\` berhasil dihapus dari premium.`, { parse_mode: 'Markdown' });
});

teleBot.command('listprem', (ctx) => {
    if (!isOwner(ctx)) return ctx.reply('⛔ Perintah ini hanya untuk Owner.');
    const count = premiumUsers.size;
    let list = `Daftar User Premium (${count}):\n`;
    premiumUsers.forEach(id => list += `- \`${id}\`\n`);
    ctx.reply(list || 'Tidak ada user premium.', { parse_mode: 'Markdown' });
});

// Perintah Attack (Hanya Premium)
teleBot.command('attack', async (ctx) => {
    if (!isPremium(ctx)) {
        return ctx.reply(`❌ Anda bukan pengguna premium.\n\nSilakan hubungi @${CONFIG.OWNER_TELEGRAM_USERNAME} untuk berlangganan.`);
    }
    const nomor = ctx.message.text.split(' ')[1];
    if (!nomor) return ctx.reply('Gunakan: /attack <nomor_wa>');
    try {
        await ctx.reply(`🚀 Mengirim serangan ke ${nomor}...`);
        await kirimSeranganWA(nomor);
        await ctx.reply(`✅ Serangan berhasil dikirim ke ${nomor}!`);
    } catch (e) {
        await ctx.reply(`❌ Gagal: ${e.message}`);
    }
});

// --- Menjalankan Semuanya ---
connectToWhatsApp();
teleBot.launch();
console.log(`Bot Hybrid ${CONFIG.BOT_NAME} by ${CONFIG.OWNER_NAME} sedang berjalan...`);
