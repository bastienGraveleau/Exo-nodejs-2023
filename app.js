const express = require("express")
const app = express();

const config = require("./config/config")();
process.env.PORT = config.port;

app.listen(process.env.PORT, () => {
    console.log('Server is listening on http://localhost:${process.env.PORT}/')
})
