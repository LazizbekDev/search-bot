import fetch from "node-fetch";
import { Telegraf } from "telegraf"
const TOKEN = '6192276647:AAEBK5_8KSJmlMw9Zr9xA-ewLwnwB0_4pSU';

const bot = new Telegraf(TOKEN);

bot.use(ctx => {
    console.log(ctx.chat)
})

const data = {
    chat_id: "-1001600920538",
    text: "Ishlamdi"
};

(async () => {
    const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,
    {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
})();


bot.launch()
