const express= require('express');
const app = express();
const PORT = 3000;
 

app.get('/',(req:Request,res:Response) =>{
  console.log('hello');
  
})

app.post('/user',(req:Request,res:Response)=>{

  

})





app.listen(PORT, () => {
  console.log("the  server  is  running on  port 3000");
});
