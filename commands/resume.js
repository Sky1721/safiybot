module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("Music xde nak ape lagi? Isap kote ke!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Ni vc xjoin nak music ape nii!");
    if(serverQueue.connection.dispatcher.resumed)
        return message.channel.send("The song is already resumed! Mai la bby!");
serverQueue.connection.dispatcher.resume();
message.channel.send("Resumed dahh!");
}

module.exports.config = {
    name: "resume",
    aliases: ["r","rs"]
}