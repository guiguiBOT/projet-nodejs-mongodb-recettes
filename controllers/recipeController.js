const recipeModel = require('../models/recipeModel')
const authorModel = require('../models/authorModel')
exports.postRecipe = async (req, res) => {
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthor })
        if (author) {
            const newRecipe = new recipeModel(req.body)
            newRecipe.validateSync();
            await newRecipe.save();
            let test = await authorModel.updateOne({ _id: req.params.idAuthor }, { $push: { recipes: newRecipe._id } })
            console.log(test);
            res.json("votre recette a bien été créée");
        } else {
            res.json("auteur non trouvé")
        }
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}
// route pour effacer une recette dans le tableau de recette de l'auteur
exports.deleteRecipe = async (req, res) => {
    try {
        const author = authorModel.findOne({ _id: req.params.idAuthor })
        if (author) {
            console.log(req.params.idRecipe);
            const deleteRecipe = await recipeModel.deleteOne({_id: req.params.idRecipe})
            let test = await authorModel.updateOne({ _id: req.params.idAuthor }, { $pull: { recipes: req.params.idRecipe } })
            res.json("votre recette a bien été supprimée");
        } else {
            res.json("auteur non trouvé")
        }
    } catch (error) {
        console.log(error);
        res.json(error.message);
    }
}

// exports.deleteRecipe = async (req, res) => {
//     try {
//         // const recipe = recipeModel.findOne({ _id: req.params.idRecipe })
//         const deleteRecipe = await recipeModel.delete({ _id: req.params.idRecipe }, { $pull: { recipe: deleteRecipe._id } })
//         deleteRecipe.validateSync();
//         await deleteRecipe.save();
//         res.json("recette supprimée");
//     } catch (error) {
//         console.log(error);
//         res.json(error.message);
//     }
// }

exports.getRecipe = async (req, res) => {
    try {
        const recipe = await recipeModel.find();
        res.json(recipe);
    } catch (error) {
        res.json(error);
    }
}
exports.getRecipeById = async (req, res) => {
    try {
        req.params.id;
        const recipe = await recipeModel.findOne({ _id: req.params.id });
        res.json(recipe);
    } catch (error) {
        res.json(error.message);
    }
}

// l'URI aura cette forme http://127.0.0.1:3000/recipe/iddel'entrée
exports.updateRecipe = async (req, res) => {
    try {
        const recipeUpdated = await recipeModel.updateOne({ _id: req.params.id }, req.body)
        res.json(recipeUpdated);
    } catch (error) {
        res.json(error.message);
    }
}
// l'URI aura cette forme http://127.0.0.1:3000/recipes?name=nomdelarecette
exports.getRecipesByValue = async (req, res) => {
    try {
        let recipes = null;
        if (req.query.name) {
            recipes = await recipeModel.find({ name: req.query.name })
        } else {
            recipes = await recipeModel.find();
        }
        res.json(recipes)
    } catch (error) {
        res.json(error);
    }
}

