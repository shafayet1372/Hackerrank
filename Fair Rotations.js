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

// Complete the fairRations function below.

function fairRations(B) {
var ar=B;
var count=0;

if(ar.length==2){
  if(ar[0]%2==1 && ar[1]%2==0){
    return "NO";
  }
}
for(var i=0;i<ar.length-1;i++){
  
  if(ar[i]%2==1){
    ar[i]+=1;
    ar[i+1]+=1;
    count+=2;
  }
}
if((ar[ar.length-1]%2==1 && ar[ar.length-2]%2==0) ||(ar[ar.length-1]%2==0 && ar[ar.length-2]%2==1)){
  return "NO";
}else{
  return count;
}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const N = parseInt(readLine(), 10);

    const B = readLine().split(' ').map(BTemp => parseInt(BTemp, 10));

    let result = fairRations(B);

    ws.write(result + "\n");

    ws.end();
}