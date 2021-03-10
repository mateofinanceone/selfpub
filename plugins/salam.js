let handler = m => m.reply('waalaikumsalam')
handler.customPrefix = /assalamualaikum/i
handler.command = new RegExp
module.exports = handler
