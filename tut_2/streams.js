const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//event listner every time when we get a new chunk of data fire call back function

// readStream.on('data', (chunk) => {
//     console.log('---NEW CHUNK---');
//     console.log(chunk);
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

//piping best way to do it just use a pipe
readStream.pipe(writeStream);
