module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("Music xde nak ape lagi? Isap kote ke!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Ni vc xjoin nak music ape nii!");
    if(serverQueue.connection.dispatcher.paused)
        return message.channel.send("The song is already paused! Mcm hati kuuu!");
        serverQueue.connection.dispatcher.pause();
        message.channel.send("Paused dahh!");
}

module.exports.config = {
    name: "pause",
    aliases: ["ps"]
}