'use strict';

var app = angular.module('myApp');

app.service('Album', function($http){
  this.getAll = () => {
    return $http.get('/api/albums');
  }
  this.create = (album) =>{
    console.log(album);
    return $http.post('/api/albums', album)
  }
  this.edit = (album) => {
    return $http.put('/api/albums/' + album.albumId,album)
  }
  this.delete = (album) => {
    return $http.delete('/api/albums/' + album)
  }
})

app.service('Photo', function($http){
  this.getAll = () => {
    return $http.get('/api/photos')
  }
  this.create = (photo) =>{
    console.log(photo);
    return $http.post('/api/photos', photo)
  }
  this.delete = (photo) => {
    return $http.delete('/api/photos/' + photo)
  }
})



app.factory('productService', function() {
  var productList = [];

  var addProduct = function(newObj) {
      productList.push(newObj);
  };

  var getProducts = function(){
      return productList;
  };

  return {
    addProduct: addProduct,
    getProducts: getProducts,
    productList: productList
  };

});
