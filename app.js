import './config/dbConnection';
import express from 'express';
import apiRouter from './routes/api';

const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.static('./public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/", apiRouter);

const PORT = 7777;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
