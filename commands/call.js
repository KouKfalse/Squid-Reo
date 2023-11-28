const cfg = require("../libany/jscfg");

const syscall = require("../index")

module.exports = {

    data:{

        name: "call",

        description :"運営にお問い合わせ等ができます",

        options: [{

            type: 4,

            name: "匿名",

            description: "ほかの利用者からに見えないお問い合わせを行えます(運営も基本は見れません)",

            required: true,

            choices: [{

                name: "オフ",

                value: 1,

            },

            {

                name: "オン",

                value: 2

            }]

        },

        {

            type: 3,

            name: "件名",

            description: "要約した内容を件名として入力してください",

            required: true,

        },

    {

        type: 3,

        name: "内容",

        description: "内容を記入してください",

        required: true

    }],

    },

    async execute(interaction){

        interaction.reply({content: "お待ちください！",ephemeral: true})

        console.log(interaction.options._hoistedOptions[0].value);

        author =interaction.user.username

        titl = interaction.options._hoistedOptions[1].value

        desp =interaction.options._hoistedOptions[2].value

        if(interaction.options._hoistedOptions[0].value == 1){

            

            

            syscall.ssend(cfg.get("callishere"),"by "+author+"\n\n件名: "+titl+"\n"+desp)

            cfg.listmap_edit("calls",titl,"by "+author+"\n\n件名: "+titl+"\n"+desp)

        }else{

            syscall.ssend(cfg.get("callishere"),"件名: "+titl+"\n"+desp)

            cfg.listmap_edit("calls",titl,"by "+author+"\n\n件名: "+titl+"\n"+desp)

        }

        

    }

}