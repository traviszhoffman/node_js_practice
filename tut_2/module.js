//const xyz = require('./people');
const { people, ages} = require('./people'); // most convient way to import things in my opinion

//import require a file. this causes the file to automaticall run
// reurns an empy object if console.log(xyz)
//or console.log(people) is not defined 
//just because import doesn't give us access to the file

console.log(people, ages);

const os = require('os');

console.log(os.platform(), os.homedir());

