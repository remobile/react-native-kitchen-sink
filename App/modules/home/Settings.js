'use strict';

var React = require('react-native');

var {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    PanResponder,
    Animated
} = React;

var sr = app.Screen;
var RTImage = app.RTImage;

module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.main}>
                <View style={{position:'absolute', width:100, height:100, backgroundColor:'blue'}}/>
                <View style={{position:'absolute', width:100, height:100, right:0, backgroundColor:'red'}}/>
                <View style={{position:'absolute', width:100, height:100, bottom:0,  backgroundColor:'red'}}/>
                <View style={{position:'absolute', width:100, height:100, bottom:0, right:0, backgroundColor:'red'}}/>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    main: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
