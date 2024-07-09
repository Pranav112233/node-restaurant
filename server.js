const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
const Person = require('./models/Person');
const menuItems = require('./models/menuItems');

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes')
//Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);



app.listen(PORT, () => {
    console.log('listening on port 3000');
});
