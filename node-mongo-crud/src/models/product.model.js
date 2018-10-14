const mongooes = require('mongoose');
const Schema = mongooes.Schema;

let productSchema = new Schema({
    name : {type : String, required : true, max : 100},
    price : {type : Number, required : true}
});

module.exports = mongooes.model('Product', productSchema);