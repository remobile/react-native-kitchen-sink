'use strict';

var React = require('react-native');
const {Image, StyleSheet} = React;


module.exports = React.createClass({
    render: function() {
        return (
            <Image
                resizeMode='stretch'
                style={this.props.style}
                source={this.props.source}>
                {this.props.children}
            </Image>
        );
    }
});
