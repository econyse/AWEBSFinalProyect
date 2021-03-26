
(function () {



    var location = window.location.pathname;

    if (location == '/') {
        document.getElementsByTagName('form')[0].addEventListener('submit', function (ev) {
            ev.preventDefault();
            var user = document.getElementById('user').value;
            var password = document.getElementById('password').value;
            Login(user, password)
        })
    } else if (location == '/register') {
        document.getElementsByTagName('form')[0].addEventListener('submit', function (ev) {
            ev.preventDefault();
            var user = document.getElementById('user').value;
            var password = document.getElementById('password').value;
            var cpass = document.getElementById('cpass').value;
            var name = document.getElementById('name').value;
            var bdate = document.getElementById('bdate').value;
            var newUser = {
                user,
                name,
                bdate
            }
            if (cpass == password)
                Register(newUser, password)
        })
    } else if (location == '/logout') {
        firebase.auth().signOut().then(() => {
            window.location.href = '/'
            // Sign-out successful.
        }).catch((error) => {
            alert(error)
            window.location.href = '/'
            // An error happened.
        });
    }
})();

function Login(user, password) {
    firebase.auth().signInWithEmailAndPassword(user, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            window.location = '/' + user.uid + '/home'
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

function Register(newUser, password) {
    firebase.auth().createUserWithEmailAndPassword(newUser.user, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            newUser.userid = user.uid
            fetch('/addUser', {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(newUser) // body data type must match "Content-Type" header
            }).then(function (res) {
                console.log(res)
                window.location = '/' + user.uid + '/home'
            });
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}