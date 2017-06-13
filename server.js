//postgres library
var pg = require('pg');

//connect to database
pg.connect('postgres://postgres:kabayoka123@localhost:8080/bulletinboard', function(err, client, done){


// client.query(`insert into public.bulletinboard
//  (title, body)
//  values
//  ('mafia', 'fedora')`, function(err, result) {
//  //should print 'INSERT: 1'
//  console.log(`${result.command}: ${result.rowCount}`);

// 	done();
// 	//close the pg pool entirely/
// 	//this is done so our node process will exit.
// 	pg.end();
// });


// client.query(`select * from public.bulletinboard`, function(err, result){
// 	console.log(result.rows);
// 	done();

// 	pg.end();
// });



// client.query(`create TABLE public.bulletinboard
// (id	serial primary key,
// title	text,
// body	text
// )
// WITH (
//     OIDS = FALSE
// )
// TABLESPACE pg_default;`,function (err, result){
//     	console.log("created");

//     	done();

//     	pg.end();
//     });

// });


