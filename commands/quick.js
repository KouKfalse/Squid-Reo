const cfg = require("../libany/jscfg");
module.exports = {
    data:{
        name: "quick",
        description :"募集を瞬時にかけます",
        options: [{
            type: 3,
            name: "プレイスタイル",
            description: "楽しみながらやるか本気でやるかを選んでください！",
            required: true,
            choices: [{
                name: "雑談重視",
                value:"zat"
            },
            {
                name: "お話ししながらゲームも！",
                value: "zoh"
            },
            {
                name: "ちょっと本気で！",
                value: "chh"
            },
            {
                name: "ガチでやります :)",
                value: "hon"
            }
        ]
        },
        {
        type: 3,
        name: "聞き専の有無",
        description: "聞き専の方がオッケーかを選択してください！",
        required: true,
        choices: [{
            name: "アリ！",
            value: "oke"
        },
        {
            name: "ナシ！",
            value: "non"
        }]
    },
    
    {
        type: 3,
        name: "飛び入り参加の有無",
        description: "飛び入り参加がアリかナシかを決めてください！",
        required: true,
        choices: [{
            name: "確認があれば！",
            value: "kak"
        },
    {
        name: "確認なくても大丈夫です！",
        value: "nka"
    },
    {
        name: "ナシ！",
        value: "nof"
    }]
    },
    {
        type: 3,
        name: "遊ぶモード",
        description: "遊ぶモードを選択してください！",
        required: true,
        choices: [{
            name: "ナワバリバトル！",
            value:"reg"
        },
        {
            name: "バンカラマッチ！(オープン)",
            value: "ban"
        },
        {
            name: "プライベート！",
            value: "pri"
        },
        {
            name: "アルバイト！",
            value: "shk"
        },
        {
            name: "アルバイト！(プライベート)",
            value: "psh"
        },
        {
            name:"イベントマッチ！",
            value:"ibv"
        },
        {
            name: "ナワバトラー",
            value: "naw"
        }
    ]
    },
    {
        type: 3,
        name: "人数",
        description: "遊ぶ人数を選択してください！",
        required: true,
        choices: [{
            name:"二人！",
            value: "sec"
    },
    {
        name:"三人",
        value:"thr"
    },
    {
        name:"四人",
        value:"for"
    },
    {
        name:"五人(ロビープライベート)",
        value:"fiv"
    },
    {
        name:"六人(ロビープライベート)",
        value:"six"
    },
    {
        name:"七人(ロビープライベート)",
        value: "sev"
    },
    {
        name: "八人(ロビープライベート)",
        value:"eig"
    }
],
    },
{
    type:3,
    name: "時間帯",
    description: "時間帯を選んでください！",
    required: true,
    choices: [{
        name: "早朝",
        value: "soh"
    },
{
    name: "朝",
    value: "mor"
},
{
    name: "昼間",
    value: "day"
},
{
    name: "夕方",
    value: "yuu"
},
{
    name: "夜",
    value: "nig",
},
{
    name: "深夜",
    value: "mng"
}]
},
{
    type:3,
    name: "休日",
    description: "休日であるかどうかを選んでください！",
    required: true,
    choices: [{
        name: "休日",
        value: "kyu"
    },
    {
        name: "平日",
        value:"hei"
    }]
},
{
    type: 3,
    name: "開始時間",
    description: "開始時間を記入してください！",
    required: true,
    },]
},
    async execute(interaction){
    let opti1 = "";//雑談！
    let opti2 = "";//聞き専
    let opti3 = "";//飛び入り
    let opti4 = "";//マッチ内容
    let opti5 = "";//人数
    let opti6 = "";//時間帯
    let opti7 = "";//休日
        switch(interaction.options._hoistedOptions[0].value){
            case "zat":
                opti1 = "雑談重視！"
                break;
            case "zoh":
                opti1 = "お話ししながらゲームも！"
                break;
            case "chh":
                opti1 = "ちょっとだけ本気！"    
            break;
            case "hon":
                opti1 = "ガチでやります！"
            break;
        }
        switch(interaction.options._hoistedOptions[1].value){
            case "oke":
                opti2 = "アリ！"
                break;
            case "non":
                opti2 = "ナシ！"
                break;
        }
        switch(interaction.options._hoistedOptions[2].value){
            case "kak":
                opti3 = "確認があれば！"
                break;
            case "nka":
                opti3 = "確認がなくても！"
                break;
            case "nof":
            opti3 = "ナシ！"
            break;
        }
        switch(interaction.options._hoistedOptions[3].value){
            case "reg":
                opti4 = "ナワバリバトル！"
                break;
            case "ban":
                opti4 = "バンカラマッチ！"
                break;
            case "pri":
                opti4 = "プライベートマッチ！"
            break;
            case "shk":
                opti4 = "アルバイト！"
            break;
            case "psh":
                opti4 = "アルバイト(プライベート)！"
                break;
            case "ibv":
                opti4= "イベントマッチ！"
            break;
            case "naw":
                opti4 = "ナワバトラー！"
            break;
        }
        switch(interaction.options._hoistedOptions[4].value){
            case "sec":
                opti5 = "二人！"
                break;
            case "thr":
                if(!interaction.options._hoistedOptions[4].value == "naw"){
                    opti5 = "二人！"
                }else{
                opti5 = "三人！"
                }
            break;
            case "for":
                if(!interaction.options._hoistedOptions[4].value == "naw"){
                    opti5 = "二人！"
                }else{
                opti5 = "四人！"
                }
            break;
            case "fiv":
                if(interaction.options._hoistedOptions[4].value == "pri"){
                    opti5 = "五人！"
                }else if(!interaction.options._hoistedOptions[4].value == "naw"){
                    opti5 = "二人！"
                }else{
                    opti5 = "四人！"
                }
            break;
            case "six":
                if(interaction.options._hoistedOptions[4].value == "pri"){
                    opti5 = "六人！"
                }else if(!interaction.options._hoistedOptions[4].value == "naw"){
                    opti5 = "二人！"
                }else{
                    opti5 = "四人！"
                }
            break;
            case "sev":
            if(interaction.options._hoistedOptions[4].value == "pri"){
                opti5 = "七人！"
            }else if(!interaction.options._hoistedOptions[4].value == "naw"){
                opti5 = "二人！"
            }else{
                opti5 = "四人！"
            }
            break;
            case "eig":
                if(interaction.options._hoistedOptions[4].value == "pri"){
                    opti5 = "八人！"
                }else if(!interaction.options._hoistedOptions[4].value == "naw"){
                    opti5 = "二人！"
                }else{
                    opti5 = "四人！"
                }
                break;

        }
        switch(interaction.options._hoistedOptions[5].value){
            case "soh":
                if(interaction.options._hoistedOptions[6].value == "kyu"){
                    opti6 = "1132569469579956245"
                }else{
                    opti6 = "1132569246380077056"
                }
            break;
            case "mor":
                if(interaction.options._hoistedOptions[6].value == "kyu"){
                    opti6 = "1132569524852510862"
                }else{
                    opti6 = "1132568808008200242"
                }
            break;
            case "day":
                if(interaction.options._hoistedOptions[6].value == "kyu"){
                    opti6 = "1132569676615004202"
                }else{
                    opti6 = "1132568650117816390"
                }
            break;
            case "yuu":
                if(interaction.options._hoistedOptions[6].value == "kyu"){
                    opti6 = "1132569761889394699"
                }else{
                    opti6 = "1132568543179849768"
                }
            break;
            case "nig":
                if(interaction.options._hoistedOptions[6].value == "kyu"){
                    opti6 = "1132569855082627092"
                }else{
                    opti6 = "1132568490298060830"
                }
            break;
            case "mng":
                if(interaction.options._hoistedOptions[6].value == "kyu"){
                    opti6 = "1132569979825438750"
                }else{
                    opti6 = "1132568429723930674"
                }
            break;
        }
        
        
        title = "募集のお知らせ！"
        desp = 
        "募集主:"+ interaction.user.username+"\n" +
        "~募集内容~\n"+
        "プレイスタイル: "+opti1+"\n"+ 
        "聞き専について: "+opti2+"\n"+
        "飛び入り参加について: "+opti3+"\n"+
        "ゲーム内容: "+opti4+"\n"+
        "人数: "+opti5+"\n"+
        "開始時間: "+interaction.options._hoistedOptions[7].value
        ment = "<@&"+opti6+">"
        const eml = {
            title: title,
            description:  desp
        };
          interaction.reply({content: ment,embeds: [eml]})
    }
}
