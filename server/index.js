import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./config/db.js";
import airoutes from "./routes/ai.route.js";
import multer from "multer";
dotenv.config();
const PORT = 4000;
const app = express();

dbConnect();

app.use(express.json());


app.use("/ai", airoutes);
// app.post("/test",(req,res)=>{
//   const {file} = req.body
//   console.log(file);
  
// })
app.get("/", (req, res) => {
  res.send("Server ready to roll");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT} `);
});
