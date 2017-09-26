var orm = require('../config/orm.js');
var pizzaTable = {
	selectAll: function(cb){
		orm.selectAll('pizzaCreation', function(response){
			cb(response);
		});
	},
	addPizza:function(cols,vals,cb){
		orm.addPizza('pizzaCreation', cols, vals, function(response){
			cb(response);
		});
	},
	update:function(colid,cb){
		orm.update('pizzaCreation',colid,function(response){
			cb(response);
		})
	},
	delete:function(colid,cb){
		orm.delete('pizzaCreation',colid,function(response){
			cb(response);
		})
	}
}
module.exports = pizzaTable;
