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

// Complete the jumpingOnClouds function below.

function jumpingOnClouds(c) {
var count=0;
var ar=c;

for(var i=0;i<ar.length;i++){
  if(ar.length==1){
    break;
  }
  for(var j=0;j<1;j++){
    if((ar[i]==0) && (ar[i+1]==1)){
      ar.splice(ar[i],2);
      i=i-1;
      count++;
    }else if((ar[i]==0) && (ar[i]==0) && ar.length==2){
         count++;
         ar.splice(ar[i],2);
    }
    
    else if((ar[i]==0) && (ar[i]==0)){
      if(ar[i+2]==0){
        ar.splice(ar[i],2);
        i=i-1;
        count++;
      }else if(ar[i+2]==1){
        ar.splice(ar[i],1);
        count++;
        i=i-1;
        
      }
    }
  }
}
  return count;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
 