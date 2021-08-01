module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
            return message.channel.send("Music xde nak ape lagi? Isap kote ke!");
        if(message.member.voice.channel != message.guild.me.voice.channel)
            return message.channel.send("Ni vc xjoin nak music ape nii!");
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
}

module.exports.config = {
    name: "stop",
    aliases: ["s", "st"]
}