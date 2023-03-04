import { Telegraf } from "telegraf"
import { config } from "dotenv";
import wiki from "./inlineQuery/wiki.js";
import pixeby from "./inlineQuery/pix.js";

config()
const TOKEN = '6192276647:AAEBK5_8KSJmlMw9Zr9xA-ewLwnwB0_4pSU';

const bot = new Telegraf(TOKEN);

pixeby(bot)
wiki(bot)

bot.launch()
