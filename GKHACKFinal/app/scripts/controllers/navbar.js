'use strict';

app.controller('NavbarCtrl', function ($scope, $location, $anchorScroll, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Settings',
      'link': '/settings'
    }];

    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.gotoAbout = function (){
      $location.hash('about');
      $anchorScroll();
    };
  });
