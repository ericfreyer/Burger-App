  
var connection = require('./connection.js');

var orm = {
	selectAll: function(tableInput,cb){
		connection.query(`SELECT * FROM ??; ${tableInput};`, function(err, result){
			if (err) throw err;
			// console.log(result);
			 cb(result);
		});
	},
	insertOne: function (table, cols, vals, cb) {
		let queryString = `INSERT INTO ${table}`;
	
		queryString += ' (';
		queryString += cols.toString();
		queryString += ') ';
		queryString += 'VALUES (';
		queryString += printQuestionMarks(vals.length);
		queryString += ') ';
	
		console.log(queryString);
	
		connection.query(queryString, vals, (err, result) => {
		  if (err) {
			throw err;
		  }
	
		  cb(result);
		});
	  },
	updateOne: function (table, objColVals, condition, cb) {
		let queryString = `UPDATE ${table}`;
	
		queryString += ' SET ';
		queryString += objToSql(objColVals);
		queryString += ' WHERE ';
		queryString += condition;
	
		console.log(queryString);
		connection.query(queryString, (err, result) => {
		  if (err) {
			throw err;
		  }
	
		  cb(result);
		});
	  },
	  delete(table, condition, cb) {
		let queryString = `DELETE FROM ${table}`;
		queryString += ' WHERE ';
		queryString += condition;
	
		connection.query(queryString, (err, result) => {
		  if (err) {
			throw err;
		  }
	
		  cb(result);
		});
	  },
	};

module.exports = orm;