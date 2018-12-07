let fs = require('fs');
let inputFile = fs.readFileSync('input.txt', 'utf8');
let input = inputFile.split('\n');

let part_1 = function() {
    let a = 0;
    input.forEach(element => {
        a += parseInt(element);
    });
    console.log(a);
}


// Very costly and needs a lot of time (change to set)
let part_2 = function() {
    let twices = [];
    let a = 0;
    twices.push(a);

    while(true) {
        for (let i = 0; i < input.length; i++) {
            a += parseInt(input[i]);
            
            if (twices.indexOf(a) > -1) {
                console.log(a);
                return;
            } else 
            twices.push(a);
        }
    }
}

// Way better solution 
let part_2_set = function(){
    let twices = new Set();
    let a = 0;
    twices.add(a);

    while(true) {
        for (let i = 0; i < input.length; i++) {
            a += parseInt(input[i]);
            
            if (twices.has(a)) {
                console.log(a);
                return;
            } else 
            twices.add(a);
        }
    }
}

part_1();
part_2_set();