const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// bodyParser Middleware
app.use(bodyParser.json());

// Brad uses this to connect to mongoose but I get an error, put URI directly in mongoose.connect and it works
//const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect('mongodb://Nick:Rangers88@ds123434.mlab.com:23434/mern_shopping', {useNewUrlParser: true }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes 
app.use('/api/items', items);

// Sets server port
const port = process.env.PORT || 5000;

// Starts server
app.listen(port, () => console.log(`Server started on port ${port}`));