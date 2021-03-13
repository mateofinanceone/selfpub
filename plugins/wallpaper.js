let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/wallpaper', {}, 'APIKEY'), 'wallpaper.png', 'nih kak >//<', m)
}
handler.help = ['wallpaper']
handler.tags = ['internet']
handler.command = /^wallpaper?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler