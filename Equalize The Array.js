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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
var ar=arr;
var len=ar.length;
var one=[];
var count;
for(var i=0;i<ar.length;i++){
    count=0;
  for(var j=i;j<ar.length-1;j++){
    if(ar[i]==ar[j+1]){
      ar.splice(j+1,1);
      count++;
      j=j-1;
    }
  }
  if(one.length){
    if(count>one[0]){
      one[0]=count;
    }
  }else{
    one.push(count);
  }
  
}
return len-(one[0]+1);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}