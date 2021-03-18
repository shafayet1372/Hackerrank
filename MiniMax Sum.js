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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
	
var ar=arr.sort();
var result=[];
var sum;
var ar1=[];
ar1.push(ar[0]);
ar1.push(ar[ar.length -1]);
for(var i=1;i>=0;i--){
sum=0;
for(var j=0;j<ar.length ;j++){
if(ar[j]!=ar1[i]){
sum=sum+ar[j];
		 
}else if(ar[j+1]==ar1[i]){
sum=sum+ar[j];
		 
}
		
}
result.push (sum);
	
}
console.log(result[0]+" "+result[1]);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}