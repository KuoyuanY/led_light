const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get('/', (req, res) => {

    res.send();
});
app.post('/', (req, res) =>  {//

    res.send();
});



var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('running at http://' + host + ':' + port)
});
