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
exports.vehicle_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: vehicle detail: ' + req.params.id);
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
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle vehicle delete form on DELETE.
exports.vehicle_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: vehicle delete DELETE ' + req.params.id);
};
// Handle vehicle update form on PUT.
exports.vehicle_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: vehicle update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.vehicle_view_all_Page = async function (req, res) {
    try {
        thevehiclees = await vehicle.find();
        console.log("njfndw")
        res.render('vehicles', { title: 'vehicle Search Results', results: thevehicles });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};