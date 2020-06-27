const fs=require('fs');

//Read
fs.readFile('./hello.txt', (err,data) => {
    if(err)
        console.log('err');
    console.log('Async ',data.toString());
})

const file=fs.readFileSync('./hello.txt');
console.log('Sync ',file.toString());

//Edit
fs.appendFile('./hello.txt',' This is the appended line!', err =>{
    if(err)
        console.log(err);
})

//Create
fs.writeFile('bye.txt', 'Goodbye', err => {
    if(err)
        console.log('err');
})

//Delete
fs.unlink('./bye.txt', err => {
    if(err)
        console.log('err');
    console.log('Inception');
})