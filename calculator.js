const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/bmicalculator", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", (req, res) => {
  var height = req.body.height
  var weight = req.body.weight

  var BMI = 703 * (weight / (height * height))
  BMI = BMI.toFixed(1)
  res.send("Your BMI is " + BMI)
})

app.listen(3000, () => {
  console.log("Example app listening on port 3000")
})