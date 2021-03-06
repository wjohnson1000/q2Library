var express = require('express');
var cowsay = require('cowsay');

var app = express();

var books = ["Javascript-The Good Parts", "Eloquent Javascript",
"Horton Hears a Who"];

app.get('/cowsay/:cowsays', function(request, response){
  response.setHeader('content-type','text/html');
  response.send(
    "<pre>" +
      cowsay.say({'text': request.params.cowsays}) +
    "</pre>" + 
    "<div style='background-color:green; width:100%; height:800px;'></div>"
  );
})

app.get('/', function(request, response){
  response.json(books);
});

app.listen(8080);
