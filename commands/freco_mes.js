const cfg = require("../libany/jscfg");

module.exports = {

    data:{

        name: "freco_mes",

        description :"あなたの情報を表示できます",

        
    },

    async execute(interaction){

                  interaction.reply({content: "お待ちください！",ephemeral: true})

        if(cfg.listmap_exist(interaction.user.id,"friend_code")){

          interaction.channel.send("情報を取得しました！\n"+cfg.listmap_get(interaction.user.id,"friend_code"))

        }else{

            interaction.channel.send("あなたは情報を登録していないようです :melting_face: \n(/freco_meで情報を登録しましょう！)")

        }

     // console.log(interaction);
    }
}
