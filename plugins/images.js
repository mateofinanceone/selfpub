let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks untuk di cari'
  let res = await fetch(global.API('http://api.fdci.se', '/rep.php', { gambar: text }))
 let result = await res.json()
 let i = Math.floor(Math.random() * result.length)
 await conn.sendFile(m.chat, result[i], 'images.png', text, m)
}
handler.help = ['img', 'image'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^image?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

