const dotenv = require('dotenv').config();
//console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_NAME);

//crud
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

const {accountTypes, clients, accounts, transactions, transactions_types} = require('./models');

app.use(express.urlencoded({extended: false}));

//read
app.get("/account_types", async (req,res) => {
    let result = await accountTypes.findAll({include: [{model: accounts}]});
    res.send(console.log(JSON.stringify(result.map(accountT => accountT.get({plain: true})))));
    //res.render("account_types", {accountTypes: result});
});

app.get("/account", async (req,res) => {
    let result = await accounts.findAll({include: [{model: accountTypes}, {model: clients}, {model: transactions}]});
    res.send(JSON.stringify(result));
    //res.render("account", {account: result});
});

app.get("/clients", async (req,res) => {
    let result = await clients.findAll({include: [{model: accounts}]});
    //let result = await account.findAll({raw: true, include: ["clients"], nest: true});
    console.log(JSON.stringify(result.map(client => client.get({plain: true}))));
    res.render("clients");
});

app.get("/transactions", async (req,res) => {
    let result = await transactions.findAll({include: [{model: accounts}]});
    res.send(console.log(JSON.stringify(result.map(tran => tran.get({plain: true})))));
    //res.render("account_types", {accountTypes: result});
});

app.get("/transactions_types", async (req,res) => {
    let result = await transactions_types.findAll({include: [{model: transactions}]});
    res.send(JSON.stringify(result));
    //res.render("account", {account: result});
});

/*app.get("/accountTypes", async (req,res) => {
    let result = await accountTypes.findAll({raw: true});
    console.log(result);
    res.send("Tipos de cuenta");
});*/

//create
app.post("/account_types", async (req, res) => {
    const {name, description, create_at, update_at} = req.body
    try{
        console.log(req.body);
        let result = await accountTypes.create({name, description});
        console.log(result);
        res.send("se ha agregado un tipo de cuenta");
    } catch(error) {
        console.log(error);
        res.status(400).send("no se ha podido agregar");
    }    
});


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log("escuchando puerto", PORT);
});