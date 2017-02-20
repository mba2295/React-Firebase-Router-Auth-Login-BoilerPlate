var React = require("react");
var {connect} = require('react-redux');
var {bindActionCreators}=require('redux');
var actions = require('./../actions/index');

var SignUp = require('SignUp');

var Login = React.createClass({

    changeToSignUp: function (signup) {
        this.props.loginOrSignup(signup);
    },

    loginToAccount: function (e) {
        e.preventDefault();
        this.props.loginStart(this.refs.email.value, this.refs.password.value);
    },
    render: function () {
        if (this.props.loginorSignin.isSigning == 'signup') {
            return (
                <SignUp></SignUp>
            );
        }
        else
            return (
                <div>
                    <h4>Login</h4>
                    <form onSubmit={this.loginToAccount}>
                        <input required ref="email" type="text" placeholder="your email"/>
                        <input required ref="password" type="text" placeholder="password"/>
                        <button onClick={this.loginToAccount}>Login</button>
                    </form>
                    <br/>or<br/>
                    <button onClick={this.changeToSignUp.bind(this, 'signup')}>SignUp</button>
                </div>
            );
    },
});

function mapStateToProps(state) {

    return {
        loginorSignin: state.loginsignupReducer,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        loginOrSignup: actions.loginOrSignUp,
        loginStart: actions.loginStart,
    }, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Login);