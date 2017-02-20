var React = require('react');
var {connect} = require('react-redux');
var {bindActionCreators}=require('redux');
var actions = require('./../actions/index');
var AdminMain = React.createClass({

    render: function () {
        return (
            <div>
                <h3>Admin Main Component</h3>

            </div>
        );
    }
});

function mapStateToProps(state) {

    return {};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        logout: actions.logoutStart,
    }, dispatch);
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(AdminMain);