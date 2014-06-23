'use strict';

app.controller('TwitterController', function ($scope, $http, Tweet) {
  // console.log("Tweets Controller");
  $scope.tweets = Tweet.all;
  // console.log($scope.tweets);

});
