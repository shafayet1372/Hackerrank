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

// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {
var s=b;
var count=0;
var str="";
for(var i=0;i<s.length;i++){

  if(s[i]=='0' && s[i+1]=="1" && s[i+2]=="0"){
 count++;
 i=i+2;
  }
}
return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const b = readLine();

    let result = beautifulBinaryString(b);

    ws.write(result + "\n");

    ws.end();
}