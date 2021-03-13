let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/panties', {}, 'APIKEY'), 'nsfw.png', 'Baka >///<', m)
}
handler.help = ['panties']
handler.tags = ['nsfw']
handler.command = /^panties?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
