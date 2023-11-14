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
        // unique: true,
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
const Utilisateur = mongoose.model('utilisateur', UtilisateurSchema)


const PatientSchema = Schema({
    ID_Utilisateur: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
    },
    niveau_Addiction: {
        type: String,
    },
    moyenne_Heures_de_Jeu_par_Semaine: {
        type: Number,
    },
    moyenne_de_Mois_de_Jeu: {
        type: Number,
    },
    score_Insomnie: {
        type: Number,
    },
    score_de_Somnolence_Excessive: {
        type: Number,
    },
    score_Anxiete: {
        type: Number,
    },
    score_de_Depression: {
        type: Number,
    }
},
    {
        timestamps: true
    })
const Patient = mongoose.model('patient', PatientSchema)


const MedecinSchema = Schema({
    ID_Utilisateur: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
    },
    specialite: {
        type: String,
    },
    sessions_de_Therapie_Planifiees: {
        type: Number,
    },
},
    {
        timestamps: true
    })
const Medecin = mongoose.model('medecin', MedecinSchema)


const AdminSchema = Schema({
    ID_Utilisateur: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
    },
    admin_role: {
        type: String,
    },
    autorisations: {
        type: String,
    }
},
    {
        timestamps: true
    })
const Admin = mongoose.model('admin', AdminSchema)


const QuestionnaireSchema = Schema({
    ID_Patient: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
    },
    date_du_Questionnaire: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true
    })
const Questionnaire = mongoose.model('questionnaire', QuestionnaireSchema)


const QuestionSchema = Schema({
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
const Question = mongoose.model('question', QuestionSchema)


const Reponse_QuestionnaireSchema = Schema({
    ID_Questionnaire: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
    },
    ID_Question: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'QuestionSchema',
        // required: true,
        type: Object
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
const Reponse_Questionnaire = mongoose.model('reponse_Questionnaire', Reponse_QuestionnaireSchema)


const AlertesSchema = Schema({
    ID_Patient: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Patient',
        // required: true,
        type: Object
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
const Alertes = mongoose.model('alertes', AlertesSchema)


const MessagesSchema = Schema({
    ID_Expediteur: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
    },
    ID_Destinataire: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
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
const Messages = mongoose.model('messages', MessagesSchema)


const Statistiques_UtilisationSchema = Schema({
    ID_Utilisateur: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Utilisateur',
        // required: true,
        type: Object
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
const Statistiques_Utilisation = mongoose.model('statistiques_Utilisation', Statistiques_UtilisationSchema)

module.exports = {
    Utilisateur,
    Patient,
    Medecin,
    Admin,
    Questionnaire,
    Question,
    Reponse_Questionnaire,
    Alertes,
    Messages,
    Statistiques_Utilisation
}