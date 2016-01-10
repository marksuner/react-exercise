var React = require('react'),
    CardTitle = require('material-ui/lib/card/card-title');

var FormTitle = React.createClass({
    render : function() {
        var style = {
            padding: 10
        };

        return (
            <div>
                <CardTitle
                    style= {style}
                    title= {this.props.title}
                    subtitle= {this.props.subtitle}
                />
            </div>
        );
    }
});

module.exports = FormTitle;