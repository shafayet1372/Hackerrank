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


function weightedUniformStrings(s, queries) {

  var ne=[];
  var re=0;
  var x;

  for(var i=0;i<s.length ;i++){
    if(x==(s.charCodeAt(i)-96)){
      re=re+ne[ne.length-1];
      
      ne.push(re);
      re=s.charCodeAt(i)-96;
    }else{
      ne.push (s.charCodeAt(i)-96);
      re=s.charCodeAt(i)-96;
    }
    x=s.charCodeAt(i)-96;
  }
var result=[];
  for(var i=0;i<queries.length ;i++){
    if(ne.indexOf(queries[i])>=0){
      result.push("Yes");
    }else {
      result.push("No");
    }
  }
  return result;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = weightedUniformStrings(s, queries);

    ws.write(result.join("\n") + "\n");

    ws.end();
}