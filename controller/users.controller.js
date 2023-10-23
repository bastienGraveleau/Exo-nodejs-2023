const users = require("../data");

const getAll = (req, res) => {
    res.json(users);
};

module.exports= {
    getAll
};