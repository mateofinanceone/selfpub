let fetch = require('node-fetch')

let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/shitpost', {}, 'APIKEY'), 'sitpos.mp4', 'Nih asupan', m)
}
handler.help = ['asupan']
handler.tags = ['internet']
handler.command = /^asupan?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler