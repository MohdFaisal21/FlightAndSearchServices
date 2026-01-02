const express = require("express");
const {PORT} = require("./config/serverConfig");

const ApiRoutes = require("./routes");

const setupAndStartServer = async ()=>{
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use("/api", ApiRoutes);

    // app.patch("/test/:id", function(req, res){
    //     console.log(req.params.id);
    //     console.log(req.body);
    //     res.send(`patch request works perfectly`);
    // });

    app.listen(PORT, function(){
        console.log(`server listening on port ${PORT}`);
    });
}

setupAndStartServer();