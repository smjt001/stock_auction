const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    buy_sell: {
        type: Boolean,
        required: true
    },
    price: {
        type: Number,
        default : 0,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    market_type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Order", orderSchema);