// (function($){
//   $(function(){

//     $('.sidenav').sidenav();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

(function () {
  var elems = document.querySelector('.sidenav');
  var instances = M.Sidenav.init(elems);

  if (window.location.pathname == '/register') {
    var datepickers = document.querySelectorAll('.datepicker');
    var datepickerInstances = M.Datepicker.init(datepickers, {
      yearRange: 50
    });
  }
})();
