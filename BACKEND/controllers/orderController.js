const connection = require('../db');

exports.placeOrder = (req, res) => {
    // Assuming you have a model named Order to handle database operations
    const orderData = req.body;
    Order.create(orderData, (err, order) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(order);
    });
};

exports.getOrdersByUserId = (req, res) => {
    const userId = req.params.userId;
    Order.find({ userId: userId }, (err, orders) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(orders);
    });
};

exports.getOrderById = (req, res) => {
    const orderId = req.params.orderId;
    Order.findById(orderId, (err, order) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.send(order);
    });
};