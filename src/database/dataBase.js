
var fs = require('fs');
function SaveData ( data, fileName){
    fs.writeFile(fileName, JSON.stringify(data), function(err) {
        if (err) {
            console.log(err);
        }
    });
}


module.exports = {
    SaveData
}