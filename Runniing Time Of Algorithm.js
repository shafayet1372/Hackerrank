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

// Complete the runningTime function below.
function runningTime(arr) {

var ar=arr;
var count=0;
for(var i=0;i<ar.length;i++){
  
  for(var j=i;j<ar.length-1;j++){
    
    if(ar[i]>ar[j+1]){
      var swap=ar[i];
      ar[i]=ar[j+1];
      ar[j+1]=swap;
      count++;
    }
  }

}
if(count==1){
    return count+1;
}else{
    return count;
}
  
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = runningTime(arr);

    ws.write(result + "\n");

    ws.end();
}