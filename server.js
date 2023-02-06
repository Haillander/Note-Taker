//EXPRESS SETTINGS 
const express = require('express')
const apiRoutes = require('./routes/RoutesAPI')
const  htmlRoutes = require('./routes/rotesHTML')
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//ROUTES 

require('./routes/RoutesAPI')(app);
require('./routes/routesHTML')(app);

app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
});