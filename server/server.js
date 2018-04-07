'use strict';
const express = require('express');
const app = express();
const credentials = requre('credentials');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');
var cre = {
    username: credentials.username,
    password: credentials.password
};
var client = mqtt.connect(m14.cloudmqtt.com, cre);
const topic = "";

//setting up client
client.on('connect', () => {//
    console.log("successfully connted to mqtt client");
});

app.use(bodyParser.json());
app.post('/set', (req, res) => {
    var message = `{"state":"${req.query.state}","color":{"r":${req.query.color.r},"g":${req.query.color.g},"b":${req.query.color.b}},"brightness":${req.query.brightness},"effect":"${req.query.effect}"}`;

    client.publish(topic, message, (err) => {//send command to arduino
        if(err){
            console.log(`client disconnecting`);
            res.send("an error has occurred");
        } else{
            console.log("successfully connected");
            if(res.query.switch === "yes"){//turn led on/off
                console.log(`successfully turned led ${req.query.state}`);
                res.send(`successfully turned led ${req.query.state}`);
            }else if(res.query.setCol === "yes"){//change color of led
                console.log(`successfully changed color of led`);
                res.send(`successfully changed color of led`);
            }else if(res.query.setBr === "yes"){//change brightness
                console.log(`successfully changed brightness of led`);
                res.send(`successfully changed brightness of led`);
            }else{//set effect
                console.log(`successfully set effect to ${req.query.effect}`);
                res.send(`successfully set effect to ${req.query.effect}`)
            }
        }
    });
});



var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});
