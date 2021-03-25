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

function pangrams(s) {
 var x=s.toUpperCase();
  var total=26;
  var newar=[];
  var an_ar=[];
  
  for(var i=0;i<x.length;i++){
    if(((x.charCodeAt(i)>=97) && (x.charCodeAt(i) <=122)) || ((x.charCodeAt(i)>=65) && (x.charCodeAt(i) <=90))){
        newar.push(x.charCodeAt(i));
          an_ar.push(x.charCodeAt(i));
    }
  }
 var unique = [...new Set(newar)];

 if(total==unique.length){
    return "pangram";
  }else{
    return "not pangram";
  }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}