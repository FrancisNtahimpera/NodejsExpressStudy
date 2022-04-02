// import

import Express from "express"; 


const app=Express();
const port = 3000;


// get,put, post , delete

app.get("/", (req,res)=>{
    res.send("hello world");
} )

app.listen(port, () => console.log("listen on port " + port))


