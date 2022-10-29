const UserStock = require("../model/UserStockSchema");
const Order = require("../model/OrderSchema");



// get marketdata = api/v1/marketdata
exports.getmarketdata = async (req, res) => {
    const market_data = await UserStock.find();

    res.status(200).json({
        success: true,
        market_data
    })
}

// post userportfolio = api/v1/userportfolio
exports.getuserportfolio = async (req, res) => {
    const userportfolio = await UserStock.find();

    res.status(200).json({
        success: true,
        userportfolio
    })
}

// get tradehistory = api/v1/tradehistory

exports.gettradehistory = async (req, res) => {
    const tradehistory = await UserStock.find();

    res.status(200).json({
        success: true,
        tradehistory
    })
}

// get orderbook = api/v1/orderbook
exports.getorderbook = async (req, res) => {
    const orderbook = await UserStock.find();

    res.status(200).json({
        success: true,
        orderbook
    })
}

// post order = api/v1/order
exports.makeorder = async (req, res) => {
    const { buy_sell, price, name, quantity, market_type } = req.body
    const order_data = new Order({ buy_sell, price, name, quantity, market_type })
    await order_data.save();
    res.status(200).json({
        success: true
    })
}


// get notification = api/v1/notification
exports.getnotification = async (req, res) => {
    const notification = await UserStock.find();

    res.status(200).json({
        success: true,
        notification
    })
}



