const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product.route');
const dbConnection = require('./mongo/mongo.connection');

const app = express();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, HEAD, GET, POST, PUT, DELETE");
    next();
})
app.use(bodyParser.json());
app.use('/product', productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is up and running on port number ${port}`);
});