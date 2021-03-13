const { MessageType } = require('@adiwajshing/baileys')
const arugaz = require('@arugaz/arugaz-api');

let handler = async (m, { conn, text }) => {
  if (text) {
    arugaz.sosmed.xnxxsearch(`${text}`)
      .then(res => conn.sendMessage(m.chat, res, {
        quoted: m
      }))
      .catch(err => console.log(err))
  } else {
    throw 'Cari apa?'
  }
}
handler.help = ['xnxxs <q>']
handler.tags = ['downloader']
handler.command = /^xnxxs$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler