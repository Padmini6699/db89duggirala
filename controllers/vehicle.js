var Vehicle = require('../models/vehicles');
// List of all vehicles
exports.vehicle_list = async function (req, res) {
    try {
        theVehicles = await Vehicle.find();
        res.send(theVehicles);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    // res.send('NOT IMPLEMENTED: vehicle list');
};
// for a specific vehicle.
exports.vehicle_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Vehicle.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle vehicle create on POST.
exports.vehicle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Vehicle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.vehiclename = req.body.vehiclename;
    document.wheels = req.body.wheels;
    document.color = req.body.color;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(err)
        res.status(500);
    }
};
// Handle vehiclee delete on DELETE.
exports.vehicle_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await Vehicle.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};



// Handle vehicle update form on PUT.
exports.vehicle_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Vehicle.findById( req.params.id)
        // Do updates of properties
        if(req.body.vehiclename) toUpdate.vehiclename = req.body.vehiclename;
        if(req.body.wheels) toUpdate.wheels = req.body.wheels;
        if(req.body.color) toUpdate.color = req.body.color;
        if(req.body.price) toUpdate.price = req.body.price;
        
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function (req, res) {
    try {
       let thevehicles = await Vehicle.find();
        console.log(thevehicles)
        res.render('vehicles', { title: 'vehicle Search Results', results: thevehicles });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle a show one view with id specified by query
exports.vehicle_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await Vehicle.findById( req.query.id)
        res.render('vehicledetail', 
{ title: 'Vehicle Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a vehicle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vehicle_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('vehiclecreate', { title: 'vehicle Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a vehicle.
// query provides the id
exports.vehicle_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Vehicle.findById(req.query.id)
        res.render('vehicleupdate', { title: 'Vehicle Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.vehicle_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await Vehicle.findById(req.query.id)
        res.render('vehicledelete', { title: 'Vehicle Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};



