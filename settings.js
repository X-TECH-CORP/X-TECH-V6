//base by X-TECH CORP
//re-upload? recode? copy code? give credit ya :)
//YouTube: @X-TECH-CORP
//Instagram: X-TECH-CORP 
//Telegram: t.me/X-TECH-CORP 
//GitHub: @X-TECH-CORP
//WhatsApp: +2250500107362
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@X-TECH-CORP

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: X-TECH-CORP" //ur yt chanel name
global.socialm = "GitHub: X-TECH-CORP" //ur github or insta name
global.location = "United states, New York, Times Square" //ur location

//new
global.botname = 'X-TECH V6' //ur bot name
global.ownernumber = ['2250500107362'] //ur owner number, dont add more than one
global.ownername = '🔞𝐗-𝐓𝐄𝐂𝐇🔰' //ur owner name
global.websitex = "https://youtu.be/X-TECH-CORP"
global.wagc = "https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41"
global.themeemoji = '🪀'
global.wm = "X-TECH Bot Inc."
global.botscript = 'https://github.com/X-TECH-CORP/X-TECH-V6' //script link
global.packname = "🔞𝐗-𝐓𝐄𝐂𝐇🔰"
global.author = "🔞𝐗-𝐓𝐄𝐂𝐇🔰\n\n+2250500107362"
global.creator = "2250500107362@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["2250500107362"] // Premium User

//channel id
global.xchannel = {
	jid: '2250500107362@s.whatsapp.net'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '229' //set autoblock country code
global.antiforeignnumber = '229' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});