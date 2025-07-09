const fs = require('fs')

// Ganti semua di bawah ini dengan data Anda
global.packname = 'Kunu-Bot'
global.owner = "6285724125709@s.whatsapp.net" // <-- PENTING: Ganti dengan nomor WhatsApp Anda
global.author = 'Kunun'
global.namaowner = "Kunun"
global.namabot = "Kunun Bot"
global.linkch = '' // <-- Kosongkan jika tidak punya channel
global.idch = ""  // <-- Kosongkan jika tidak punya channel

// Bagian ini biarkan saja
global.status = false
global.welcome = false
global.antispam = true
global.autoread = false

global.mess = {
    group: "Fitur ini hanya untuk grup!",
    admin: "Fitur ini hanya untuk admin grup!",
    owner: "Fitur ini hanya untuk Owner!",
    premium: "Fitur ini hanya untuk member Premium!",
    botadmin: "Jadikan bot sebagai admin terlebih dahulu!",
    private: "Fitur ini hanya untuk chat pribadi!"
}

let file = require.resolve(__filename)
// ... (sisa kode biarkan saja)
