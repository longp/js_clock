var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000


app.get("/", function(req,res) {
  res.sendFile("index.html")
})
app.listen(PORT)