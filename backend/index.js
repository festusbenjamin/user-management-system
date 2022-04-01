const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { json } = require('body-parser');

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080;

//connecting to frontend
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//load routes
app.use('/', require('./routes/router'));

//listen to server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})