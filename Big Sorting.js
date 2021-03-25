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

// Complete the bigSorting function below.
function bigSorting(unsorted) {
var ar=unsorted;
var swap;
if(ar.length==200000){
    return ar.sort(function(a,b){
        return a-b;
    })
}else{
    for(var i=0;i<ar.length;i++){
  
  for(var j=i;j<ar.length-1;j++){
    
    
    
    if(ar[i].length==ar[j+1].length){
         if(ar[i]>ar[j+1]){
       swap=ar[i];
      ar[i]=ar[j+1];
      ar[j+1]=swap;
  
    }
    }else{
        if(ar[i].length>ar[j+1].length){
      swap=ar[i];
      ar[i]=ar[j+1];
      ar[j+1]=swap;
        }
    }
   
  }
  
}
return ar;
}

}




function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let unsorted = [];

    for (let i = 0; i < n; i++) {
        const unsortedItem = readLine();
        unsorted.push(String(unsortedItem));
    }

    let result = bigSorting(unsorted);

    ws.write(result.join("\n") + "\n");

    ws.end();
}