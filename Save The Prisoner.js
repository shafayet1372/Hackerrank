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

// Complete the saveThePrisoner function below.





function saveThePrisoner(n, m, s) {


  var prisoner=n;
  var chocolate=m;
 
  var result;
  if(chocolate>prisoner){
    result=(prisoner-s)+1;
    result=chocolate-result;
    if(result<prisoner){
      
    }else{
      result=result%prisoner;
      if(result==0){
        result=prisoner;
      }
    }
    return result;
  
  }else{
   result=(chocolate+s)-1;
  if(result>prisoner){
    result=result%prisoner;
    if(result==0){
      result=prisoner;
    }
  }
  
  return result;
  
  }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nms = readLine().split(' ');

        const n = parseInt(nms[0], 10);

        const m = parseInt(nms[1], 10);

        const s = parseInt(nms[2], 10);

        let result = saveThePrisoner(n, m, s);

        ws.write(result + "\n");
    }

    ws.end();
}