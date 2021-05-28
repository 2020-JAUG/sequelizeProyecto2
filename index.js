const express = require("express");
const app = express();
const port =  3000;
const db = require("./db.js");
const router = require("./router");
const cors = require("cors");

//Middleware
app.use(cors());//Para poder levantar dos servidores en local, cuando trabajamos con front y back
app.use(express.json());
app.use(router);

//Conecting to the database
db.then(() => {

    //Starting server
    app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
})
.catch((err)=> console.log(err.message));
