'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the missingNumbers function below.



function missingNumbers(arr, brr) {

  arr.sort(function(a,b){
    return a-b;
  })
  brr.sort(function(a,b){
    return a-b;
  })

  var newar=[];
  var brk;
  for(var i=0;i<brr.length;i++){
     brk=0;
    for(var j=0;j<1;j++){
      if(brr[i]==arr[j]){
        brr.splice(i,1);
        arr.splice(j,1);
        i=i-1;
         
        
      }else{
        brk=1;
       
      }
      
    }
    if(brk==1){
      newar.push(brr[i]);
     console.log(newar);
    }
      
  } 
  var unique = [...new Set(newar)];
  return unique;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m = parseInt(readLine(), 10);

    const brr = readLine().split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}