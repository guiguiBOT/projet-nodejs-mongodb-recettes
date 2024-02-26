const authorModel = require('../models/authorModel')

exports.getAuthors = async(req,res)=>{
    try {
        const authors = await authorModel.find()
        res.json(authors)
    } catch (error) {
        res.json(error.message)
    }
}

exports.getAuthorById = async(req,res)=>{
    try {
        const author = await authorModel.findOne({_id: req.params.id}).populate("recipes")
        res.json(author)
    } catch (error) {
        res.json(error.message)
    }
}

exports.postAuthor = async(req,res)=>{
    try {
        const author = new authorModel(req.body)
        author.validateSync()
        await author.save()
        res.json("l'auteur a bien été créé")
    } catch (error) {
        res.json(error.message)
    }
}

