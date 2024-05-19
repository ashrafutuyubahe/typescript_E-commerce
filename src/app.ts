import express  from 'express';
const App= express();
import bodyParser from 'body-parser';
const PORT = 3000;
import Router from "./routes/userroutes";
import userLogin  from "./routes/userlogin";




App.use(bodyParser.json());

App.use('/users',Router)
App.use('/users',userLogin)

App.listen(PORT, () => {
  console.log("the  server  is  running on  port 3000");
});
