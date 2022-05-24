//Dependencies
const express = require('express');
const path = require('path');
const api = require('./routes/apiRoute');
const html = require('./routes/htmlRoute')

const PORT = process.env.PORT || 3001;

//creates an express server
const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', html)
app.use(express.static('public'));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
