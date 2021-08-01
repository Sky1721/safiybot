module.exports.run = async (client, message, args, queue, searcher) => {
    const serverQueue = queue.get(message.guild.id)
    if(!serverQueue)
        return message.channel.send("Music xde nak ape lagi? Isap kote ke!");
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("Ni vc xjoin nak music ape nii!")

switch(args[0].toLowerCase()){
    case 'all':
        serverQueue.loopall = !serverQueue.loopall;
        serverQueue.loopone = false;

        if(serverQueue.loopall === true)
            message.channel.send("Nak loop loop semua ke? Ok bodo! Duk loop dah!");
        else
            message.channel.send("Xmau loop semua?Ok, dah tutup kote bapak ang!");
        break;

    case 'one':
        serverQueue.loopone= !serverQueue.loopone;
        serverQueue.loopall = false;

        if(serverQueue.loopone === true)
            message.channel.send("Nak loop loop satu ke? Ok bodo! Duk loop dah!");
        else
            message.channel.send("Xmau loop satu?Ok, dah tutup kote bapak ang!");
        break;

    case 'off':
        serverQueue.loopall = false;
        serverQueue.loopone = false;

        message.channel.send("Ok lah loop dah tutup! ISHHH!");
        break;

    default:
        message.channel.send("Please specify what loop you want. -loop <one/all/off>");
    }
}

module.exports.config = {
    name: "loop",
    aliases: ["l", "lp"]
}