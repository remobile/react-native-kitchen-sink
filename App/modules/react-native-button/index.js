/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var Button = require('react-native-button');
var React = require('react-native');

var ExampleComponent = React.createClass({
  render() {
    return (
      <Button onPress={this._handlePress}>登录</Button>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
  },
});

module.exports = ExampleComponent;
