/**
 * Created by Administrator on 2015/12/11.
 */


var index= angular.module("eamon",[]);


index.controller("AppCtrl", function ($http) {

    var app =this;
    var  url="http://localhost:3000";

    app.saveProduct = function (newProduct) {
        $http.post(url+"/add",{name:newProduct}).success(function () {

        });
    }


    $http.get(url).success(function (products) {
        app.products= products;
    });

})