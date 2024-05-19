import express, { Request, Response } from "express";
const Router = express.Router();

import dbconnnection from "../dbconnecton";
import { Users } from "../models/userModel";
import { trace } from "console";

Router.post("/userlogin", async (req: Request, res: Response) => {
  try {
    const { useremail, userpassword } = req.body;

    const checkUserexists = await dbconnnection.query(
      "SELECT userpassword from users where useremail=$1",
      [useremail]
    );

    if (checkUserexists.rows.length > 0) {
      const retrievedPassword = checkUserexists.rows[0].userpassword;
      console.log(retrievedPassword);
      console.log(userpassword);
       
      if (retrievedPassword == userpassword) {
        return res
          .status(200)
          .json({
            message: `you are  logged in and your credentials are, name:${retrievedPassword}  and  email is ${useremail} `,
          });
      }
      return   res.status(401).send('  incorrect  password') 
    }

    res.status(401).send("user email provided does  not  exists");
  } catch (err) {
    console.log(err);
    console.error("Error i logging :", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default Router;
