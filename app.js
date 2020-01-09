require('./config/dbConnection');
const express = require('express');
const APIROUTER = require('./routes/api');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/", APIROUTER);

const PORT = 9000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
