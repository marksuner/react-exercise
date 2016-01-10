var React = require('react'),
    TextField = require('material-ui/lib/text-field'),
    EmailValidator = require('email-validator');

var EmailField = React.createClass({
    getInitialState : function() {
        return {errorText :'', value : ""};
    },
    onChange : function(e) {
        var value = e.target.value;

        if (!EmailValidator.validate(value)) {
            this.setState({errorText:'Not a Valid Email', value: value});
        } else {
            this.setState({errorText:'', value: value});
        }
    },
    render : function() {
        var style = {
            width : this.props.width ? this.props.width : '100%',
            margin: 2
        };
        return (
            <div>
                <TextField
                    style = {style}
                    floatingLabelText={this.props.hint}
                    errorText={this.state.errorText}
                    onChange={this.onChange}
                    value={this.state.value}
                />
            </div>
        );
    }
});

module.exports = EmailField;