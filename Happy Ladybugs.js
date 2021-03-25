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

// Complete the happyLadybugs function below.
function happyLadybugs(b) {

  var s=b;
  var rse=b;
  s=s.split("");
  var re=[];
  var count,res=0,brk=0;
  if(s.indexOf('_')==-1){
    
      
      for(var i=0;i<s.length;i++){
      
      
         if(re.length>0){
          if(re.indexOf(s[i])==-1){
           if(s[i]==s[i+1]){
            re.push(s[i]);
            re.push(s[i+1]);
           }else{
             res=1;
             break;
           }
           }
         }else{
          if(s[i]==s[i+1]){
            re.push(s[i]);
            re.push(s[i+1]);
           }else{
             res=1;
             break;
           }
         }
       
         
      }
      
      if(res==1){
        return "NO";
      }else{
        for(var i=0;i<re.length;i=i+2){
          if(i==re.length-2){
            break;
          }
          if(re[i]!=re[i+1]){
           res=1;
           i=i+1;
           
          }
         
        }
        if(res){
         return "NO";
        }
      }
      
      if(res==0){
        return "YES";
      }
     
   
  }else{
    for(var i=0;i<s.length;i++){
      if(s[i]=="_"){
        s.splice(i,1);
        i=-1;
      }
    }
    if(s.length>0){
      s.sort();
    for(var i=0;i<s.length;i++){
    
    
       if(re.length>0){
        if(re.indexOf(s[i])==-1){
         if(s[i]==s[i+1]){
          re.push(s[i]);
          re.push(s[i+1]);
         }else{
           res=1;
           break;
         }
         }
       }else{
        if(s[i]==s[i+1]){
          re.push(s[i]);
          re.push(s[i+1]);
         }else{
           res=1;
           break;
         }
       }
     
       
    }
    
    if(res==1){
      return "NO";
    }else{
      for(var i=0;i<re.length;i=i+2){
        if(i==re.length-2){
          break;
        }
        if(re[i]!=re[i+1]){
         res=1;
         i=i+1;
         
        }
       
      }
      if(res){
       return "NO";
      }
    }
    
    if(res==0){
      return "YES";
    }
    }else{
      return "YES";
    }
  }
  
  
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine(), 10);

        const b = readLine();

        let result = happyLadybugs(b);

        ws.write(result + "\n");
    }

    ws.end();
}