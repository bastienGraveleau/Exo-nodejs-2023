const sqlite3 = require('sqlite3').verbose();

// Ouvrir la connexion à la base de données (ou créez-la si elle n'existe pas)
const db = new sqlite3.Database('ExoNode.db', (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log('Connexion à la base de données SQLite3 réussie.');
});

// Créer une table dans la base de données

const createTableTeam = `
    CREATE TABLE teams (
        id INTEGER PRIMARY KEY,
        nom TEXT
    )
`;

const createTableSQL = `
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        nom TEXT,
        password TEXT,
        created TEXT,
        updated TEXT,
        team INTEGER, FOREIGN KEY (team) REFERENCES teams(id)
        
    )
`;


db.run(createTableTeam, (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Table "teams" créée avec succès.');
        // Ensuite, créer la table "users" qui référence la table "teams"
        db.run(createTableSQL, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Table "users" créée avec succès.');
            }
        });
    }
});
// Fermez la connexion à la base de données lorsque vous avez terminé
db.close((err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connexion à la base de données fermée.');
    }
});