const express = require("express");
const app = express();
const port =  3000;

//Starting server
app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));
