var express = require("express")
var app = express()
var PORT = process.env.PORT || 3001

app.use("/", express.static("public"));


app.get("/", function(req,res) {
  res.sendFile(__dirname + "/clock.html")
})
app.listen(PORT)
