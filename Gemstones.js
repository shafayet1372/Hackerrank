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

// Complete the gemstones function below.

function gemstones(arr) {
var ar=arr;
var s1=ar[0].split("");
var one=[];
s1 = [...new Set(s1)];
one=s1;
ar[0]=s1.join("");


var result=[];
var count,brk;
for(var i=0;i<one.length;i++){
   count=0;
   brk=0;
   for(var j=0;j<ar.length;j++){
     
     for(var k=0;k<ar[j].length;k++){
       var s2=ar[j].split("");
           s2=[...new Set(s2)];
          ar[j]=s2.join("");
      if(one[i]==ar[j][k]){
       count++;
        
        if(count==ar.length){
          brk=1;
          result.push(one[i]);
          count=0;
          break;
          
        }
       
      }
      
     }
     if(brk==1){
       break;
     }
   }

}
return result.length;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = [];

    for (let i = 0; i < n; i++) {
        const arrItem = readLine();
        arr.push(arrItem);
    }

    let result = gemstones(arr);

    ws.write(result + "\n");

    ws.end();
}