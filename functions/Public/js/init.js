// (function($){
//   $(function(){

//     $('.sidenav').sidenav();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

var firebaseConfig = {
  apiKey: "AIzaSyA22TIrZa-rOY-at7yonbwNb9pOEvbpySo",
  authDomain: "finalproject-67cb8.firebaseapp.com",
  projectId: "finalproject-67cb8",
  storageBucket: "finalproject-67cb8.appspot.com",
  messagingSenderId: "885111161110",
  appId: "1:885111161110:web:f20df485f1bc117a225037"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

(function () {

  var user = firebase.auth().currentUser;

  if (user) {
    window.location = '/' + user.uid + '/home'
  } else {
    console.log('no user')
  }
  var elems = document.querySelector('.sidenav');
  var instances = M.Sidenav.init(elems);

  if (window.location.pathname == '/register') {
    var datepickers = document.querySelectorAll('.datepicker');
    var datepickerInstances = M.Datepicker.init(datepickers, {
      yearRange: 50
    });
  }
})();
