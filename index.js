//Tạo port để lắng nghe request từ client gọi lên.
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
var connection = require('./public/server/models/connection');
var user = require('./public/server/api/user');

var app = express();


app.use(serveStatic(path.join(__dirname, 'public')));

app.get('/', function(request, response){
  response.redirect('/src/index.html');
});

connection.init();
user.configure(app);

app.listen(3333,function(){
  console.log('Node server running @ http://localhost:3333')
});

// var bodyparser = require('body-parser');
// app.use(bodyparser.urlencoded({extended: true}));
// app.use(bodyparser.json());
