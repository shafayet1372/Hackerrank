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

// Complete the acmTeam function below.
function acmTeam(topic) {
var x=topic;
var count=0;
var ar=[];
for(var i=0;i<x.length-1;i++){
    
    for(var j =i+1;j<x.length ;j++){
        var count=0;
          for(var k=0;k<x[i].length ;k++){
              if(x[i][k]=="1"  || x[j][k]=="1"){
                  count++;
              }
          }
          ar.push(count);
          
    }
}
var result=[];
var count1=0;
var big=ar.sort()[ar.length-1];
for(var i=0;i<ar.length;i++){
  if(ar[i]==big){
    count1++;
  }
}
result.push(big);
result.push(count1);
return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    let result = acmTeam(topic);

    ws.write(result.join("\n") + "\n");

    ws.end();
}