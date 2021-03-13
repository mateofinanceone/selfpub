https://api.xteam.xyz/randomimage/blowjob?APIKEY=ff27ca4f018a1bcb


let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/blowjob', {}, 'APIKEY'), 'nsfw.png', 'Baka >///<', m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^blowjob?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
