const cfg = require("../libany/jscfg");

module.exports = {

    data:{

        name: "ping",

        description :"ボットの動作をテストするコマンドです",


    },

    async execute(interaction){

      

        interaction.reply({content: "pong!",ephemeral: true})

    }
}