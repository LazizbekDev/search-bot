import axios from "axios";

export default function pixeby (bot) {
    bot.inlineQuery(/p\s.+/, async (ctx) => {
        const input = ctx.inlineQuery.query.split(' ');
        input.shift();
        const q = input.join(' ')

        try {
            const {data} = await axios.get(`https://pixabay.com/api/?key=${process.env.API}&q=${q}`);
            const hits = data.hits;

            const results = hits.map((hit, i) => {
                return {
                    type: 'photo',
                    id: String(i),
                    photo_url: hit.webformatURL,
                    thumb_url: hit.previewURL,
                    photo_width: 300,
                    photo_height: 200,
                    caption: `[Source](${hit.webformatURL})\n[Large](${hit.largeImageURL})`,
                    parse_mode: "Markdown"
                }
            })

            ctx.answerInlineQuery(results)
        } catch (err) {
            console.log(err);
        }
    })

}