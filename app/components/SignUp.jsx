var React = require('react');
var {connect} = require('react-redux');
var {bindActionCreators}=require('redux');
var actions = require('./../actions/index');

var Signup = React.createClass({

    signupToAccount: function (e) {
        e.preventDefault();
        this.props.signupStart(this.refs.email.value, this.refs.password.value);
    },
    render: function () {
        return (
            <div>
                <h3>Signup</h3>
                <form onSubmit={this.loginToAccount}>
                    <input required ref="email" type="text" placeholder="your email"/>
                    <input required ref="password" type='password' placeholder="password"/>
                    <input required ref="comfirmpassword" type="password" placeholder="Confirm password"/>
                    <button onClick={this.signupToAccount}>Login</button>
                </form>
            </div>
        );
    }
});

function mapStateToProps(state) {

    return {};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        signupStart: actions.signupStart,
    }, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Signup);