const express = require('express');
const router = require('./router');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
