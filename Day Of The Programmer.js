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

// Complete the dayOfProgrammer function below.




function dayOfProgrammer(year) {
  var sum=0;
 var days;
  var months=[31,28,31,30,31,30,31,31,30,31,30,31];
 if(year>=1700 && year<=1917){
   if(year%4==0){
     months[1]=29;
   }
   
}
  else{
  if(year%4==0){
  if(year%400==0 || year%100!=0 ){
     months[1]=29;
 
  }
  }
}

  for(var i=0;i<8;i++){
     
     
      
     sum=sum+months[i];
       
         
  }
  if(year==1918){
    days=256+13-sum;
  }else{
     days=256-sum;
  }
 
  return (days+"."+"09"+"."+year);

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}