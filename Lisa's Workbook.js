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

// Complete the workbook function below.

function workbook(n, k, arr) {
    var newar=[];
    var one=[];
    var count=0;
    for(var i=0;i<arr.length;i++){
        for(var j=1;j<=arr[i];j++){
            if(one.length ==k){
                newar.push(one);
                one=[];
                one.push(j);
            }else{
                one.push(j);
            }
        }
        if(one.length <=k){
            newar.push(one);
            one=[];
        }
        
    }
    
    for(var i=0;i<newar.length;i++){
       for(var j=0;j<=newar[i].length;j++){
           if((i+1)==newar[i][j]){
               count++;
              
           }
       }
    }
return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = workbook(n, k, arr);

    ws.write(result + "\n");

    ws.end();
}