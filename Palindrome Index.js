

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

function palindromeIndex(s) {
	
  if(s==s.split("").reverse().join("")){
		return -1;
	}else{
		for(var i=0, j=s.length-1;i<s.length,j>=0;i++,j--){
	if(s[i]!=s[j]){
		if(s[i+1]==s[j] && s[i+2]==s[j-1]){
			i=i;
		}else{
			i=j;
		}
		break;
	}
	
}
return i;
}
  }
  
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = palindromeIndex(s);

        ws.write(result + "\n");
    }

    ws.end();
}