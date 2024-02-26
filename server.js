//  On commence par npm init et on renseigne les champs demandés
// on installe express et mongoose avec la commande npm i express et npm i mongoose
//  le dossier nodemodule est créé.

// On importe la librairie express
const express = require('express');
// on importe la librairie mongoose
const mongoose = require('mongoose');
const recipeModel = require("./models/recipeModel")
// On importe le router crée dans recipeRouter.js
const recipeRouter = require("./routes/recipeRouter")
// On importe le router crée dans authorRouter
const authorRouter = require('./routes/authorRouter')
// On défini le port d'écoute du serveur
const port = 3000;
// on rentre l'uri de la base de donnée locale
const db = "mongodb://localhost:207017"
// On démarre une instance d'express
const app = express();
// Nous demandons ici a express d'analyser nos requetes json
app.use(express.json())
// Nous demandons ici a express d'utiliser notre recipeRouter, les routes définies dans notre controller seront donc dispo.
app.use(recipeRouter);
// Nous demandons ici a express d'utiliser notre authorrouter, les routes definies dans notres controller seront dispo.
app.use(authorRouter);
// app.listen est une méthode d'express qui permet de spécifier un port d'écoute pour notre application en premier paramètre
// en deuxième paramètre elle prend une fonction de callback qui a pour but d'afficher une erreur si il y en a une,
// sinon on affiche un message de réussite.
app.listen(port,(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connecté au serveur');
    }
})

// on connecte mongoose à notre base de données
mongoose.connect('mongodb://127.0.0.1:27017/apirecipe');

