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

// Complete the makingAnagrams function below.
  function makingAnagrams(s1, s2) {
    var a=s1.split("");
    var len1=a.length;
    var b=s2.split("");
    var len2=b.length;
    var count=0;
    
  for(var i=0;i<b.length;i++){

    for(var j=0;j<a.length;j++){
       
      if(b[i]==a[j]){
        count++;
       a.splice(j,1);
       break;
      }
 
    }
    
  }
  return (len1-count)+(len2-count);

  }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = makingAnagrams(s1, s2);

    ws.write(result + "\n");

    ws.end();
}