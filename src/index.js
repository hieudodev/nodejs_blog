const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 8080;


const route = require('./routes');
// static file
app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', handlebars({
  extname: '.hbs'
}));
app.set('view engine' , 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port);