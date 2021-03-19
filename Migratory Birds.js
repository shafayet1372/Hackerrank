'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
var type={
  one:0,
  two:0,
  three:0,
  four:0,
  five:0
}
var newtype=[];
var sortedtype=[];
  var selectedone;
for(var i=0;i<arr.length;i++){
  if(arr[i]==1){
    type["one"]++;
  }
  if(arr[i]==2){
    type["two"]++;
  }
  if(arr[i]==3){
    type["three"]++;
  }
  if(arr[i]==4){
    type["four"]++;
  }
  if(arr[i]==5){
    type["five"]++;
  }
  
}
  for(var k in type){
    newtype.push(type[k]);
    sortedtype.push(type[k]);
  } 
  sortedtype.sort(function(a,b){
    return a-b;
  });
   var bigone=sortedtype[sortedtype.length-1];
 for(var i=0;i<newtype.length;i++){
   if(newtype[i]==bigone){
     selectedone=i;
     break;
   }
 }
 
  return selectedone+1;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}