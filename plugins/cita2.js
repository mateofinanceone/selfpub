let handler = m => m.reply('aku bang')
handler.customPrefix = /cita cita nya/i
handler.command = new RegExp
module.exports = handler
