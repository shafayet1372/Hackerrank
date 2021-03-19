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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
  
var count;
if(n==p){
  count=0;
}else if(n%2==0){
  count=1;
  for(var i=n-1;i>=p;i--){
    if(i==p){
      break;
    }
    if(i%2==0){
      count++;
    }
  }
}else if(n-1==p){
  count=0;
}else if(n%2==1){
    var count=0;
for(var i=n;i>=p;i--){
    if(i==p){
        break;
    }
    if(i%2==0){
        count++;
    }
}
}
  var result=0;
  for(var i=1;i<=p;i++){
    if(i==p){
      break;
    }
    if(i%2==1){
      result++;
    }
  }
if(result==count){
  return result;
}else if(result<count){
  return result;
}else {
  return count;
}

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}