import { Router } from "express";

const router = Router();

const users = [
  {
    name: "ashrafu",
    age: 23,
  },
  {
    name: "hackim",
    age: 32,
  }
  

];

  export  default function DisplayUser(){
    router.get("/users", (req, res) => {
        res.json({users});
      });
      
  }
