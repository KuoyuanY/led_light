request = require('request');

function postBody(url){
    var args = new Object();
    args.state = "ON";//ON/OFF
    args.colorR = 255;
    args.colorG = 0;
    args.colorB = 100;
    args.brightness = 100;
    args.effect = "juggle";
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
address = "http://localhost:3000/set";
postBody(address);
