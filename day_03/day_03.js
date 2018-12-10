let fs = require('fs');
let inputFile = fs.readFileSync('input.txt', 'utf8');
let input = inputFile.split('\n');

create2Darray = () => {
    let array = [];

    for(let i = 0 ; i < 1000; i++){
        array[i] = [];
        for(let j = 0 ; j < 1000; j++){
            array[i][j] = '.';
        }
    }

    return array;

}

checkNumberOverlaps = (arr) => {
    let num = 0;

    for(let i = 0 ; i < arr.length; i++){
        for(let j = 0 ; j < arr[i].length; j++){
            if(arr[i][j] == 'X')
                num++;
        }
    }

    console.log(num);
}

let part_1 = function() {
    let arr = create2Darray();

    
    input2 = input.map(elem => elem.replace(/@|,|x|:|#/g, ' '));

    input2.forEach(element => {

        
        tmp = element.split(' ');
        for(let i = parseInt(tmp[4]); i < parseInt(tmp[4]) + parseInt(tmp[7]); i++){
            for(let j = parseInt(tmp[5]); j < parseInt(tmp[5]) + parseInt(tmp[8]); j++){
                if(arr[i][j] == '.') 
                    arr[i][j] = tmp[1];
                else 
                    arr[i][j] = 'X';
            }
        }
        
    });

    checkNumberOverlaps(arr);
}

part_1();
