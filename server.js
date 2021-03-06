var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artone', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artone.html'));
});
var stdid=1;
app.get('/reg', function (req, res) { stdid=stdid+1;
      if(stdid>10)
    res.send('registration over');
  else
    res.send('registation sucess . ID is '+stdid.toString());
    
});

app.get('/arttwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'arttwo.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
