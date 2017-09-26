var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + '/public/assets'));
app.use(bodyParser.urlencoded({ extended: false }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
require("./controllers/pizza_controller.js")(app);


var PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
	console.log("listening on "+PORT);
});
