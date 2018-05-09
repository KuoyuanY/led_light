request = require('request');

function postBody(url){
    var args = new Object();
    args.state = "ON";//ON/OFF
    args.colorR = 0;
    args.colorG = 255;
    args.colorB = 0;
    args.brightness = 100;
    args.effect = "solid";
    args.switches = "yes";//yes
    args.setCol = "yes";//yes
    args.setBr = "yes";//yes
    request.post(url, { json: args }, (error, response, body) => {
        if (!error) {
            if(response.statusCode == 200){
                console.log(body);
            }else{
                console.log(`statusCode: ${response.statusCode}`)
            }
        }else{
            console.log("error...");
            console.log(error);
        }
    });
}
address = "";
postBody(address);
