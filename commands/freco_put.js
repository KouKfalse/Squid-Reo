const cfg = require("../libany/jscfg");

module.exports = {

    data:{

        name: "freco_me",

        description :"あなたの情報を登録できます",

        options: [{

            type: 3,

            name: "テキスト",

            description: "情報内容",

            max_value: 500,

            required: true,

        }],

    },

    async execute(interaction){
      if(interaction.options._hoistedOptions[0].value.length >= 501){
interaction.reply({content: "500文字ぐらいで完結する自己紹介にしてね！",ephemeral: true})
      }else{

        cfg.listmap_edit(interaction.user.id,"friend_code",interaction.options._hoistedOptions[0].value)

        interaction.reply({content: "保存コマンドを実行しました!",ephemeral: true})

    }
    }
}