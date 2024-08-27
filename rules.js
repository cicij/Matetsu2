module.exports = {
    name: 'rules',
    description: "this is a command for the rules of the bot",
    execute(message, args, Discord){
        //embed part
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffbc75')
        .setTitle('Rules')
        .setDescription('Follow these rules:')
        .addFields(
            {name: 'Rule 1', value: 'Input rule1'},
            {name: 'Rule 2', value: 'Input rule2'},
            {name: 'Rule 3', value: 'Input rule3'}
        )
        .setImage('https://pbs.twimg.com/media/EcaAlXPU4AYH-aC.jpg')
        .setFooter('Mashiho is Epic');

        message.channel.send(newEmbed)
    }
}
