const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Product = new Schema ({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category:{
        type: String, 
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    new_price:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    available:{
        type: Boolean,
        default: true
    },
})

module.exports = mongoose.model('Product',Product)