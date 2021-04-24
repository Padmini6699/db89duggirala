var express = require('express');
var router = express.Router();

const vehicle_controlers=require('../controllers/vehicle')
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}
/* GET update cost
/* GET home page. */
router.get('/', vehicle_controlers.vehicle_view_all_Page); 


/* GET detail vehicle page */
router.get('/detail', vehicle_controlers.vehicle_view_one_Page);
/* GET create vehicle page */
router.get('/create', secured,vehicle_controlers.vehicle_create_Page);

/* GET create update page */
router.get('/update', secured,vehicle_controlers.vehicle_update_Page);

/* GET create vehicle page */
router.get('/delete', secured,vehicle_controlers.vehicle_delete_Page);




module.exports = router;