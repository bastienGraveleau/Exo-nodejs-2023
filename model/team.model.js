class TeamModel {
    constructor(db) {
        this.db = db;
        this.createTeam();
    };

    createTeam(nom) {
        const insertTeam = this.db.prepare(`
            INSERT INTO teams (nom)
            VALUES (?)
        `);

        insertTeam.run(nom, (err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Équipe créée avec succès.');
            }
        });

        insertTeam.finalize();
    }
}

module.exports = TeamModel;