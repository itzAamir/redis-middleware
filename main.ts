const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req:any,res:any) => {
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log(`server started at PORT: ${PORT}`)
})