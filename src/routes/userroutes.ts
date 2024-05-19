import express, { Request, Response } from "express";
const Router = express.Router();

import dbconnnection from "../dbconnecton";
import { Users } from "../models/userModel";

Router.post("/adduser", async (req: Request, res: Response) => {
  try {
    
    const { username, useremail, userpassword } = req.body;

    const newUser: Users = {        
        useremail,
        username,
        userpassword,
      
    };



    // const checkUserExist = await dbconnnection.query(
    //   "SELECT * FROM Users where useremail=$1",
    //   [newUser.useremail]
    // );
    // if (checkUserExist) {
    //   return res.status(401).send("user  already registered");
    // }

    const insertUser = await dbconnnection.query(
        "INSERT INTO Users(username,useremail,userpassword)  Values ($1,$2,$3) RETURNING *",
        [newUser.username, newUser.useremail, newUser.userpassword]
      );
      
      if (insertUser.rows.length > 0) {
        const insertedUser = insertUser.rows[0];
        const userId = insertedUser.id;
        console.log(insertUser);
        console.log(userId)
        res.status(201).json({ message: 'User created successfully', user: insertedUser });
      } else {
        console.log('Failed to insert user in database');
        res.status(500).json({ error: 'Failed to insert user in database' });
      }
      
  } catch (err) {
    console.log(err);
    console.error('Error creating user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export  default Router
