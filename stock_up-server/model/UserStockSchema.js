const mongoose = require('mongoose')

const userStockSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required: true,
        quantity: {
            type: Number,
            required: true
        },
        portfolio_value:{
            type:Number,
            required: true
        }    
    }
})

module.exports = mongoose.model("UserStock", userStockSchema);