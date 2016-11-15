var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var config = require('./config.json');

var app = module.exports = express();
var db = massive.connectSync({
    db: "burton"
});

app.set('db', db);

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("../public"));

app.get('/hello', function(req,res,next){
    res.status(200).json({hello: 'Joshua, would you like to play thermonuclear war?'});
})



app.listen(config.port, function(){
    console.log('port is on', config.port);
})
