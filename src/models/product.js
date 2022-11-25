const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        userMail: {type: String, required: true},
        category: {type: String, required: true},
        brand: {type: String},
        modelNo: {type: String},
        purchaseDate: {type: Date},
        isWarranty: {type: Boolean},
        isWorking: {type: Boolean},
        currentCondition: {type: String},
        imageUrl: {type: String},
        disposalMethod: {type: Number}
    }
)
module.exports = mongoose.models.Product ||mongoose.model("Product",ProductSchema)

