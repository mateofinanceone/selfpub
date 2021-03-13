let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/hentaigif', {}, 'APIKEY'), 'nsfw.mp4', 'Fix buat bacol', m)
}
handler.help = ['hvid']
handler.tags = ['nsfw']
handler.command = /^hvid?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler