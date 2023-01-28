const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
const QuizModel = require("./quizdata/quiz.model");
const PORT = 8010;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).send("Working Fine");
});


app.get("/quizdata", async(req, res) => {
        const data = await QuizModel.find()
        res.send(data)
  try{
  } catch (e) {
    return res.status(500).send(e.message)
  }
});


  app.get("/getquestion",async(req,res)=>{
   try{
    const {category,question,difficulty} = req.query
    const data =await QuizModel.find({difficulty:difficulty,category:category}).skip(question-1).limit(1);
   return res.send(data)
   }catch(e){
     return res.status(500).send(e.message)
   }
})


app.listen(PORT, async () => {
  await connect()
  console.log(`server started on port ${PORT}`);
});
