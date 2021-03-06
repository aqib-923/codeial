//this is the leader router
// always name in index.js in routes folder

const express = require('express');
// it will fetch same express what main index.js did


const router = express.Router();
const homeContoller = require('../controllers/home_contoller');
console.log("Router Loaded");


//format to access the fucntion in Contoller
// router.get('/urlname',variable which reqiures concerned contoller .actionName)
// any request that comes goes to home_contoller.js
router.get('/',homeContoller.home);

// this is how you use you give control to other routers--
// format - router.use('/to_what_url_you_want_to_give_control'.require('./reoter_file_name'))
//for /users request the control is given to router users.js to further acces users_controller.js 
router.use('/users',require('./users'));


// to use posts route-
router.use('/posts',require('./posts'));

// to use comments route-
router.use('/comments',require('./comments'));

// as api is in a different folder. this will give control to the index.js of the api folder in routes
router.use('/api',require('./api'));

module.exports = router;

