module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Ni vc xjoin nak music ape nii!");
    if(!serverQueue)
        return message.channel.send("Xdak ape nak skip laa! BODO!");
        serverQueue.connection.dispatcher.end();
}

module.exports.config = {
    name: "skip",
    aliases: ["sk"]
}