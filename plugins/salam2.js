let handler = m => m.reply('waalaikumsallam')
handler.customPrefix = /asalamualaikum/i
handler.command = new RegExp
module.exports = handler
