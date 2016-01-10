var User = (function() {
    this.lists = [{username : 'marksuner', password : 'gwapo'}];

    var all = function() {
    }.bind(this);

    var login = function(authData) {
        for (var list in this.lists) {
            if (authData.username === this.lists[list].username && authData.password === this.lists[list].password) {
                return this.lists[list];
            };
        };
        return null;
    }.bind(this);

    return {
        all : all,
        login : login
    };
}());

module.exports = User;