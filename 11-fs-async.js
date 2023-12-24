const { readFile, writeFile } = require("fs");
console.log("start");
readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
      console.log(err);
      return;
    }
    const first =res;
    readFile('./content/second.txt','utf8',(err,res2)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=res2;

        writeFile('./content/res-async.txt',`Here is the result ${first},${second}`,(err,res)=>{
            if(err){
                console.log(err);
                return ;
            }
            console.log('done with this');
        });
    })
  })

  console.log("starting next");