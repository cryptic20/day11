//postgres library
var pg = require('pg');

//connect to database
pg.connect('postgres://postgres:kabayoka123@localhost:8080/class_db', function(err, client, done){


// client.query(`insert into public.hats
//  (name, material, height, brim)
//  values
//  ('mafia', 'fedora', '3', true)`, function(err, result) {
//  //should print 'INSERT: 1'
//  console.log(`${result.command}: ${result.rowCount}`);

// 	done();
// 	//close the pg pool entirely/
// 	//this is done so our node process will exit.
// 	pg.end();
// });


// client.query(`select * from public.hats`, function(err, result){
// 	console.log(result.rows);
// 	done();

// 	pg.end();
// });



client.query(`create TABLE public.bulletinboard
(id serial primary key,  id	serial primary key
title	text
body	text
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;`,function (err, result){
    	console.log("created");

    	done();

    	pg.end();
    });

});


