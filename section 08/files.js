
/*
    The fs module provides a lot of very useful functionality to access and interact with the file system.
    There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it
*/

const fs = require('fs');

// ! Read a file

fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
});

//? Synchronous version of the readFile method

try {
  const data = fs.readFileSync('./test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}


// ! Write a file

fs.writeFile('./test2.txt', 'Hello, World!', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File created!');
});

// ? Synchronous version of the writeFile method

const content = ' here is some content';

try{
  const data = fs.writeFileSync('./test3.txt', content);
}
catch(err){
  console.error(err);
}

