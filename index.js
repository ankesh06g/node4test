//grab our dependancies
const express = require('express'),
app = express(),
port = process.env.PORT || 6499,
expressLayouts = require('express-ejs-layouts');


//configure our application

// tell express where to look for static assets
app.use(express.static(__dirname + '/public'));

// set ejs as our templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//set router
app.use(require('./app/routes'));

//start our server
app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});
