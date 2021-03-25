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

// Complete the closestNumbers function below.


function closestNumbers(arr) {
 
  arr.sort(function(a,b){
    return b-a;
  });

  var numberar=[];
  var result,low;
  var resultar=[];
 
  for(var i=arr.length-1;i>0;i--){
     
    for(var j=i;j>i-1;j--){
        result=arr[i]-arr[j-1];
       if(result<0){
         result=result*(-1);
       }
       numberar.push(result);
     
    }
   
  }
  low=numberar.sort(function(a,b){
    return a-b;
  })[0];
  for(var i=arr.length-1;i>0;i--){
  
    for(var j=i;j>i-1;j--){
        result=arr[i]-arr[j-1];
       if(result<0){
         result=result*(-1);
       }
       if(result==low){
         resultar.push(arr[i]);
         resultar.push(arr[j-1]);
       }
    }
   
  }
    
return resultar;
 

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = closestNumbers(arr);

    ws.write(result.join(" ") + "\n");

    ws.end();
}