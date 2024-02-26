// On importe mongoose
const mongoose = require('mongoose');
// On défini notre schéma de données
const recipeSchema = mongoose.Schema({
    name: {
        type: String,
    },
    ingredients: {
        type: [String],
    },
    instructions: {
        type: String,
    },
    timeToPrepare: {
        type: Number
    },
    cookingTime: {
        type: Number
    },
    level: {
        type: String,
    },
    category: {
        type: String,
    },
    picture: {
        type: String
    }
})

// Création du modèle de données. grace à la méthode model() de mongoose dans la base. Notre collection se nomera
// "recipes" et se basera sur recipeSchema pour valider les données.
const recipeModel = mongoose.model('recipes', recipeSchema);
// On exporte notre modèle de données pour qu'il soit disponible hors de ce fichier.
module.exports = recipeModel;