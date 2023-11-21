const bcrypt = require('bcrypt');

class UserModel {
    constructor(db) {
        this.db = db;
        this.createUser();
    };

     createUser(nom, password, team) {
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error('Erreur de hachage du mot de passe');
            }

            const insertUser = this.db.prepare(`
                INSERT INTO users (nom, password, team, created, updated)
                VALUES (?, ?, ?, datetime('now'), datetime('now'))
            `);

            insertUser.run(nom, hashedPassword, team, (err) => {
                if (err) {
                    console.error(err.message);
                } else {
                    console.log('Utilisateur créé avec succès.');
                }
            });

            insertUser.finalize();
        });
    }

    // Autres méthodes pour les opérations CRUD avec les utilisateurs
}

module.exports = UserModel;