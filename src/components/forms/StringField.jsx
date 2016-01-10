var React = require('react'),
    TextField = require('material-ui/lib/text-field');

var StringField = React.createClass({
    propTypes: {
        hint : React.PropTypes.string.isRequired
    },
    getInitialState : function() {
        return {
            errorText : '',
            errorTextDefault : '',
            valid: true,
            value: '',
        };
    },
    componentDidMount : function() {
        var errorText = this.props.errorText ? this.props.errorText : '',
            value = this.props.value ? this.props.value : '';

        this.setState({
            errorTextDefault : errorText,
            valid : errorText ? false : true,
            value : value
        });
    },
    componentDidUpdate : function(prevProps, prevState) {
        if (this.props.shouldFocus) {
            this.refs.me.focus();
        };

        // if (this.props.shouldClear) {
        //     this.refs.me.clearValue();
        // };
    },
    onChange : function(e) {
        if (e.target.value.trim() !== '') {
            this.setState({
                value : e.target.value,
                valid : true,
                errorText : '',
            });
        } else {
            this.setState({
                value : e.target.value,
                valid : false,
                errorText : this.state.errorTextDefault
            });
        }

        if (this.props.onChange) {
            this.props.onChange();
        };
    },
    render : function() {
        var style = {
            width : this.props.width ? this.props.width : '100%',
            marginBottom: 1
        };
        return (
            <TextField
                style={style}
                floatingLabelText={this.props.hint}
                errorText={this.state.errorText}
                value={this.state.value}
                onChange={this.onChange}
                multiLine={this.props.multiLine}
                type={this.props.type}
                ref="me"
            />
        );
    }
});

module.exports = StringField;