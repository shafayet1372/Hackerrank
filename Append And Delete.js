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

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {

var ar1=s;
var ar2=t;

var m;
if(ar1.length>ar2.length){
    m=ar1.length;
}else if(ar1.length<ar2.length){
    m=ar2.length;
}else{
    m=ar1.length;
}
var count=0;
for(var i=0;i<m;i++){
    if(ar1[i]!=ar2[i]){
        count++;
    }
}

if(k%2==0 && count%2==0){
    return "Yes";
}else if(k%2==1 && count%2==1){
    return "Yes";
}else if(k%2==1 && count%2==0){
    return "Yes";
}else{
    return  "No";
}
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine(), 10);

    let result = appendAndDelete(s, t, k);

    ws.write(result + "\n");

    ws.end();
}