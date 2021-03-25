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

// Complete the funnyString function below.

function funnyString(s) {
  
  var rev=s.split("").reverse().join("");
  var ar=[];
  var result;
  var res=0;
  
  for(var i=0;i<2;i++){
  
   for(var j=0;j<s.length-1;j++){
       
     if(ar.length==s.length-1){
      result=rev.charCodeAt(j)-rev.charCodeAt(j+1);
      if(result<0){
        result=result*(-1);
      }
      if(ar[j]!=result){
        res=1;
        console.log(2);
        break;
      }
     }else{
      result=s.charCodeAt(j)-s.charCodeAt(j+1);
      if(result<0){
        result=result*(-1);
      }
      console.log(result);
       ar.push(result);
     }
  
   } 
   
  }
  
  if(res==1){
    return "Not Funny";
  }else{
    return "Funny";
  }
  

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}