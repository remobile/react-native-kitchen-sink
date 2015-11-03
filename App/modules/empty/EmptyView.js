
'use strict';

var React = require('react-native');
var {
    Text,
    View,
    StyleSheet,
} = React;

module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.emptyPage}>
                <Text style={styles.emptyPageText}>
                    {this.props.text}
                </Text>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    emptyPage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
