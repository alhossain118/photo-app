'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
    .state('home', {url: '/', template: '<h1>HOME!</h1>'})
    .state('photos', {url: '/photos', templateUrl:'/html/addPhoto.html', controller: 'photoCtrl'})
    .state('albums', {url: '/albums', templateUrl:'/html/addAlbum.html', controller: 'albumCtrl'})
    .state('viewAlbums', {url: '/viewAlbums', templateUrl: '/html/viewAlbums.html', controller: 'mainCtrl'})
  $urlRouterProvider.otherwise('/');
})
