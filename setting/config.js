//SUMBER SALURAN VVIP
// https://whatsapp.com/channel/0029VawaB2bHLHQgrkwpvy2E

const fs = require('fs')

global.packname = 'JustinOfficial'
global.owner = "6288294549816"
global.author = 'JustinOffc'
global.namaowner = "JustinAndiar"
global.namabot = "JustinV20 Fase2"
global.linkch = 'https://whatsapp.com/channel/0029VawaB2bHLHQgrkwpvy2E'
global.idch = "120363361398844773@newsletter"

global.status = false
global.welcome = false
global.antispam = true
global.autoread = false

global.mess = {
    group: "Akses Ditolak!\n\n> Add Pengguna Sebelum Akses, Atau Ganti Nomer Owner Di Bagian Config.js Agar Script Bisa Di Akses!!",
    admin: "Akses Ditolak!\n\n> Add Pengguna Sebelum Akses, Atau Ganti Nomer Owner Di Bagian Config.js Agar Script Bisa Di Akses!!",
    owner: "Akses Ditolak, Number Tidak Terdaftar Sebagai Owner!!\n\n> Add Pengguna Sebelum Akses, Atau Ganti Nomer Owner Di Bagian Config.js Agar Script Bisa Di Akses!!",
    premium: "Akses DitolakNumber Tidak Terdaftar Sebagai Premium!!\n\n> Add Pengguna Sebelum Akses, Atau Ganti Nomer Owner Di Bagian Config.js Agar Script Bisa Di Akses!!",
    botadmin: "Akses Ditolak!\n\n> Add Pengguna Sebelum Akses, Atau Ganti Nomer Owner Di Bagian Config.js Agar Script Bisa Di Akses!!",
    private: "Akses Ditolak!\n\n> Add Pengguna Sebelum Akses, Atau Ganti Nomer Owner Di Bagian Config.js Agar Script Bisa Di Akses!!"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
