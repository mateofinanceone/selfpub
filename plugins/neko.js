let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/sfwneko', {}, 'APIKEY'), 'nsfw.png', 'Nyan >_<', m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^neko?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler