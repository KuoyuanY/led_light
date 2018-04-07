"use strict";
var request = require('request');
var fs = require('fs');

function download(url, filename, callback) {//downloads an image
    request.head(url, function(err, res, body){
        request(url).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
var url = "https://dummyimage.com/1242x2436/0eebca/fff.png&text=+"
download(url, "splash.png", () =>{
    console.log("done");
})
