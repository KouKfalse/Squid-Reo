const cfg = require("../libany/jscfg");

module.exports = {

    data:{

        name: "freco_get",

        description :"指定した方の情報を呼び出せます",

        options: [{

            type: 6,

            name: "指定ユーザー",

            description: "情報を呼び出すユーザーの指定",

            required: true,

        }],

    },

    async execute(interaction){

          interaction.reply({content: "お待ちください！",ephemeral: true})

        if(cfg.listmap_exist(interaction.options._hoistedOptions[0].value,"friend_code")){

          interaction.channel.send("情報を取得しました！\n"+cfg.listmap_get(interaction.options._hoistedOptions[0].value,"friend_code"))

        }else{

            interaction.channel.send("ユーザーは情報を登録していないようです :melting_face: \n(この際なので/freco_meを紹介してね！)")

        }



    }

}