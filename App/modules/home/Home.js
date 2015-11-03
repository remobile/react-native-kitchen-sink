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
var Settings = require('./Settings.js');

module.exports = React.createClass({
    doLogin: function() {
        app.navigator.push({
            title: '设置',
            component: Settings,
            passProps: {},
        });
    },
    render: function() {
        return (
            <View style={styles.main}>
                <Text>
                    这是home页面
                </Text>
                <TouchableOpacity
                    onPress={this.doLogin}
                    style={styles.btnLoginContainer}>
                    <Text>登录</Text>
                </TouchableOpacity>
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
