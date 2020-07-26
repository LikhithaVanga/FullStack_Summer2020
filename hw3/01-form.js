// Enter your code here

var express = require('express');
var app = express();
const port = 5500
console.log('express..');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
console.log('bodyParser..');

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/"+'index.html');
});
console.log('index.html..');


app.post('/submit', function (req,res) {
    var name = 'Name: '+ req.body.inputName;
    var email = 'Email: '+ req.body.inputEmail;
    var comments = 'Comments: '+ req.body.inputComment;
    if(req.body.chckbox == "on"){
        var newsletter = "Yes, I would like to signup for newsletter."
    }
    else{
        var newsletter = "No, Thank you."
    }
    var newsletterres = 'Newsletter:' +newsletter;


    res.write(name + '\r\n');  
    res.write(email + '\r\n');
    res.write(comments + '\r\n');
    res.write(newsletterres + '\r\n')

    res.end();
});

var server = app.listen(port, function () {
    console.log('Node server is running..');
});