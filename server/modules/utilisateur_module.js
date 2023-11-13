const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UtilisateurSchema = new Schema({

    nom: {
        type: String,
        required: true,
        trim: true,
    },
    prenom: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        require: true,
        trim: true
    },
    date_de_Naissance: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    mot_de_Passe: {
        type: String,
        require: true,
        trim: true
    },
    role: {
        type: String,
        require: true,
    }
},
    {
        timestamps: true
    }
)

const Utilisateur = mongoose.model('Utilisateur', UtilisateurSchema)

module.exports = Utilisateur