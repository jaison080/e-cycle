const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        userMail: {type: String, required: true},
        brand: {type: String},
        modelNo: {type: String},
        purchaseDate: {type: Date},
        currentCondition: {type: String},
        isWorking: {type: Boolean},
        imageUrl: {type: String},
        disposalMethod: {type: String}
    }
)
module.exports = mongoose.model("Product",ProductSchema)

