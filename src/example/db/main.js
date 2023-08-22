import cs from "./citie-service.js"

// Get all cities on Citie Service
(async() => {
    console.log('before start');
    await cs.getAllCities().then(function(rows) {
        console.log(rows);
    }).catch((err) => setImmediate(() => { throw err; })); // Throw async to escape the promise chain;;
    console.log('after start');
  })();
