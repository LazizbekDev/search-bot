const startMsg = `
Welcome To Search bot
Use the inline mode
@feedSMbot p <search image>
@feedSMbot q <wikipedia in uzbek>
`
const start = (bot) => {
    bot.command(['start', 'help'], (ctx) => {
        ctx.reply(startMsg, {
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Search images by pixeby", switch_inline_query_current_chat: "p "}
                    ],
                    [
                        {text: "Search in wikipedia", switch_inline_query_current_chat: "q "}
                    ]
                ]
            }
        })
    })

    bot.inlineQuery(['start', 'help'], (ctx) => {
        const data = [{
            type: "article",
            id: "1",
            title: "help reference",
            input_message_content: {
                message_text: startMsg
            },
            description: "how to use this bot",
            reply_markup: {
                inline_keyboard: [
                    [
                        {text: "Search images by pixeby", switch_inline_query_current_chat: "p "}
                    ],
                    [
                        {text: "Search in wikipedia", switch_inline_query_current_chat: "q "}
                    ]
                ]
            }
        }]

        ctx.answerInlineQuery(data)
    })
}

module.exports = start;