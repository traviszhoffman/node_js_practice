const fs = require('fs');

// reading files assynchron
/** fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
**/

//console.log('last line'); 
// writing files
/**fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
    console.log('file was wirtten');
})
**/
// directories
if (!fs/fs.existsSync('./assest')) {
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
})
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
}
