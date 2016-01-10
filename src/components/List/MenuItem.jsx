var React = require('react');
    MenuItemMaterial = require('material-ui/lib/menus/menu-item');

var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

var MenuItem = React.createClass({
    render : function() {
        var style = {};

        if (this.props.active) {
            style = {
                backgroundColor: '#CCCCCC'
            };
        }
        return (
            <MenuItemMaterial
                style={style}
                primaryText={this.props.primaryText}
                leftIcon={this.props.leftIcon}
                rightIcon={this.props.rightIcon}
                onTouchTap={this.props.onTouchTap}
            />
        );
    }
});

module.exports = MenuItem;

