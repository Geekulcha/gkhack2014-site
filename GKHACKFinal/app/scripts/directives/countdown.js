app.directive('countdown', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      element.countdown(attr.date, function(event) {
        console.log("I got called");
       var $this = $(this).html(event.strftime(''
         + '<div class="date">%D <span>Days</span></div>  '
         + '<div class="date">%H <span>Hrs</span></div>  '
         + '<div class="date">%M <span>Min</span></div>  '
         + '<div class="date">%S <span>Sec</span></div> '));
      });
    }
  }
});
