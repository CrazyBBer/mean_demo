/**
 * Created by Administrator on 2015/12/11.
 * Description DataBase.
 */

var express =require('express');
var app = express();
var cors= require('cors');

app.use(cors());

var mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/TestDB');

var schema = mongoose.Schema({
    name: String,
    result:Boolean,
    Method:Object
});

var Product=  mongoose.model('Product',schema);

app.get('/', function (req, res) {

    Product.find(function (err, prodcts) {
        res.send(prodcts);
    });
});

app.listen(3000);


