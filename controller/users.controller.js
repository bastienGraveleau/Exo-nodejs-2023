const users = require("../data");
const UserModel = require("../model/users.model")
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('ExoNode.db');  // Utilisez le bon chemin vers votre base de données existante
const userModel = new UserModel(db);

const createUser = (req, res) => {
    const { nom, password, team } = req.body;

    userModel.createUser(nom, password, team, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
        }

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    });
};

    // Autres méthodes pour les opérations CRUD avec les utilisateurs


const getAll = (req, res) => {
    try {
        const ret = users.map(el => {
            return {id: el.id, name: el.name}
        })
        res.json(ret);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getOne = (req, res) => {
    try {
        const id = req.params.id;
        let ret;
        users.forEach(user => {
            if (user.id == id) {       
                ret = {
                    id: user.id,
                    name: user.name,
                }
            }
            
        });
        res.json(ret);

    } catch (error) {
        res.status(400).json({ error: 'Uknown user' });
    }
};


module.exports= {
    getAll, getOne, createUser
};