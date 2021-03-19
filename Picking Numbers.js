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

/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */


function pickingNumbers(a) {


var ar=a.sort();
console.log(ar);
var one;
  var results=[];
  
  for(var i=0;i<ar.length;i++){
    one=[];
   
    for(var j=i;j<ar.length-1;j++){
     var result=ar[i]-ar[j+1];
      
     if(result<0){
       result=result*(-1);
  
     }
   
     if(result<=1){
       if(one.length>0){
        var result1=one[one.length-1]-ar[j+1];
      
        if(result1<0){
          result1=result1*(-1);
        }
        
        
        if(result1<=1){
          one.push(ar[j+1]);
        }else{
          one.splice(one.length-1,1);
        
          for(var k=0;k<one.length;k++){
            var result3=one[k]-ar[j+1];
            if(result3<0){
              result3=result3*(-1);
            }
            if(result3>1){
              var brk=1;
              break;
            }
          }
          if(brk==1){
            break;
          }
            
         
         
        }
       }else{
        
         one.push(ar[i]);
         one.push(ar[j+1]);
       }
      
     }
  
  
    }
    console.log(one);  
   var len=one.length;

    if(results.length>0){
      if(len>results[0]){
        results[0]=len;
      
      }
    }else{
      results[0]=len;
    
    }
  
  }
  return results[0];
  

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}