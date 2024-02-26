const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "le nom d'auteur est requis"]
    },
    recipes: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "recipes"
            }
    ]
});

const authorModel = mongoose.model('authors', authorSchema);
module.exports = authorModel;