const express = require("express");
const app = express();
const port = 3000;
const router = require("./route/index");
const errors = require("./middleware/errors");

app.use(router);

app.use(errors);

app.listen(port, () => console.log(`listen on port ${port}...`));
