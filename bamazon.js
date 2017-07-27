var table = require('console.table');
var mysql = require('mysql');
var inquirer = require('inquirer');
var serverpass = require('./serverpass.js');

var connection = mysql.createConnection({
	host: 'localhost', 
	port: 3306,
	user: 'root',
	password: "FirmCode921975",
	database: 'bamazon_db'

});


connection.connect(function(err) {
  if (err) throw err;
  start();
  
});


function start() {

	connection.query("SELECT * FROM store", function(err, res){
		 
		if (err) throw err;

		console.table(res);
				
		inquirer.prompt({
				    
			name: "buyItem",
			type: "input",
			message: "Which ItemID would you like to order?",
			//validate the response to be only a number that is one of the numbers of the itemIDs available.
		})
		.then(function(answer) {
		
		var selectedID = answer;

		console.log(answer);
		console.log(res[4].StockQuantity);
		console.log(res.itemID("5"));

		


		// if (answer.buyItem == res.itemID) {
		// 	inquirer.prompt({
	   	// 		type: "input",
		// 		name: "howMany"
		// 		message: "What quantity of this item would you like?"
		// 	}).then(function(answer){
    	// 	})

				 //    	},

				 //     }
				 //    	//updateProduct();
				 //    	//start()
					
						 	

		});

	});

}
