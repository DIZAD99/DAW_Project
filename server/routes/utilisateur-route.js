const express = require('express')

const collectionsModule = require('../modules/Collections_module')
const Utilisateur = collectionsModule.Utilisateur
const Medecin = collectionsModule.Medecin
const Patient = collectionsModule.Patient
const Admin = collectionsModule.Admin



const router = express.Router()


router.get('/', (req, res) => {
    Utilisateur.find()
        .then(utilisateur => res.status(200).json(utilisateur))
        .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
})


router.post('/who', (req, res) => {
    const email = req.body.email;

    Utilisateur.find({ email: email.email })
        .then(user => res.json(user))
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


router.get('/admin', (req, res) => {
    Admin.find()
        .then(AdminRes => {
            if (AdminRes.length === 0) {
                return res.status(404).json({ error: 'Admin not found' });
            }

            const userIds = AdminRes.map(admin => admin.ID_Utilisateur);

            Utilisateur.find({ _id: { $in: userIds } })
                .then(users => {
                    if (users.length === 0) {
                        return res.status(404).json({ error: 'Utilisateurs not found' });
                    }

                    const admins = AdminRes.map(admin => {
                        const user = users.find(u => u._id.equals(admin.ID_Utilisateur))

                        return {
                            nom: user.nom,
                            prenom: user.prenom,
                            genre: user.genre,
                            date_de_Naissance: user.date_de_Naissance,
                            email: user.email,
                            mot_de_Passe: user.mot_de_Passe,
                            role: user.role,
                            admin_role: admin.admin_role,
                            autorisations: admin.autorisations,
                        }
                    })

                    res.status(200).json(admins)
                })
                .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
        })
        .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
})


router.get('/patient', (req, res) => {
    Patient.find()
        .then(patientRes => {
            if (patientRes.length === 0) {
                return res.status(404).json({ error: 'Patient not found' });
            }

            const userIds = patientRes.map(patient => patient.ID_Utilisateur);

            Utilisateur.find({ _id: { $in: userIds } })
                .then(users => {
                    if (users.length === 0) {
                        return res.status(404).json({ error: 'Utilisateurs not found' });
                    }

                    const patients = patientRes.map(patient => {
                        const user = users.find(u => u._id.equals(patient.ID_Utilisateur))

                        return {
                            nom: user.nom,
                            prenom: user.prenom,
                            genre: user.genre,
                            date_de_Naissance: user.date_de_Naissance,
                            email: user.email,
                            mot_de_Passe: user.mot_de_Passe,
                            role: user.role,
                            niveau_Addiction: patient.niveau_Addiction,
                            moyenne_Heures_de_Jeu_par_Semaine: patient.moyenne_Heures_de_Jeu_par_Semaine,
                            moyenne_de_Mois_de_Jeu: patient.moyenne_de_Mois_de_Jeu,
                            score_Insomnie: patient.score_Insomnie,
                            score_de_Somnolence_Excessive: patient.score_de_Somnolence_Excessive,
                            score_Anxiete: patient.score_Anxiete,
                            score_de_Depression: patient.score_de_Depression
                        }
                    })

                    res.status(200).json(patients)
                })
                .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
        })
        .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
})



router.get('/medecin', (req, res) => {
    Medecin.find()
        .then(medecinRes => {
            if (medecinRes.length === 0) {
                return res.status(404).json({ error: 'medecin not found' });
            }

            const userIds = medecinRes.map(medecin => medecin.ID_Utilisateur);

            Utilisateur.find({ _id: { $in: userIds } })
                .then(users => {
                    if (users.length === 0) {
                        return res.status(404).json({ error: 'Utilisateurs not found' });
                    }

                    const medecins = medecinRes.map(medecin => {
                        const user = users.find(u => u._id.equals(medecin.ID_Utilisateur))

                        return {
                            nom: user.nom,
                            prenom: user.prenom,
                            genre: user.genre,
                            date_de_Naissance: user.date_de_Naissance,
                            email: user.email,
                            mot_de_Passe: user.mot_de_Passe,
                            role: user.role,
                            specialite: medecin.specialite,
                            sessions_de_Therapie_Planifiees: medecin.sessions_de_Therapie_Planifiees
                        }
                    })

                    res.status(200).json(medecins)
                })
                .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
        })
        .catch(err => res.status(400).json(`Error in utilisateur-route.js : ${err}`))
})



router.delete('/delete', async (req, res) => {
    const emailValue = req.body.email

    try {
        const utilisateur = await Utilisateur.findOne({ email: emailValue })

        if (!utilisateur) {
            res.status(404).json({ message: 'User not found with this email.' })
            return
        }

        switch (utilisateur.role) {
            case 'patient':
                await Patient.deleteOne({ ID_Utilisateur: utilisateur._id });
                console.log('Patient was deleted succeessfully.')
                break
            case 'medecin':
                await Medecin.deleteOne({ ID_Utilisateur: utilisateur._id })
                console.log('Medecin was deleted succeessfully.')
                break
            case 'admin':
                await Admin.deleteOne({ ID_Utilisateur: utilisateur._id })
                console.log('Admin was deleted succeessfully.')
                break
            default:
                console.log('User not found with this email.')
        }

        await Utilisateur.deleteOne({ email: emailValue })
        res.status(200).json({ message: 'Utilisateur was deleted succeessfully' })
    } catch (error) {
        res.status(500).json({ message: 'Error in User delete' })
    }
})

router.put('/update', (req, res) => {
    const Fnom = req.body.nom
    const Fprenom = req.body.prenom
    const Fgenre = req.body.genre
    const Fdate_de_Naissance = req.body.date_de_Naissance
    const Femail = req.body.email
    const Fmot_de_Passe = req.body.mot_de_Passe


    YourModel.findOneAndUpdate({ email: Femail }, { $set: { nom: Fnom } }, { new: true })
        .then(updatedDocument => {
            res.json(updatedDocument)
        })
        .catch(error => {
            res.status(500).json({ error: 'Internal Server Error' })
        })
})


module.exports = router

