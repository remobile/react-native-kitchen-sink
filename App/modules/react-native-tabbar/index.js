'use strict';

var React = require('react-native');
var {
    SegmentedControlIOS,
    Text,
    View,
    StyleSheet
} = React;


var SegmentedView = require('react-native-segmented-view');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            index: 0
        };
    },
    render() {
        return (
            <SegmentedView
                titles={["First", "Second", "Third"]}
                index={this.state.index}
                stretch
                onPress={index => this.setState({ index })}
                />
        );
    }
});
