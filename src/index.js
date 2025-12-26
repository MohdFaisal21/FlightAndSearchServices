const express = require("express");
const app = express();

const {PORT} = require("./config/serverConfig");
app.listen(PORT, function(){
    console.log(`server listening on port ${PORT}`);
});

app.get("/", function(req, res){
    res.send("Home Page :)");
});