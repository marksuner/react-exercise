var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
    {"id" : 1, "text" : "ham"},
    {"id" : 2, "text" : "chheese"},
    {"id" : 3, "text" : "Plumber"}
];

var List = React.createClass({
    render : function() {
        var listItem = ingredients.map( function(item) {
            return <ListItem key={item.id} ingredient={item.text}/>
        });

        return (
            <ul>
                {listItem}
            </ul>
        )
    }
})

module.exports = List;