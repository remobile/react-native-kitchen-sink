'use strict';

var React = require('react-native');
const {Image, TouchableOpacity, Text, View} = React;

module.exports = React.createClass({
    goBack: function() {
        this.props.navigator.pop();
    },
    render: function() {
        var routes = this.props.navigator.getCurrentRoutes();
        if (routes.length > 1) {
            var text = routes[routes.length -2].title;
            return (
                <TouchableOpacity onPress={this.goBack}>
                    <Text style={{marginLeft: 8, color: '#0076FF', fontSize: 17, letterSpacing: 0.5}}>{text}</Text>
                </TouchableOpacity>
            );
        } else {
            return false;
        }
    }
});
