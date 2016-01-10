var React = require('react'),
    Paper = require('material-ui/lib/paper'),
    LeftNav = require('material-ui/lib/left-nav'),
    Person = require('material-ui/lib/svg-icons/social/person'),
    Announcement = require('material-ui/lib/svg-icons/action/announcement'),
    RemoveRedEye = require('material-ui/lib/svg-icons/image/remove-red-eye');

var MenuItem = require('./List/MenuItem.jsx')
    MenuItemLogout = require('./List/MenuItemLogout.jsx');

var UsersContent = require('./Contents/UsersContent.jsx'),
    DashboardContent = require('./Contents/DashboardContent.jsx'),
    OfferingsContent = require('./Contents/OfferingsContent.jsx');

var injectTapEventPlugin = require("react-tap-event-plugin");
    injectTapEventPlugin();


var Dashboard = React.createClass({
    getInitialState : function() {
        return {
            logoutOpen : false,
            active : 'dashboard',
        };
    },
    handleLogoutOpen : function() {
        this.setState({logoutOpen : true });
    },

    handleLogoutClose : function() {
        this.setState({logoutOpen : false });
    },

    handleLogout : function() {
        this.props.handlePage('login');
    },

    getActivePage : function(page) {
        return this.state.active === page;
    },

    setActivePage : function(page) {
        this.setState({active : page});
    },

    render : function() {

        var sideContent,
            sideContentStyle = {
                marginLeft : 260,
            },
            sideContentPaperStyle = {
                padding : '20px 20px'
            };
        switch (this.state.active) {
            case 'users':
                sideContent = <UsersContent />;
                break;
            case 'dashboard':
                sideContent = <DashboardContent />;
                break;
            case 'offerings':
                sideContent = <OfferingsContent />;
                break;
        }

        return (
            <div>
                <LeftNav open={true}>
                  <MenuItem primaryText="Dashboard" onTouchTap={this.setActivePage.bind(this, 'dashboard')} active={ this.getActivePage('dashboard') } leftIcon={<Announcement />} />
                  <MenuItem primaryText="Offerings" onTouchTap={this.setActivePage.bind(this, 'offerings')} active={this.getActivePage('offerings')} leftIcon={<RemoveRedEye />} />
                  <MenuItem primaryText="Users" onTouchTap={this.setActivePage.bind(this, 'users')}  active={this.getActivePage('users')} leftIcon={<Person />} />
                  <MenuItemLogout handleLogout={this.handleLogout} handleLogoutOpen={this.handleLogoutOpen} handleLogoutClose={this.handleLogoutClose} logoutOpen={this.state.logoutOpen}/>
                </LeftNav>
                <div style={sideContentStyle}>
                    <Paper style={sideContentPaperStyle} zDepth={2}>
                        {sideContent}
                    </Paper>
                </div>
            </div>
        );
    }
});

module.exports = Dashboard;