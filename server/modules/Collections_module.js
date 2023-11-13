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
    })
const Utilisateur = mongoose.model('Utilisateur', UtilisateurSchema)


const PatientSchema = Schema({
    ID_Patient: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UtilisateurSchema',
        required: true,
    },
    niveau_Addiction: {
        type: String,
        required: true,
    },
    moyenne_Heures_de_Jeu_par_Semaine: {
        type: Number,
        required: true,
    },
    moyenne_de_Mois_de_Jeu: {
        type: Number,
        required: true,
    },
    score_Insomnie: {
        type: Number,
        required: true,
    },
    score_de_Somnolence_Excessive: {
        type: Number,
        required: true,
    },
    score_Anxiete: {
        type: Number,
        required: true,
    },
    score_de_Depression: {
        type: Number,
        required: true,
    }
},
    {
        timestamps: true
    })
const Patient = mongoose.model('Patient', PatientSchema)


const MedecinSchema = Schema({
    ID_Medecin: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UtilisateurSchema',
        required: true,
    },
    specialite: {
        type: String,
        required: true,
    },
    sessions_de_Therapie_Planifiees: {
        type: Number,
        required: true,
    },
},
    {
        timestamps: true
    })
const Medecin = mongoose.model('Medecin', MedecinSchema)


const AdminSchema = Schema({
    ID_Admin: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UtilisateurSchema',
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    autorisations: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })
const Admin = mongoose.model('Admin', AdminSchema)


const QuestionnaireSchema = Schema({
    ID_Questionnaire: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PatientSchema',
        required: true,
    },
    date_du_Questionnaire: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    })
const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema)


const QuestionSchema = Schema({
    ID_Question: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    texte_de_la_question: {
        type: String,
        required: true
    },
    type_de_question: {
        type: Number,
        required: true
    },
    options_de_Reponse: {
        type: String,
        required: true
    },
    points_attribues_la_question: {
        type: String,
        required: true
    },
    ordre_affichage_dans_le_questionnaire: {
        type: Number,
        required: true
    },
    eventuelles_dependances_de_question: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })
const Question = mongoose.model('Question', QuestionSchema)


const Réponse_QuestionnaireSchema = Schema({
    ID_Reponse: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Questionnaire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionnaireSchema',
        required: true,
    },
    ID_Question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'QuestionSchema',
        required: true,
    },
    reponse_la_question: {
        type: String,
        required: true
    },
    score_attribue_la_reponse: {
        type: Number,
        required: true
    },
    commentaires_sur_la_reponse: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })
const Réponse_Questionnaire = mongoose.model('Réponse_Questionnaire', Réponse_QuestionnaireSchema)


const AlertesSchema = Schema({
    ID_Alertes: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PatientSchema',
        required: true,
    },
    date_du_Alertes: {
        type: Date,
        required: true
    },
    type_du_Alertes: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })
const Alertes = mongoose.model('Alertes', AlertesSchema)


const MessagesSchema = Schema({
    ID_Messages: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Expediteur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UtilisateurSchema',
        required: true,
    },
    ID_Destinataire: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UtilisateurSchema',
        required: true,
    },
    contenu_du_Message: {
        type: String,
        required: true
    },
    date_de_Envoi: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    })
const Messages = mongoose.model('Messages', MessagesSchema)


const Statistiques_UtilisationSchema = Schema({
    ID_Statistique: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    ID_Utilisateur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UtilisateurSchema',
        required: true,
    },
    date_de_la_Statistique: {
        type: Date,
        required: true
    },
    statistiques_specifiques_utilisation_de_application: {
        nombre_de_connexions: {
            type: Number,
        },
        temps_passe_sur_application: {
            type: Number
        }

    }
},
    {
        timestamps: true
    })
const Statistiques_Utilisation = mongoose.model('Statistiques_Utilisation', Statistiques_UtilisationSchema)

module.exports = {
    Utilisateur,
    Patient,
    Medecin,
    Admin,
    Questionnaire,
    Question,
    Réponse_Questionnaire,
    Alertes,
    Messages,
    Statistiques_Utilisation
}