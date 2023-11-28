const fs = require("fs");
exports.edit = function (key,value){
    fs.writeFileSync("./jscfg/"+key,value)
}
exports.get = function (key){
    return fs.readFileSync("./jscfg/"+key).toString();
}
exports.listmap_edit = async function (Listname, key ,value){
    await fs.promises.mkdir("./jscfg/"+Listname+"/",{recursive: true});
    await fs.writeFileSync("./jscfg/"+Listname+"/"+key,value)
}
exports.listmap_get = function (Listname, key ){
    return fs.readFileSync("./jscfg/"+Listname+"/"+key).toString();
}
exports.listmap_exist = function (Listname,key){
    if(!fs.existsSync("./jscfg/")) return false;
    if(!fs.existsSync("./jscfg/"+Listname)) return false;
    return fs.existsSync("./jscfg/"+Listname+"/"+key);
}
exports.exist = function(key){
    if(!fs.existsSync("./jscfg/")) return false;
    return fs.existsSync("./jscfg/"+key)
}