const express=require('express');
const app=express();
const db=require('./db');
const Menu=require('./models/Menu');
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

const bodyParser=require('body-parser');
app.use(bodyParser.json());
const Person=require('./models/Person');


app.get('/',(req,res)=>{
    res.send("Welcome to the site");
})
app.get('/idli',(req,res)=>{
    res.send("Welcome to the site we serve very tasty idli");
})
app.get('/dosa',(req,res)=>{
    res.send("Welcome to the site we serve very tasty dosa");
})









app.listen(3000,()=>{
    console.log("Port 3000 is enabled");
})