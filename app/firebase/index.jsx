var firebase = require('firebase');
try {
    var config = {
        //place your firebase config here
    };
    firebase.initializeApp(config);
} catch (error) {
    console.log(error);
}
export var refFirebase = firebase.database();
export var myFirebase = firebase;
