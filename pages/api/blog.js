import * as fs from 'fs';
export default async function handler(req,res){
   let data=await fs.promises.readdir("BlogData")
   let myfile;
   let allfile=[];
   for(let i=0;i<data.length;i++){
    const item=data[i];
    myfile=await fs.promises.readFile(("BlogData/"+item),"utf8");
    
    allfile.push(JSON.parse(myfile));
    console.log(allfile)
   }
res.status(200).json(allfile)
}