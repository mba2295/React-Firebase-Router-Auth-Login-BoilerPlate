var Redux = require('redux');
var {loginsignupReducer, getStudentsCompanies}=require('./../reducers/index');
var thunk = require('redux-thunk').default;

export var storeConfig = function () {
    var reducer = Redux.combineReducers({

        loginsignupReducer: loginsignupReducer,
    });

    var store = Redux.createStore(reducer, Redux.applyMiddleware(thunk));

    return store;
}