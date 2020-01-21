require('./config/dbConnection');
const express = require('express');
const APIROUTER = require('./route/apiroutes');
const uploadRouter = require('./route/imageUpload');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/", APIROUTER);
app.use(uploadRouter);

const PORT = 9000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
