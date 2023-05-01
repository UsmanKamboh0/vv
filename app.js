const express =require("express")
const path = require("path");

const app=express();
app.use(express.json())
const product = require("./Routes/Products");
app.use("/api/v1",product)
app.use(express.static(path.join(__dirname, 'build')));


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


module.exports=app