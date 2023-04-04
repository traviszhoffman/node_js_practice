// Global Object is not window but global in node enviroment

//console.log(global)
//dont need to explicitely specify global

/** setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('in the interval');
}, 1000); **/

console.log(__dirname); // get folder path
console.log(__filename); // get file path

//cant get access to document because don't need access to get document because its for backend