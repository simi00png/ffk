const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: config.ALIVE_MSG},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============ping=======
cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply(`${e}`)
console.log(e)
}
})

//===========menu========

cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
    
        let menu = {
            main: '',
            download: '',
            group: '',
            owner: '',
            convert: '',
            ai: '',
            tools: '',
            search: '',
            fun: '',
            voice: '',
            other: ''
        };

        for (let i = 0; i < commands.length; i++) {
            if (commands[i].pattern && !commands[i].dontAddCommandList) {
                menu[commands[i].category] += `│   .${commands[i].pattern}\n`;
            }
        }
        let desc = `*👋 HII SUDU HAPPY NEW YEAR ${pushname}*
     
     *|I'm SIMI MD CREAT BY DILA AND W.U OFC*

*╭─「 MENU LIST 」*
*│◈😺 ʀᴜɴᴛɪᴍᴇ :* ${runtime(process.uptime())}
*│◈😺 ʀᴀᴍ ᴜꜱᴀɢᴇ :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*
*╭────────*
*│
*│ 1   OWNER*😈
*│ 2   CONVERT*😈
*│ 3   AI*😈
*│ 4   SEARCH*😈
*│ 5   DOWNLOAD*😈
*│ 6   FUN*😈
*│ 7   MAIN*😈
*│ 8   GROUP*😈
*│ 9   OTHER*😈
*╰─────────
🔢 Reply below number
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ simi-ᴍᴅ`;



        const vv = await conn.sendMessage(from, {
  text: desc,
  contextInfo: {
    forwardingScore: 0,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterName: '  |   SIMI MD ',
      newsletterJid: "120363183696686259@newsletter",
    },   externalAdReply: { 
title: 'SIMI-MD',
body: `Hi ${pushname} 💙`,
mediaType: 1,
sourceUrl: 'https://pairsite-isithaanusaras-projects.vercel.app/',
thumbnailUrl: 'https://i.ibb.co/7dXZnJ5K/1417.jpg',
renderLargerThumbnail: true,
showAdAttribution: true
}
  }
}, { quoted: mek });
          // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/zf8z97.opus' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──OWNER MENU🤴 ──╼◈*

╭────────●●►
│ 
${menu.owner}│ 
╰──────────────────●●►

> *SIMI MD*`);
                        break;
                    case '2':               
                        reply(`*◈╾──CONVERT MENU🔮──╼◈*

╭────────●●►
│ 
${menu.convert}│
╰──────────────────●●►

> SIMI MD`);
                        break;
                    case '3':               
                        reply(`*◈╾──AI MENU🥏──╼◈*

╭────────●●►
│ 
${menu.ai}│
╰──────────────────●●►

> SIMI MD`);
                        break;
                    case '4':               
                        reply(`*◈╾──SEARCH MENU 📖──╼◈*

╭────────●●►
│ 
${menu.search}│
╰──────────────────●●►

> SIMI MD`);
                        break;
                    case '5':               
                        reply(`*◈╾──DOWNLOAD MENU 🎭──╼◈*

╭────────●●►
│ 
${menu.download}│
╰──────────────────●●►

> SIMI MD`);
                        break;
                    case '7':               
                        reply(`*◈╾──MAIN MENU 📰──╼◈*

╭────────●●►
│ 
${menu.main}│
╰──────────────────●●►


> SIMI MD`);
                        break;
                    case '8':               
                        reply(`*◈╾──GROUP MENU🧮──╼◈*

╭────────●●►
│ 
${menu.group}│
╰──────────────────●●►

> SIMI MD`);
                       break;
                    case '6':               
                        reply(`*◈╾──FUN MENU🎚──╼◈*

╭────────●●►
│ 
${menu.fun}│
╰──────────────────●●►

> SIMI MD`);

                        break;
                    case '9':               
                        reply(`*◈╾──OTHER MENU📒──╼◈*

╭────────●●►
│ 
${menu.other}│
${menu.tools}│
╰──────────────────●●►


> SIMI MD`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});

