let fs = require('fs');
let inputFile = fs.readFileSync('input.txt', 'utf8');
let input = inputFile.split('\n');

let exer01 = function() {
    let a = 0;
    input.forEach(element => {
        a += parseInt(element);
        console.log(a);
    });
}


exer01();