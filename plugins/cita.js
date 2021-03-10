let handler = m => m.reply('aku bang')
handler.customPrefix = /cita citanya/i
handler.command = new RegExp
module.exports = handler
