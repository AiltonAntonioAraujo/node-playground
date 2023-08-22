const db = require('./environment/database');

async function getAllCities () {
    let response;
    try{
        response = await db.query(
            `SELECT * FROM cidade`,
        );
        if(response.rows.length === 0) throw 'The cities table is empty. Please insert data';
    }catch(e){
        console.error('Cannot get cities from database', e);
    }
    return response.rows;
}

function start() { 
    return getAllCities()
} 

// Call start
(async() => {
    console.log('before start');
    await start()
    start().then(function(rows) {
        console.log(rows);
    }).catch((err) => setImmediate(() => { throw err; })); // Throw async to escape the promise chain;;
    console.log('after start');
  })();
