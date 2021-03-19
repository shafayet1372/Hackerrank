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

// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
var ar=[];
  var newar=[];
  var x=word;
  for(var i=0;i<x.length;i++){
    ar.push(x.charAt(i).charCodeAt()-97);
  }
 for(var i=0;i<h.length;i++){
  for(var j=0;j<ar.length;j++){
  if(i==ar[j]){
    newar.push(h[i]);
  }
 }
 }
newar.sort(function(a,b){
  return a-b;
})

return newar[newar.length-1]*x.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    let result = designerPdfViewer(h, word);

    ws.write(result + "\n");

    ws.end();
}