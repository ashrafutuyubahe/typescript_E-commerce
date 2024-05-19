import express  from 'express';
const App= express();
import bodyParser from 'body-parser';
const PORT = 3000;
import Router from "./routes/userroutes";

App.use(bodyParser.json());

App.use('/users',Router)

App.listen(PORT, () => {
  console.log("the  server  is  running on  port 3000");
});
