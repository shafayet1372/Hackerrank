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

// Complete the beautifulDays function below.
function beautifulDays(i,j,k) {
  var digit;
  var ar1=[];
  var ar2=[];
   var digit, result = 0,total,count=0,z;
  for(var m=i;m<=j;m++){
    ar1.push(m);
  }
  for(var n=0;n<ar1.length;n++){
     
    result=0;
    z=ar1[n];
    while( z ){
        digit = z % 10  ;
        result = (result * 10) + digit  ;
        z = z/10|0  ;
        
    }  
  
  ar2.push(result);
  }
     
  for(var p=0;p<ar1.length;p++){
    total=ar1[p]-ar2[p];
    if(total<0){
      total=total*(-1);
    }
    total=((total/k)*10)%10;
    if(total ==0){
      count++;
    }
    
  }
    
  return count;
    
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}
