var pizzaDatabase = require("../models/pizza.js");
module.exports = function(app){
app.get('/',function(req, res){
	pizzaDatabase.selectAll(function(data){
		var pizzaObject = {
			pizza:data
		}
	res.render("index", pizzaObject);
	})
});
app.post('/',function(req,res){
	// console.log(req.body);
    pizzaDatabase.addPizza(["pizza_name", "toppings"], [req.body.pizza, req.body.toppings], function(){
    	res.redirect("/");
    });
});
app.put("/:id", function(req, res){
   pizzaDatabase.update(req.params.id,function(){
      	res.redirect("/");
   })
});
app.delete("/:id", function(req, res){
	console.log(req.body);
	pizzaDatabase.delete(req.params.id,function(){
		res.redirect("/");
	})
})
app.get('*',function(req, res){
	res.render("index");
})
}


