const express = require('express');
const cors = require('cors');
const routes = require('./src/routes.js');


const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
    });
    