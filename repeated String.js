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
function repeatedString(s, n) {

var count=0,result,rem;

for(var i=0;i<s.length;i++){
  if(s[i]=="a"){
    count++;
  }
}


result=Math.floor(n/s.length);

rem=n%s.length;
  
count=count*result;
  console.log(count);
for(var i=0;i<rem;i++){
  if(s[i]=="a"){
    count++;
  }
}
return count;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}