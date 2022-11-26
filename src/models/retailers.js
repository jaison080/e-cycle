const mongoose = require('mongoose');

const RetailerSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        address:String
    }
)
module.exports = mongoose.models.Retailers ||mongoose.model("Retailers",RetailerSchema)