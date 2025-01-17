require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/user.js');
const authRoute = require('./routes/auth.js');
const productRoute = require('./routes/product.js');
const cartRoute = require('./routes/cart.js');
const orderRoute = require('./routes/order.js');
const paymentRoute = require('./routes/stripe.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', paymentRoute);

mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB Connection Successful')).catch((err) => console.log(err));
console.log(process.env.STRIPE_KEY);

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running');
});
