// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongodb = require('mongodb');


var MongoClient = mongodb.MongoClient;
var url = 'mongodb://shivambijoria:balloons1@ds113628.mlab.com:13628/heroku_xq8w25z3';


var data_to_send=[
	
            
		{"Id": 1, "Country" : "Aruba", "Population" : 103000},
		{"Id": 2, "Country" : "Afghanistan", "Population" : 22720000},
		{"Id": 3, "Country" : "Angola", "Population" : 12878000},
		{"Id": 4, "Country" : "Anguilla", "Population" : 8000},
		{"Id": 5, "Country" : "Albania", "Population" : 3401200},
		{"Id": 6, "Country" : "Andorra", "Population" : 78000},
		{"Id": 7, "Country" : "Netherlands Antilles", "Population" : 217000},
		{"Id": 8, "Country" : "United Arab Emirates", "Population" : 2441000},
		{"Id": 9, "Country" : "Argentina", "Population" : 37032000},
		{"Id": 10, "Country" : "Armenia", "Population" : 3520000},
		{"Id": 11, "Country" : "American Samoa", "Population" : 68000},
		{"Id": 12, "Country" : "Antigua and Barbuda", "Population" : 68000},
		{"Id": 13, "Country" : "Australia", "Population" : 23840314},
		{"Id": 14, "Country" : "Austria", "Population" : 8091800},
		{"Id": 15, "Country" : "Azerbaijan", "Population" : 7734000},
		{"Id": 16, "Country" : "Burundi", "Population" : 6695000},
		{"Id": 17, "Country" : "Belgium", "Population" : 10239000},
		{"Id": 18, "Country" : "Benin", "Population" : 6097000},
		{"Id": 19, "Country" : "Burkina Faso", "Population" : 11937000},
		{"Id": 20, "Country" : "Bangladesh", "Population" : 129155000},
		{"Id": 21, "Country" : "Bulgaria", "Population" : 8190900},
		{"Id": 22, "Country" : "Bahrain", "Population" : 617000},
		{"Id": 23, "Country" : "Bahamas", "Population" : 307000},
		{"Id": 24, "Country" : "Bosnia and Herzegovina", "Population" : 3972000},
		{"Id": 25, "Country" : "Belarus", "Population" : 10236000},
		{"Id": 26, "Country" : "Belize", "Population" : 241000},
		{"Id": 27, "Country" : "Bermuda", "Population" : 65000},
		{"Id": 28, "Country" : "Bolivia", "Population" : 8329000},
		{"Id": 29, "Country" : "Brazil", "Population" : 170115000},
		{"Id": 30, "Country" : "Barbados", "Population" : 270000},
		{"Id": 31, "Country" : "Brunei", "Population" : 328000},
		{"Id": 32, "Country" : "Bhutan", "Population" : 2124000},
		{"Id": 33, "Country" : "Botswana", "Population" : 1622000},
		{"Id": 34, "Country" : "Central African Republic", "Population" : 3615000},
		{"Id": 35, "Country" : "Canada", "Population" : 31147000},
		{"Id": 36, "Country" : "Cocos (Keeling) Islands", "Population" : 600},
		{"Id": 37, "Country" : "Switzerland", "Population" : 7160400},
		{"Id": 38, "Country" : "Chile", "Population" : 15211000},
		{"Id": 39, "Country" : "China", "Population" : 1277558000},
		{"Id": 40, "Country" : "Cote d'Ivoire", "Population" : 14786000},
		{"Id": 41, "Country" : "Cameroon", "Population" : 15085000},
		{"Id": 42, "Country" : "The Democratic Republic of the Congo", "Population" : 51654000},
		{"Id": 43, "Country" : "Congo", "Population" : 2943000},
		{"Id": 44, "Country" : "Cook Islands", "Population" : 20000},
		{"Id": 45, "Country" : "Colombia", "Population" : 42321000},
		{"Id": 46, "Country" : "Comoros", "Population" : 578000},
		{"Id": 47, "Country" : "Cape Verde", "Population" : 428000},
		{"Id": 48, "Country" : "Costa Rica", "Population" : 4023000},
		{"Id": 49, "Country" : "Cuba", "Population" : 11201000},
		{"Id": 50, "Country" : "Christmas Island", "Population" : 2500},
		{"Id": 51, "Country" : "Cayman Islands", "Population" : 38000},
		{"Id": 52, "Country" : "Cyprus", "Population" : 754700},
		{"Id": 53, "Country" : "Czech Republic", "Population" : 10278100},
		{"Id": 54, "Country" : "Germany", "Population" : 82164700},
		{"Id": 55, "Country" : "Djibouti", "Population" : 638000},
		{"Id": 56, "Country" : "Dominica", "Population" : 71000},
		{"Id": 57, "Country" : "Denmark", "Population" : 5330000},
		{"Id": 58, "Country" : "Dominican Republic", "Population" : 8495000},
		{"Id": 59, "Country" : "Algeria", "Population" : 31471000},
		{"Id": 60, "Country" : "Ecuador", "Population" : 12646000},
		{"Id": 61, "Country" : "Egypt", "Population" : 68470000},
		{"Id": 62, "Country" : "Eritrea", "Population" : 6250000},
		{"Id": 63, "Country" : "Western Sahara", "Population" : 293000},
		{"Id": 64, "Country" : "Spain", "Population" : 39441700},
		{"Id": 65, "Country" : "Estonia", "Population" : 1439200},
		{"Id": 66, "Country" : "Ethiopia", "Population" : 78565000},
		{"Id": 67, "Country" : "Finland", "Population" : 5171300},
		{"Id": 68, "Country" : "Fiji Islands", "Population" : 817000},
		{"Id": 69, "Country" : "Falkland Islands", "Population" : 2000},
		{"Id": 70, "Country" : "France", "Population" : 59225700},
		{"Id": 71, "Country" : "Faroe Islands", "Population" : 43000},
		{"Id": 72, "Country" : "Federated States of Micronesia", "Population" : 119000},
		{"Id": 73, "Country" : "Gabon", "Population" : 1226000},
		{"Id": 74, "Country" : "United Kingdom", "Population" : 59623400},
		{"Id": 75, "Country" : "Georgia", "Population" : 4968000},
		{"Id": 76, "Country" : "Ghana", "Population" : 20212000},
		{"Id": 77, "Country" : "Gibraltar", "Population" : 25000},
		{"Id": 78, "Country" : "Guinea", "Population" : 7430000},
		{"Id": 79, "Country" : "Guadeloupe", "Population" : 456000},
		{"Id": 80, "Country" : "Gambia", "Population" : 1305000},
		{"Id": 81, "Country" : "Guinea-Bissau", "Population" : 1213000},
		{"Id": 82, "Country" : "Equatorial Guinea", "Population" : 453000},
		{"Id": 83, "Country" : "Greece", "Population" : 10545700},
		{"Id": 84, "Country" : "Grenada", "Population" : 94000},
		{"Id": 85, "Country" : "Greenland", "Population" : 56000},
		{"Id": 86, "Country" : "Guatemala", "Population" : 11385000},
		{"Id": 87, "Country" : "French Guiana", "Population" : 181000},
		{"Id": 88, "Country" : "Guam", "Population" : 168000},
		{"Id": 89, "Country" : "Guyana", "Population" : 861000},
		{"Id": 90, "Country" : "Hong Kong", "Population" : 6782000},
		{"Id": 91, "Country" : "Honduras", "Population" : 6485000},
		{"Id": 92, "Country" : "Croatia", "Population" : 4473000},
		{"Id": 93, "Country" : "Haiti", "Population" : 8222000},
		{"Id": 94, "Country" : "Hungary", "Population" : 10043200},
		{"Id": 95, "Country" : "Indonesia", "Population" : 237641326},
		{"Id": 96, "Country" : "India", "Population" : 1013662000},
		{"Id": 97, "Country" : "Ireland", "Population" : 3775100},
		{"Id": 98, "Country" : "Iran", "Population" : 67702000},
		{"Id": 99, "Country" : "Iraq", "Population" : 23115000},
		{"Id": 100, "Country" : "Iceland", "Population" : 279000}
    
	];



// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {

    console.log('Connection established to', url);

    collection = db.collection('country');
	
	collection.drop();

    

for(k=0;k<100;k++){
    collection.insert(data_to_send[k], function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
});
  }
 
  
  
  }
});

app.use(function(req, res, next) 
{ 
res.header('Access-Control-Allow-Origin', "*"); 
res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE'); 
res.header('Access-Control-Allow-Headers', 'Content-Type'); next();
})


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

var count=1;
	
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/api', function(req, res) {
    if (count>100){
		count=1;
	}
	collection.find({Id: count}).toArray(function (err, result) { 
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result[0].Country);
		res.json(result[0]);
	count=count+1;
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
      //Close connection
      
    });
		
});


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
