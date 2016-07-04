'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope) {

});

app.controller('albumCtrl', function($scope,$state,Album,productService){

  $scope.callToAddToProductList = function(currObj){
    productService.addProduct(currObj);
  };

  Album.getAll()
    .then(res => {
      $scope.albumsArray = res.data;
        $scope.callToAddToProductList($scope.albumsArray)
        console.log(productService.productList);
    })
    .catch(err => {
      console.log(err);
    })
    console.log(productService.productList);

    $scope.submitAlbum = function() {
      console.log('sumbitted');
      // let newAlbum = angular.copy($scope.album)
      let newAlbum = angular.copy($scope.album)
      // console.log(newAlbum);
      Album.create(newAlbum)
      .then(res =>{
        console.log(res);
        $scope.albumsArray.push(res.data)
      })
    }

    $scope.boolCheck = true;
    $scope.editAlbum = function (album,index){
        $scope.boolCheck = false;
        // console.log(album)
      $scope.editAlbumObject = {
        index: album.$index,
        albumId: album._id,
          name: album.name,
          // number: album.number,
          // email: album.email
        }
        $scope.submitAlbumEdit = function(){
          Album.edit($scope.editAlbumObject)
          .then(res =>{
            $scope.albumsArray.splice(index,1, res.data);
            $scope.boolCheck = true;
          })
        }
    }
    ////////////////////////EDIT
    ////////////////////////DELETE
    $scope.removeAlbum = function (album,index){
      // console.log(album);
      Album.delete(album)
        .then($scope.albumsArray.splice(index,1)
      )}
})
app.controller('photoCtrl', function($scope,Photo, productService){
  console.log("photoCtrl");


  Photo.getAll()
    .then(res => {
      $scope.photoArray = res.data;
    })
    $scope.products = productService.productList;
    console.log($scope.products);

  $scope.submitPhoto = function() {
    let newPhoto = angular.copy($scope.photo);
    console.log(newPhoto);
    Photo.create(newPhoto)
      .then(res => {
        console.log('create');
        $scope.photoArray.push(res.data)
      })
  }

  $scope.removePhoto = (id, index) => {
    Photo.delete(id)
      .then(res => {
        $scope.photoArray.splice(index,1)
      })
  }
})
