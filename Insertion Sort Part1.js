'use strict';

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

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
var cmp=arr[arr.length-1];
var z;
arr.splice(arr.length-1,1);var m=arr.length-1;var found;var newar=[];
var str;
 
 
for(var i=m+1;i>=0 ;i--){
  str="";
   if(i==0 && arr[0]>cmp){
     arr[0]=cmp;
   }
    for(var j=m;j>=0;j--){
    
  if(cmp<arr[j]){
         arr[j+1]=arr[j];   
    
         break ;    
  }else if(cmp>arr[j]){
         arr[j+1]=cmp;
     m--;
       found=1; break;  } }
    m--;
    for(var j=0;j<arr.length;j++){
     str=str+arr[j]+" ";   
    }
 console.log(str);
  if(found){
    break;
  }
}
   
}
function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    insertionSort1(n, arr);
}