'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {

var result,len,first,second,result1,ar=[];
for(var i=p ;i<=q ;i++){
  result=0;
  result=i*i;
  len=result.toString().split('').length;
 
  if(len<=2){
    first=Math.round(result/10);
    second=result%10;
  }else if(len>2 && len<=4){
    first=Math.round(result/100);
    second=result%100;
  }
  else if(len>4 && len<=6){
    first=Math.round(result/1000);
    second=result%1000;
  }
  else if(len>6 && len<=8){
    
   
     first=Math.round(result/10000);
    second=result%10000;
    
  }else if(len>8 && len<=10){
    
     first=Math.round(result/100000);
    second=result%100000;
    
  }
   

  result1=first+second;
 
if(i==result1){
  ar.push(i);
  
}
 
}
  var str="";
 if(ar.length>0){
     for(var i=0;i<ar.length;i++){
   str=str+ar[i]+" ";
 }
  console.log(str);
 }else{
     console.log("INVALID RANGE");
 }
}
function main() {
    const p = parseInt(readLine(), 10);

    const q = parseInt(readLine(), 10);

    kaprekarNumbers(p, q);
}