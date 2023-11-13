const express = require('express')

let Utilisateur = require('../modules/utilisateur_module')
let Admin = require('../modules/admin_module')
let Medcin = require('../modules/medcin_module')
let Patient = require('../modules/patient_module')


const router = express.Router()


router.get('/', (req, res) => {
    Utilisateur.find()
        .then(utilisateur => res.status(200).json(utilisateur))
        .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
})

router.post('/add', (req, res) => {
    let nom = req.body.nom
    let prenom = req.body.prenom
    let genre = req.body.genre
    let date_de_Naissance = req.body.date_de_Naissance
    let email = req.body.email
    let mot_de_Passe = req.body.mot_de_Passe
    let role = req.body.role

    Utilisateur.insertMany({
        nom: nom,
        prenom: prenom,
        genre: genre,
        date_de_Naissance: date_de_Naissance,
        email: email,
        mot_de_Passe: mot_de_Passe,
        role: role
    })
        .then(() => {
            Utilisateur.findOne(
                {
                    nom: nom,
                    prenom: prenom,
                    genre: genre,
                    date_de_Naissance: date_de_Naissance,
                    email: email,
                    mot_de_Passe: mot_de_Passe,
                    role: role
                })
                .then(result => {
                    switch (result.role) {
                        case 'admin':

                            break;

                        case 'patien':

                            break;

                        case 'medcin':

                            break;
                    }
                })

            res.status(200).json('Utilisateur Added!')
        })
        .catch(err => res.status(400).json('Error in utilisateur-route.js: ' + err))


})

module.exports = router

