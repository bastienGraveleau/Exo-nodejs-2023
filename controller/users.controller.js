const users = require("../data");

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

module.exports= {
    getAll
};