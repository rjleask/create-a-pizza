var connection = require('./connection.js');
// sql statement methods inside my orm object
var orm = {
	selectAll: function(tableInput, cb){
		var queryString = 'SELECT * FROM ??';
		connection.query(queryString, [tableInput], function(err, result){
			if(err){
				throw err;
			}
			// console.log(result);
			cb(result);
		})
	},
	addPizza: function(tableInput, cols, vals, cb){
		// need to turn cols array into a string for sql
		var queryString = "INSERT INTO " + tableInput + "(" + cols.toString() + ") VALUES " + "(";
		queryString += questionMarksForValues(vals.length)+")";
		connection.query(queryString, vals, function(err, result){
			if(err){
				throw err;
			}
			// console.log(result);
			cb(result);
		})
	},
	update:function(tableInput,colid,cb){
	var queryString = "UPDATE "+tableInput +" SET devoured = TRUE WHERE id ="+colid;
	connection.query(queryString,function(err, result){
		if(err){
			throw err;
		}
	  // console.log(result);
		cb(result);
	})
},
delete:function(tableInput,colid,cb){
	var queryString = "DELETE FROM "+ tableInput + " WHERE id=" + colid;
	connection.query(queryString,function(err, result){
		if (err) {
			throw err;
		}
		console.log(result);
		cb(result);
	})
}
}
// Helper function for SQL syntax.
function questionMarksForValues(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
module.exports = orm;