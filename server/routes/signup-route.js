const express = require('express')
const bcrypt = require('bcrypt')
const collectionsModule = require('../modules/Collections_module')
const Utilisateur = collectionsModule.Utilisateur


const router = express.Router()

router.post('/', async (req, res) => {
    const nom = req.body.nom
    const prenom = req.body.prenom
    const genre = req.body.genre
    const date_de_Naissance = req.body.date_de_Naissance
    const email = req.body.email
    const mot_de_Passe = req.body.mot_de_Passe
    const role = req.body.role

    try {
        const existingUser = await Utilisateur.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: 'This email is already in use' })
        }

        const hashedPassword = await bcrypt.hash(mot_de_Passe, 10)

        const newUser = new Utilisateur({
            nom,
            prenom,
            genre,
            date_de_Naissance,
            email,
            mot_de_Passe: hashedPassword,
            role,
        })

        await newUser.save()

        res.status(201).json({ message: 'successful registration' })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Server Error' })
    }
})



module.exports = router