import axios from "axios";

export default function wiki (bot) {

    bot.inlineQuery(/q\s.+/, async (ctx) => {
        const input = ctx.inlineQuery.query.split(' ');
        input.shift();
        const q = input.join(' ')

        try {
            const {data} = await axios.get(`https://uz.wikipedia.org/w/api.php?action=opensearch&format=json&search=${q}&limit=50`);
            const titles = data[1];
            const links = data[3];

            if ( titles === undefined) return;

            const response = titles.map((title, i) => {
                return {
                    type: 'article',
                    id: String(i),
                    title,
                    input_message_content: {
                        message_text: `${title}\n${links[i]}`
                    },
                    description: links[i],
                    reply_markup: {
                        inline_keyboard: [[
                            {text: "Ulashish", switch_inline_query: title}
                        ]]
                    }
                }
            })

            ctx.answerInlineQuery(response)
        } catch (err) {
            console.log(err);
        }
    })
}