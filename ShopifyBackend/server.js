//modules and initializing
const express = require("express");
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

//settings routes
app.use(express.json())
app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',require('./routes/index'));
app.use('/create',require('./routes/create'));
app.use('/delete',require('./routes/delete'));
app.use('/edit',require('./routes/edit'));
app.use('/tocsv',require('./routes/export'));
//starting server
app.listen(port);
console.log(`Listening on port ${port}`);