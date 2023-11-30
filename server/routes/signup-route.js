const express = require('express')
const bcrypt = require('bcrypt')
const collectionsModule = require('../modules/Collections_module')
const Utilisateur = collectionsModule.Utilisateur


const router = express.Router()

router.post('/', (req, res) => {
    let nom = req.body.nom
    let prenom = req.body.prenom
    let genre = req.body.genre
    let date_de_Naissance = req.body.date_de_Naissance
    let email = req.body.email
    let mot_de_Passe = req.body.mot_de_Passe
    let role = req.body.role

    Utilisateur.create({
        nom: nom,
        prenom: prenom,
        genre: genre,
        date_de_Naissance: date_de_Naissance,
        email: email,
        mot_de_Passe: mot_de_Passe,
        role: role
    })
        .then((result) => {
            switch (result.role) {
                case 'medecin':
                    Medecin.insertMany({
                        ID_Utilisateur: result._id,
                    }).then(() => console.log('Medecin Added!'))
                        .catch(err => console.log('Error in utilisateur-route.js: ' + err))
                    break;
                case 'admin':
                    Admin.insertMany({
                        ID_Utilisateur: result._id,
                    }).then(() => console.log('admin Added!'))
                        .catch(err => console.log('Error in utilisateur-route.js: ' + err))
                    break;
                case 'patient':
                    Patient.insertMany({
                        ID_Utilisateur: result._id,
                    }).then(() => console.log('Patient Added!'))
                        .catch(err => console.log('Error in utilisateur-route.js: ' + err))
                    break;
            }

            res.status(200).json('Utilisateur Added!')
        })
        .catch(err => res.status(400).json('Error in utilisateur-route.js: ' + err))
})



module.exports = router