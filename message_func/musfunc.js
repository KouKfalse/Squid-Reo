const cfg = require("../libany/jscfg");
const syscall = require("../index")
exports.anti_invite = async function(message){
  if((message.content.includes("https://discord.gg")|| message.content.includes("https://discord/invite"))&& !(message.author.id == 1136280985445601411)){
    if(cfg.exist("ikalog")){   syscall.ssend(cfg.get("ikalog"),message.author.username + "さんが招待リンクを送信しました\n\n内容"+message.content);
    await message.delete();
    }else{
       message.delete();
    }

  }
}
exports.auther = function(message){
  try {
     if(message.channel.id == 1109761411464298566){
const member = message.guild.members.cache.get(message.author.id);
            const role = message.guild.roles.cache.get('1157685713219891313');
            member.roles.add(role);
     }
  } catch (e) {
     syscall.ssend(cfg.get("ikalog"),"Error:" + e.toString())
  }
  
  
}
exports.delete_saver = function(message){
  if(cfg.exist("delishere")){
    syscall.ssend(cfg.get("delishere"),message.content+ "\nby " + message.author.username+ "\nin " +message.channel.name)
  }
}

exports.template_updatar = async function(message){
  if(cfg.exist("tempishere")&&message.channel.id == cfg.get("tempishere")&&(!message.author.bot)){
    if(cfg.exist("oldtemp")){
       await syscall.ddelete(cfg.get("tempishere"),cfg.get("oldtemp"),true);
    }
const sent = await syscall.gsent(cfg.get("tempishere"),{content:"［名前］\n［趣味］\n［ひとこと］\nー任意ー\n［性別］\n［フレンドコード］\n［年齢］\n［持ち武器］\n［浮上時間帯］\n［浮上する日］",flags: [ 4096 ]})
await cfg.edit("oldtemp",sent.id) 
  }
  
}