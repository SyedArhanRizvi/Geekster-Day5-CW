import express from "express";
import fs from "fs"
import jokesData from "./jokesData.json" assert { type: 'json' };

const rendomeJokes = jokesData;
const app = express();
const PORT = 3000;

app.get("/", (req, res)=>{
    const greeting = `
        <h1> Hello Brother, Welcome to our jokes world. If you want to read jokes so you can search this "api/jokes"</h1>
    `;
    res.send(greeting);
    
});

app.get("/api/jokes", (req, res)=>{
    // console.log(rendomeJokes);
    
    res.json(rendomeJokes);
});
app.get("/api/jokes:idx", (req, res)=>{
    const idx = req.params.idx;
    const joke = rendomeJokes.find((joke) => joke[idx] === idx);
    res.send(joke);
})




app.listen(PORT, ()=>{
    console.log("Your Server has successfully hosted on this server", PORT);
})