/**
 * Created by Administrator on 2015/12/11.
 * Description: this the server Side ,Business Logic ,DataBase ORM.
 */

var express =require('express');
var app = express();
var cors= require('cors');
var  bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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


app.post('/add', function (req, res) {

    var product_name = req.body.name;
    var product_to_add = new Product({name:product_name,result:true,method:null});
    product_to_add.save(function (err) {
       res.send();
    });

});


app.listen(3000);


