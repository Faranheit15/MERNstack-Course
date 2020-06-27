const express=require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (res, req)=> {
    console.log(req.query);
    res.send("getting root");
});

app.listen(3000);