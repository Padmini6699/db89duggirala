var express = require('express');
var router = express.Router();

const vehicle_controlers=require('../controllers/vehicle')
/* GET home page. */
router.get('/', vehicle_controlers.vehicle_view_all_Page); 


/* GET detail vehicle page */
router.get('/detail', vehicle_controlers.vehicle_view_one_Page);
/* GET create vehicle page */
router.get('/create', vehicle_controlers.vehicle_create_Page);

/* GET create update page */
router.get('/update', vehicle_controlers.vehicle_update_Page);

/* GET create vehicle page */
router.get('/delete', vehicle_controlers.vehicle_delete_Page);




module.exports = router;