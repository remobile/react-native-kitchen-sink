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
                <Text>
                    这是注册页面
                </Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
