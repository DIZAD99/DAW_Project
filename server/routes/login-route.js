const express = require('express')
const bcrypt = require('bcrypt')
const collectionsModule = require('../modules/Collections_module')
const Utilisateur = collectionsModule.Utilisateur


const router = express.Router()

router.post('/', async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const utilisateur = await Utilisateur.findOne({ email })

        if (!utilisateur) {
            return res.status(404).json({ message: 'User Not Found or incorrect email' })
        }

        // const passwordMatch = bcrypt.compare(password, utilisateur.mot_de_Passe);

        if (!(password === utilisateur.mot_de_Passe)) {
            return res.status(401).json({ message: 'incorrect password' })
        }


        // You may want to generate a JWT token here and send it back to the client for authentication
        res.status(200).json({ message: 'Successful connection' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' })
    }
})



module.exports = router