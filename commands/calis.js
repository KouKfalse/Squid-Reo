const cfg = require("../libany/jscfg");
const syscall = require("../index")
module.exports = {

    data:{

        name: "calis",

        description :"運営オンリー！",

    },

    async execute(interaction){

        if(interaction.memberPermissions.has('ADMINISTRATOR')){

        interaction.reply({content: "お待ちください！",ephemeral: true})

         cfg.edit("callishere",interaction.channel.id);

         interaction.channel.send("お問い合わせ送信先を設定しました！");

        }else{

            interaction.reply({content: "運営オンリー！",ephemeral: true})

          syscall.ssend(cfg.get("ikalog"),"警戒！\n"+interaction.author.username + "さんが運営用コマンドを使用しました！");

        }

        

    }

}