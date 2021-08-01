module.exports.run = async (message, client) => {
    client.onLine("message", text =>{
        if (text.content === "hello") {
            text.reply("Hi baby! Nak isap kote ke?")
        }
    })
}

module.exports.config = {
    name: "hello",
    aliases: ["hi", "hey", "yo"]
}