const TeamModel = require("../model/team.model")
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ExoNode.db');  // Utilisez le bon chemin vers votre base de données existante
const teamModel = new TeamModel(db);

const createTeam = (req, res) => {
    const { nom } = req.body;

    teamModel.createTeam( nom, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
        }

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    });
};

module.exports= {
    createTeam
};