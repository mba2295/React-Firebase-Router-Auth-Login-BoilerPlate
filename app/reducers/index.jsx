export var loginsignupReducer = function (state = {}, action) {

    switch (action.type) {

        case "ISLOGINGORSIGNUP":
            var newState = Object.assign({}, state, {isSigning: action.isSinging});
            return newState;

        case 'LOGIN':
            console.log("In LOGINLOGOUTREDUCER", action.uid);
            var newState = Object.assign({}, state, {uid: action.uid});
            return newState;

        case "LOGINCHECK":
            console.log("at reducer", action.role);
            var newState = Object.assign({}, state, {role: action.role});
            return newState;

        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};
