const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
const QuizModel = require("./quizdata/quiz.model");
const PORT = 8010;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).send("hello World");
});


app.get("/quizdata", async(req, res) => {
        const data = await QuizModel.find()
        res.send(data)
  try{
  
  } catch (e) {}
});

app.get("/category", async(req, res) => {
        const data = await QuizModel.find()
        res.send(data)
  try{
  
  } catch (e) {}
});






app.listen(PORT, async () => {
  await connect()
  console.log(`server started on port ${PORT}`);
});
