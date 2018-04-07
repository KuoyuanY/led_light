var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', function (req, res) {

    res.send();
});
app.post('/', function (req, res) {//

    res.send();
});



var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
})
