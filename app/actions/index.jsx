var {myFirebase, refFirebase}=require('app/firebase/');
var store = require('./../store/configureStore').storeConfig();

export var setUidOnLogin = function (uid) {
    console.log("In Set uid action", uid);
    return {
        type: "LOGIN",
        uid: uid,
    };
};

export var logout = function () {
    console.log("In logout function");

    return {
        type: "LOGOUT",
    };
};
export var loginStart = function (email, password) {
    return function (dispatch, getState) {

        myFirebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {

            console.log("Authentication worked", result);
            dispatch(setUidOnLogin(result.uid));

            if (email === 'admin@admin.com' && password === 'admin123') {
                dispatch(roleCarrier('admin'));
            }
            else
                dispatch(roleCarrier('user'));
        }, function (error) {
            console.log("Authentication failed", error);
        });
    }

};
export var signupStart = function (email, password) {
    return function (dispatch, getState) {

        myFirebase.auth().createUserWithEmailAndPassword(email, password).then(function (result) {

            console.log("Authentication worked", result);
            dispatch(setUidOnLogin(result.uid));

            if (email === 'admin@admin.com' && password === 'admin123') {
                dispatch(roleCarrier('admin'));
            }
            else
                dispatch(roleCarrier('user'));

            dispatch(roleCarrier(role));
        }, function (error) {
            console.log("Authentication failed", error);
        });
    }

};
export var roleCarrier = function (role) {
    console.log('at role carrier', role);
    return {
        type: "LOGINCHECK",
        role: role,
    }
};
export var logoutStart = function () {
    return function (dispatch, getState) {
        return myFirebase.auth().signOut().then(function () {
            dispatch(logout());
        });
    }
};
export var loginOrSignUp = function (isSinging) {
    return {
        type: "ISLOGINGORSIGNUP",
        isSinging: isSinging,
    };
};


export var startFetching = function () {
    return {
        type: "STARTING_FETCHING",
    };
};
export var doneFetching = function () {
    return {
        type: "DONE_FETCHING",
    };
};