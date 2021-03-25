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

function caesarCipher(s, k) {



var str="";
for(var i=0;i<s.length;i++){
 
  if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122){
    var count=s.charCodeAt(i);
    for(var j=0;j<k;j++){
      
      if(count==122){
        count=96;
      }
      count++;
     
    }
   str=str+String.fromCharCode(count);
  }else if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
     var count=s.charCodeAt(i);
    for(var j=0;j<k;j++){
      
      if(count==90){
        count=64;
      }
      count++;
     
    }
   str=str+String.fromCharCode(count);
  }else{
    str=str+s[i];
  }
  
 
}
 return str;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    const k = parseInt(readLine(), 10);

    let result = caesarCipher(s, k);

    ws.write(result + "\n");

    ws.end();
}