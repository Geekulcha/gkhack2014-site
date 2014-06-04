'use strict';

var app = angular.module('comingsoonApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',

]);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
  });
