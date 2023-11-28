const cfg = require("../libany/jscfg");

module.exports = {

    data:{

        name: "kamon",

        description :"飛び入り参加の募集をかけます！",

options: [{

    type:8,

    name: "ロール指定",

    description: "時間帯を選んでください！",

required: true,

},

{

    type:3,

    name: "メッセージ",

    description: "フレンドコードや必要人数などのメッセージをお願いします！",

    required: true,

},]

    },

    async execute(interaction){

if(interaction.options._hoistedOptions[0].role.name === "@everyone"){

interaction.reply({content: "@everyoneは利用できません！",ephemeral: true})

}else{

const eml = {



            title: "飛び入り参加の募集中です",



            description:  interaction.options._hoistedOptions[1].value



        };

interaction.reply({content: "<@&"+interaction.options._hoistedOptions[0].value+">",embeds: [eml]})

}

    }

}