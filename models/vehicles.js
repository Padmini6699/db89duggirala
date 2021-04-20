const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehiclename: String,
wheels: String,
color: String,
price: Number
})
module.exports = mongoose.model("vehicle", vehicleSchema)
