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

// Complete the anagram function below.
function anagram(s) {
  if(s.length%2!=1){
    var a=s.substr(0,s.length/2).split("");
    var len=a.length;
    var b=s.substr(s.length/2,s.length).split("");
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

 if(count!=0){
   return len-count;
 }else{
   return len;
 }


   
    
  }else{
    return -1;
  }
  
  
  
  }
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = anagram(s);

        ws.write(result + "\n");
    }

    ws.end();
}