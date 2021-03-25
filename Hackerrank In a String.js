'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hackerrankInString function below.

function hackerrankInString(s) {

    var l="hackerrank";
    var s_tore=l.split("");
    var one=s;
    one=one.split("");
   var str="";
    for(var i=0;i<s_tore.length;i++){
        for(var j=0;j<one.length;j++){
            if(s_tore[i]==one[j]){
                str=str+one[j];
                console.log(str);
                one.splice(0,j+1);
                break;
               
            }
        }
    }
    if(l==str){
        return "YES";
    }else{
        return "NO";
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}