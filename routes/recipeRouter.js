// importation de notre modèle d'utilisateur
const recipeModel = require("../models/recipeModel");
// Importation et execution de la méthode express Router()
// c'est grâce à celle-ci que nous pourront définir nos routes par la suite.
const recipeRouter = require("express").Router();
const recipeController = require("../controllers/recipeController");

// Nos routes ici
// Route pour ajouter une recette, la logique est dans le fichier recipeController et on l'importe ici
// on fait la meme chose pour toutes les routes.
recipeRouter.post('/authors/:idAuthor/recipes', recipeController.postRecipe)


// Route pour récupérer toutes les entrées de la db
recipeRouter.get('/recipes', recipeController.getRecipe)

// Route pour récupérer une entrée par rapport à son id
recipeRouter.get('/recipe/:id', recipeController.getRecipeById)

// Route pour supprimer un utilisateur
recipeRouter.delete('/authors/:idAuthor/recipes/:idRecipe', recipeController.deleteRecipe)

// Route pour modifier une entrée.
recipeRouter.put('/recipe/:id', recipeController.updateRecipe)

//  Route pour recupérer toutes les entrées qui ont une valeur particulière
// l'URI aura cette forme http://127.0.0.1:3000/recipes?name=nomdelarecette
recipeRouter.get('/recipes', recipeController.getRecipesByValue)




// Exportation de notre recipeRouter
module.exports = recipeRouter;