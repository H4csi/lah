/*

Minimal kasih credits DitchieMods

*/


const fs = require('fs')

global.botname = "Kunun V1"
global.version = "1.0"
global.owner = "6285724125709"
global.numberbot = "6288294549816"
global.footer = "KunuR"
global.title = "© KununR"
global.website = "https://whatsapp.com/channel/0029Vay4hgh2Jl8J4yIOIA3i"
global.idch = "120363390274692764@newsletter"
global.chjid = "https://whatsapp.com/channel/0029Vay4hgh2Jl8J4yIOIA3i"
global.wm = "KununR"
//===================================//
global.session = "session"

//=========== [ DLAY-PUSH ] ===========//
global.delaypushv1 = 7000 // 1000-1DETIK
global.delaypushv2 = 7000 // 1000-1DETIK

//=========== [ IMG-URL ] ===========//
global.thumb = "https://files.catbox.moe/k14raw.jpg"
global.image = {
Reply: "https://files.catbox.moe/k14raw.jpg"
}
//==================================//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
