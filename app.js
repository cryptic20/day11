
var pg = require('pg');

var connectionString = 'postgres://' + process.env.POSTGRES_USER + 
':' + process.env.POSTGRES_PASSWORD + '@localhost:8080/bulletinboard';

var pgClient = new pg.Client(connectionString);
pgClient.connect();

var query = pgClient.query(`SELECT * FROM public.messages`, function(err, result){
console.log(result.rows);


pgClient.end();


});

var now = new Date();
var string = now.toUTCString();
console.log(string);

function convert(time){
var recon = new Date(time);
console.log("reconversion date is: " + recon);
var reconvert = recon.toLocaleString([], { hour12: true});
console.log(reconvert);
};

convert(string);