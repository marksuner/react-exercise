var React = require('react');
var SignUpForm = require('./SignUpForm.jsx');
var LoginForm = require('./LoginForm.jsx');
var Dashboard = require('./Dashboard.jsx');

var Start = React.createClass({
    getInitialState : function() {
        return {
            page : 'login',
            auth : {}
        }
    },
    handlePage : function(page, auth) {

        this.setState({
            page : page,
            auth : typeof auth !== 'undefined' ? auth : {}
        });
    },
    render : function() {
        var component;

        switch(this.state.page) {
            case 'login': return <LoginForm handlePage={this.handlePage} />;
            case 'signUp': return <SignUpForm handlePage={this.handlePage} />;
            case 'dashboard': return <Dashboard handlePage={this.handlePage} user={this.state.auth}/>;
            default:
                this.state.page = 'login';
                break;
        }

        return (
            <div>
                {component}
            </div>
        );
    }
});

module.exports = Start;