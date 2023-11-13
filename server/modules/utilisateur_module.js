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
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        require: true,
        trim: true
    },
    dateNaissance: {
        type: Date,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    motPasse: {
        type: String,
        require: true,
        trim: true
    }
},
    {
        timestamps: true
    }
)


const patientSchema = new mongoose.Schema({
    ID_Utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
    niveauAddiction: {
      type: String,
      required: true,
    },
    moyenneHeuresJeuParSemaine: {
      type: Number,
      required: true,
    },
    moyenneMoisJeu: {
      type: Number,
      required: true,
    },
    scoreInsomnie: {
      type: Number,
      required: true,
    },
      
    scoreSomnolenceExcessive: {
      type: Number,
      required: true,
    },
    scoreAnxiete: {
      type: Number,
      required: true,
    },
    scoreDepression: {
      type: Number,
      required: true,
    }
   
  });
  
  
  
  
  const medecinSchema = new mongoose.Schema({
    specialite: {
      type: String,
      required: true,
    },
    sessionsTherapiePlanifiees: {
      type: Number,
      required: true,
    },
    
    ID_Utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  });
  
  
  const adminSchema = new mongoose.Schema({
    role: {
      type: String,
      required: true,
    },
    autorisations:{
           type: [String],
           default:[],
    } ,
   
    ID_Utilisateur: { type: mongoose.Schema.Types.ObjectId, ref: 'Utilisateur' },
  });
  
  
  const questionnaireSchema = new mongoose.Schema({
    ID_Questionnaire: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    ID_Patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    dateDuQuestionnaire: {
      type: Date,
      required: true,
    },
   
  });
  
  const Questionnaire = mongoose.model('Questionnaire', questionnaireSchema);
  
  module.exports = Questionnaire;
  
  const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);
  const Patient = mongoose.model('Patient', patientSchema);
  const Medecin = mongoose.model('Medecin', medecinSchema);
  const Admin = mongoose.model('Admin', adminSchema);
  
  
  
  const reponseAuQuestionnaireSchema = new mongoose.Schema({
    Réponse_à_la_question: {
      type: String,
      required: true,
    },
    Score_attribué_à_la_réponse: {
      type: Number,
      required: true,
    },
    Commentaires_sur_la_réponse: {
      type: String,
      required: true,
    },
  
      ID_Questionnaire: {
        type: Schema.Types.ObjectId,
        ref: 'Questionnaire', 
        required: true
      },
      ID_Question: {
        type: Schema.Types.ObjectId,
        ref: 'Question', 
        required: true
      },
    });
    
  
  
    const ReponseAuQuestionnaire = mongoose.model('ReponseAuQuestionnaire', reponseAuQuestionnaireSchema);
   
    
      module.exports = {
      Utilisateur,
      Patient,
      Medecin,
      Admin,
      Questionnaire,
      ReponseAuQuestionnaire,
     
    };

