const fs = require('fs');
const path = require('path');

const callback = (el) => {
    fs.readFile( path.resolve(__dirname, el, 'readme.md'), (err, data)=>{
        const appendix = data.toString().split('\n')[0].match(/\w{4,10}/)[0].toLowerCase();
        fs.renameSync( path.resolve(__dirname, el), path.resolve(__dirname, el + '-' + appendix) );
    });
}


fs.readdir(path.resolve(__dirname), function( err, data ){
  console.log(


    data.filter(el => !isNaN(el)).forEach( el => callback(el) ));
  
})