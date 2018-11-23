//create a ew express router 
const express = require('express'),
  router = express.Router(),
  mainController = require('./controllers/main.controllers'),
  eventController = require('./controllers/events.controllers');


//export router
module.exports = router;

//define router
//main route
router.get('/', mainController.showHome);

//event route
router.get('/events', eventController.showEvents);
router.get('/events/:slug', eventController.showSingle);
router.get('/ankesh', eventController.myTest);
