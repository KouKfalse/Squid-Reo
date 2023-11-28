const { Client, GatewayIntent, Partials, GatewayIntentBits,ClientApplicationnode  ,PermissionsBitField, Events,ActivityType} = require('discord.js');
var base = 15
var first_boot = true;
var restart = base;
const http = require('http');
const mfunc = require('./message_func/musfunc');

    const fs = require("fs");

const client = new Client({

    intents: [

        GatewayIntentBits.DirectMessages,

        GatewayIntentBits.GuildMessages,

        GatewayIntentBits.GuildBans,

        GatewayIntentBits.Guilds,

        GatewayIntentBits.MessageContent,

        GatewayIntentBits.GuildMembers,

      GatewayIntentBits.GuildVoiceStates

    ]

});

var debug = false;

var BTOKEN = process.env['bot'];

var debugserverid = '1136305396944994357'

var myserverid =  '1103276682502230106'

const commands = {};

var silent_delete = false;

exports.ssend = function (id,naiyo){

    client.channels.cache.get(id).send(naiyo)

}
exports.gsent = async function (id,naiyo){

   var sent = await  client.channels.cache.get(id).send(naiyo)
  return sent;
}
exports.ddelet = function (id,id2){
try {
   client.channels.cache.get(id).delete(id2)
} catch (e) {
   console.log(e);
}

   

}
exports.ddelete = function (id,id2,notif){
  silent_delete = notif;
  client.channels.fetch(id).then(channel => {
    channel.messages.delete(id2);
    
});

   
}

const commandFiles = fs.readdirSync('./commands/').filter(file =>

    file.endsWith('.js'))

for(const file of commandFiles){

    const command = require(`./commands/${file}`);

    commands[command.data.name] = command;

}

// let sendingchannelvar = 1129442718419005481

client.once('ready',async () =>{

    var data = [];

  client.user.setPresence({ 
    activities: [{ 
        name: 'エイ！', 
        type : ActivityType.Competing
    }], 
    status: "dnd"
});

client.user.setStatus('dnd')

    for(const commandName in commands){

        data.push(commands[commandName].data)

    }

    if(debug){

        await client.application.commands.set(data,debugserverid)

        console.log('hello! debug mode')

    }else{

    await client.application.commands.set(data,myserverid)

    console.log('hello!')

}

});
    
client.on('messageCreate', async(m) => {
  mfunc.anti_invite(m);
  mfunc.auther(m);
  mfunc.template_updatar(m);
  
});



client.on('messageDelete', async (message) => {
  if(!silent_delete){
  mfunc.delete_saver(message)
  }
  silent_delete = false;
  
});
client.on('interactionCreate' ,async (ind) =>{

    if(!ind.isCommand){

        return;

    }

    const command = commands[ind.commandName];

    try{

        await command.execute(ind);

    }catch(error){

        console.error(error);

        await ind.reply('エラー!')

        

    }

});



//reboots
http.createServer(function (req, res) {
  res.write("online");
  res.end();
  
  if(restart == base){
    restart = 0;
    async function relog(){
      var is_successor = false;
      try {
         await client.destroy();
        console.log(`Logout success`);
      } catch (e) {
         is_successor = true
        console.log(`Logout failed`);
      }
      if(is_successor){
        return
      }
      await client.login(BTOKEN);
      
    }
    if(first_boot){
      client.login(BTOKEN);
      first_boot = false;
    }else{
      relog();
    }
  }
  restart ++;
}).listen(8080);