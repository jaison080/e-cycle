const mongoose = require('mongoose');

const PartsSchema = new mongoose.Schema(
    {
        userMail: {type: String, required: true},
        partName:{type:String},
        category: {type: String, required: true},
        brand: {type: String},
        modelNo: {type: String},
        purchaseDate: {type: Date},
        imageUrl: {type: String},
        sold: {type: Boolean}
    }
)
module.exports = mongoose.models.Parts ||mongoose.model("Parts",PartsSchema)