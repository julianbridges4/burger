var connection = require("../config/connection.js");

var orm = {
	all: function(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	create: function(table, input, cb) {
		var queryString = `INSERT INTO ${table} (burger_name) VALUES('${input}');` 
	
		connection.query(queryString, function(err, result) {
		  if (err) {
			throw err;
		  }
		  cb(result);
		});
	  },
	  update: function(table, id, cb) {
		var queryString = `UPDATE ${table} SET devoured = TRUE WHERE id = ${id}`
	
		console.log(queryString);
		connection.query(queryString, function(err, result) {
		  if (err) {
			throw err;
		  }
	
		  cb(result);
		});
	  }
};

module.exports = orm;