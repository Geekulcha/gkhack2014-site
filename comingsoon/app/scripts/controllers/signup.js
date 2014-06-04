'use strict';

app.controller('SignupCtrl', function ($scope, Subscriber) {
  $scope.subscriber = {'name': '', 'email': ''};

  $scope.subscribe = function () {
    if ($scope.subscriber.name == '' || $scope.subscriber.email == '') {
      $scope.error = "Please fill in all details";
      console.log("Please fill in all details");
    } else {
      console.log($scope.subscriber);
      Subscriber.create($scope.subscriber).then(function () {
        $scope.subscriber = {'name': '', 'email': ''};
        $scope.success = "You Rock! We'll notify you when registrations open";
      }, function (error) {
        $scope.error = error.toString().replace('Error: FirebaseSimpleLogin: FirebaseSimpleLogin: ', '');
      });
    }
  };

});
