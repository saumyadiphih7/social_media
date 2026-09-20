import express from "express"
import  connectDB  from "./config/dbConfig.js"


const PORT = 5000;

const app = express();



connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!")
});

app.get("/about", (req, res) => { 
  res.send("Its a about page")
})

app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}`)
})