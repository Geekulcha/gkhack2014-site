app.directive('fullpage', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.fullpage();
    }
  }
});
