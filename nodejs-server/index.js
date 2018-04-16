//Tạo port để lắng nghe request từ client gọi lên.
var express = require("express");
app = express();
app.listen(3000);

//Method Get
//<request> => client gửi lên server
//<response> => server trả về cho client
app.get('/', function(request, response){
  response.send('<h1>Xin Chào!!!</h1>');
});

