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
    AsyncStorage,
} = React;


var Button = require('react-native-simple-button');

var reactNativeStore = require('react-native-store');
var PersonalInfo = require('../../vaccinum/data/PersonalInfo.js');

module.exports = React.createClass({
    doClear() {
        AsyncStorage.removeItem("react-native-store");
    },
    doShowList: function() {
        (async function(){
            var list =  await AsyncStorage.getItem("react-native-store");
            console.log('result:', JSON.parse(list));

        })();
    },
    doShowKeys: function() {
        (async function(){
            var list = await AsyncStorage.getAllKeys();
            console.log('result:', list);

        })();
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.doClear} style={styles.btnLogin}>清除</Button>
                <Button onPress={this.doShowList} style={styles.btnLogin}>列表</Button>
                <Button onPress={this.doShowKeys} style={styles.btnLogin}>键值</Button>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        paddingVertical: 150,
    },
});
