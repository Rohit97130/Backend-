
const fs= require('fs');


//1.Read , Write , Update , Delete


//!Read
let data = fs.readFileSync('1_fs.txt');

console.log('file1-content' + data);


//!Write

fs.writeFileSync('fs2.txt',"This is the contain");


//If this file does not exist then  it will create and then write into the file
fs.writeFileSync('fs3.txt' , "This is the content of fs2.txt file");


//!Update or append  the content


// const fs= require('fs');
fs.appendFileSync('fs2.txt','This is updated content')



//!Delete a File
// const fs= require('fs');
fs.unlinkSync('fs3.txt');

