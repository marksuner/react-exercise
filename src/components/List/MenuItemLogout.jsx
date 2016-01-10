var React = require('React'),
    MenuItem = require('./MenuItem.jsx'),
    Dialog = require('material-ui/lib/dialog'),
    FlatButton = require('material-ui/lib/flat-button'),
    HighlightOff = require('material-ui/lib/svg-icons/action/highlight-off');

var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();

var MenuItemLogout = React.createClass({
    render : function() {
        var actions = [
            <FlatButton
            label="Cancel"
            secondary={true}
            onTouchTap={this.props.handleLogoutClose} />,
            <FlatButton
            label="Yes"
            primary={true}
            keyboardFocused={true}
            onTouchTap={this.props.handleLogout} />
        ];

        return (
         <div>
             <MenuItem primaryText="Logout" onTouchTap={this.props.handleLogoutOpen} leftIcon={<HighlightOff />} />
             <Dialog
                title="Confirmation"
                actions={actions}
                modal={false}
                open={this.props.logoutOpen}
                onRequestClose={this.props.handleLogoutClose}
            >
                Are you sure you want to Logout?
            </Dialog>
        </div>
        );
    }
});

module.exports = MenuItemLogout;