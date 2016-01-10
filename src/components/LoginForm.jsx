var React = require('react'),
    ReactDOM = require('react-dom'),
    Card = require('material-ui/lib/card/card'),
    CardText = require('material-ui/lib/card/card-text'),
    RaisedButton = require('material-ui/lib/raised-button'),
    CardHeader = require('material-ui/lib/card/card-header');

var StringField = require('./forms/StringField.jsx'),
    FormTitle = require('./forms/FormTitle.jsx');

var User = require('../services/User');

var LoginForm = React.createClass({
    getInitialState : function() {
        return {
            username : {
                focus : true,
                clear : false,
            },
            password : {
                focus : false,
                clear : false,
            },
        };
    },
    handleSubmit : function() {
        if (this.isValidForm()) {
            // this.clearFields(); //deprecated fuck this thing hehe
            var authData = {
                username : this.refs.username.state.value,
                password : this.refs.password.state.value,
            };
            var auth = User.login(authData);

            if (typeof auth !== 'null') {
                this.props.handlePage('dashboard', auth);
            }
        };
    },
    clearFields : function() {
        this.setState({
            username : { clear : true },
            password : { clear : true },
        });
    },
    isValidForm : function() {
        var values = {
            username : this.refs.username.state.valid,
            password : this.refs.password.state.valid
        };
        var newState = {};

        for (var prop in values) {
            if (!values[prop]) {
                newState[prop] = { focus : true };
                this.setState(newState);
                return false;
            }
        }
        return true;
    },
    render : function() {
        var btnContainerStyle = {
            margin : 5,
            textAlign: 'center'
        };
        var formContainerStyle = {
            marginTop : 30
        };

        return (
            <div className="col-md-offset-3 col-sm-11 col-md-5 col-lg-offset-3 col-lg-5" style={formContainerStyle}>
                <Card>
                    <CardText>
                        <FormTitle
                            title="Login"
                        />
                        <StringField
                            hint="Username"
                            errorText="Username is required"
                            shouldFocus={this.state.username.focus}
                            shouldClear={this.state.password.clear}
                            ref="username"
                        />
                        <StringField
                            hint="Password"
                            errorText="Password is required"
                            shouldFocus={this.state.password.focus}
                            shouldClear={this.state.password.clear}
                            type="password"
                            ref="password"
                        />
                        <div style={btnContainerStyle}>
                            <RaisedButton
                                label="Submit"
                                onClick={this.handleSubmit}
                                disabled={this.state.isButtonDisable}
                                secondary={true}/>
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }
});

module.exports = LoginForm;