module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("There is no music playing!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("You need to join the voice chat first!");
    if(serverQueue.connection.dispatcher.paused)
        return message.channel.send("The song is already paused!");
        serverQueue.connection.dispatcher.pause();
        message.channel.send("The song has been paused!");
}

module.exports.config = {
    name: "pause",
    aliases: ["ps"]
}