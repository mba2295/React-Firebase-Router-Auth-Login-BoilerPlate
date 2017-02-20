var React = require('react');
var {connect} = require('react-redux');
var {bindActionCreators}=require('redux');
var UserMain = require('UserMain');
var AdminMain = require('AdminMain');

var actions = require('./../actions/index');
var Main = React.createClass({

    render: function () {
        console.log("At main", this.props.loginorSignin);
        if (this.props.loginorSignin.role == 'user')
            return (
                <div>
                    <button onClick={this.props.logout}>Logout</button>
                    <UserMain></UserMain>
                </div>
            );
        else if (this.props.loginorSignin.role == 'admin') {
            return (
                <div>
                    <button onClick={this.props.logout}>Logout</button>
                    <AdminMain></AdminMain>
                </div>
            );
        }
        else
            return (
                <div>
                    <h5>Not authorized</h5>
                    <button onClick={this.props.removeUid}>Return to Login</button>
                </div>
            );
    }
});

function mapStateToProps(state) {

    return {
        loginorSignin: state.loginsignupReducer,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: actions.logoutStart,
    }, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Main);