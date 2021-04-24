const mongoose = require("mongoose")
const vehicleSchema = mongoose.Schema({
vehiclename: {
    type:String,
    required:[true,"Vehicle name is required"]
},
wheels: {
    type:String,
    required:[true,"Wheels should be specified"]
},
color: String,
price: {
    type: Number,
    required: [true,"Price of the fish is required"],
    min:[700,"Price Should be minimum of $ 700"],
    max:[8000,"Price Cannot be greater than 8000$ "]

}

})
module.exports = mongoose.model("vehicle", vehicleSchema)
