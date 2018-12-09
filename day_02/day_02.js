let fs = require('fs');
let inputFile = fs.readFileSync('input.txt', 'utf8');
let input = inputFile.split('\n');

let count_string = function(str) {
    let count = {};
    for (let i = 0; i < str.length; i++) {
        if(count[str[i]]) 
            count[str[i]]++;
        else
        count[str[i]] = 1;
    }

    let two = 0 , three = 0;

    for (let key in count) {
        if (count[key] == 2)
            two = 1;
        else if (count[key] == 3)
            three = 1;
        
    }
    return [two, three];
}

let part_1 = function() {
    let two = 0, three = 0;

    for (let i = 0; i < input.length; i++) {
        let temp = count_string(input[i]);
        two += temp[0];
        three += temp[1];
    }
    
    let result = two * three;
    console.log(result);
}

let checkNumberDiffChars = function(string1, string2) {
    let i = 0, diff = 0;

    for( ; i < string1.length && i < string2.length ; i++){

        if(string1[i] != string2[i])
            diff++;
    }

    if(diff == 1) {
        let str = '';
        
        for(i=0 ; i < string1.length && i < string2.length ; i++){
            
            if(string1[i] == string2[i])
                str += string1[i];
        }
        console.log(str);
    }

}

let part_2 = function() {

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++){
            checkNumberDiffChars(input[i], input[j]);
        }    
    }
}


part_2();
