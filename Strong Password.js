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

// Complete the minimumNumber function below.




function minimumNumber(n, password) {

  var obj={
    "lower":0,
    "upper":0,
    "digit":0,
    "special":0
    }
  var s=password;
  for(var i=0;i<s.length;i++){
    
    if(s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90){
      obj['upper']++;
    }else if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122){
      obj['lower']++;
    }else if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
      obj['digit']++;
    }else if((s.charCodeAt(i)>=32 && s.charCodeAt(i)<=47) ||(s.charCodeAt(i)>=58 && s.charCodeAt(i)<=54) ||(s.charCodeAt(i)>=91 && s.charCodeAt(i)<=96)||(s.charCodeAt(i)>=123 && s.charCodeAt(i)<=126))
    {
      obj['special']++;
    }
    
  }
  var ar=[];
  for(var ss in obj){
    ar.push(obj[ss]);
  }
  var ars=ar.filter(function(el){
    return el==0;
  });
  var total;
  console.log(ars);
  if(ars.length<=0){
  total=6-s.length;
  if(total<0){
    return 0;
  }else{
    return total;
  }
  }else{
    if(s.length<6){
      total=s.length+ars.length;
      if(total<6){
        return (6-total)+ars.length;
      }else{
        return ars.length;
      }
    }else{
      return ars.length;
    }
  }

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}