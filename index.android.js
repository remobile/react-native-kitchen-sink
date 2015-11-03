'use strict';
var React = require('react-native');
var App = require('./App/index.js');
var {
    AppRegistry
} = React;

var KitchenSink = React.createClass({
    render() {
        return(
            <App />
        );
    }
});

AppRegistry.registerComponent('KitchenSink', () => KitchenSink);
