require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const routeCategory = require('./routes/categoryRoute');
const routeBook = require('./routes/bookRoute');

app.use(bodyParser.json());

app.use('/', routeCategory);
app.use('/', routeBook);

const port = process.env.PORT || 2000;
app.listen(port, ()=>{
    console.log(`the server is running at port: ${port}`)
});