const mongoose = require('mongoose');

const RetailerSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        address:String,
        role:String
    }
)
module.exports = mongoose.models.Retailers ||mongoose.model("Retailers",RetailerSchema)