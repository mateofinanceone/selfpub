let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/wpnsfwmobile', {}, 'APIKEY'), 'nsfw.png', 'Baka >///<', m)
}
handler.help = ['nnimek']
handler.tags = ['nsfw']
handler.command = /^nnimek?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
