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

// Complete the minimumDistances function below.
function minimumDistances(a) {
  var ar=a;
var one=[];
var result;
for(var  i=0;i<ar.length;i++){
  for(var j=i;j<ar.length-1;j++){
    
    if(ar[i]==ar[j+1]){
      result=i-(j+1);
      if(result<0){
        result=result*(-1);
      }
      
      one.push(result);
      break;
    }
  }
  
}
one.sort(function(a,b){
  return a-b;
});

if(one.length>0){
  return one[0];
}else{
  return -1;
}

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}