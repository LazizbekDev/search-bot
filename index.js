const { Telegraf } = require("telegraf");
const { config } = require("dotenv");
const wiki = require("./inlineQuery/wiki.js");
const pixeby = require("./inlineQuery/pix.js");
const start = require("./command/start.js");

config()
const TOKEN = process.env.TOKEN
const bot = new Telegraf(TOKEN);

// bot.start((x) => x.reply("slas"))

start(bot)
pixeby(bot)
wiki(bot)

// bot.launch()

exports.handler = (event, context, callback) => {
    const tmp = JSON.parse(event.body);
    bot.handleUpdate(tmp);
    return callback(null, {
        statusCode: 200,
        body: ""
    })
}