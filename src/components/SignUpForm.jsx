var React = require('react'),
    Card = require('material-ui/lib/card/card'),
    CardText = require('material-ui/lib/card/card-text'),
    RaisedButton = require('material-ui/lib/raised-button'),
    CardHeader = require('material-ui/lib/card/card-header');

var FormTitle = require('./forms/FormTitle.jsx'),
    EmailField = require('./forms/EmailField.jsx'),
    StringField = require('./forms/StringField.jsx');

var User = require('../services/User');

var SignUpForm = React.createClass({
    handleSubmit : function() {
        this.props.handlePage('login');
    },
    render : function() {
        var btnContainerStyle = {
            margin : 5,
            textAlign: 'center'
        };

        return (
            <div className="col-md-offset-3 col-sm-11 col-md-5">
                <Card>
                    <CardText>
                        <FormTitle title="Sign Up"/>
                        <StringField
                            hint="Last Name"
                            errorText="Last name is required"
                            ref="lastName"
                         />
                        <StringField
                            hint="First Name"
                            errorText="First name is required"
                            ref="firstName"
                        />
                        <StringField
                            hint="Middle Name (optional)"
                            ref="middleName"
                        />
                        <StringField
                            hint="Address"
                            errorText="Address is required"
                            multiLine={true}
                            ref="address"
                        />
                        <div style={btnContainerStyle}>
                            <RaisedButton
                                label="Submit"
                                secondary={true}
                                onClick={this.handleSubmit}
                            />
                        </div>
                    </CardText>
                </Card>
            </div>
        )
    }
});

module.exports = SignUpForm;