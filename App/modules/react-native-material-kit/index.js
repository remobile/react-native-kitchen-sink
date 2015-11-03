'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Navigator,
    TouchableOpacity,
} = React;

var Buttons = require('./app/buttons');
var TextFields = require('./app/textfields');
var Toggles = require('./app/toggles');
var Progress = require('./app/progress');
var Sliders = require('./app/sliders');
var Cards = require('./app/cards');

module.exports = React.createClass({
    render: function () {
        return (
            <ScrollView
                style={styles.list}
                contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={() => {
                        app.navigator.push({
                            title: 'Buttons',
                            component: Buttons,
                        });
                    }}>
                    <Text style={styles.pushLabel}>Buttons</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                        app.navigator.push({
                            title: 'Cards',
                            component: Cards,
                        });
                    }}>
                    <Text style={styles.pushLabel}>Cards</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                        app.navigator.push({
                            title: 'Loading',
                            component: Progress,
                        });
                    }}>
                    <Text style={styles.pushLabel}>Loading</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                        app.navigator.push({
                            name: 'Sliders',
                            component: Sliders,
                        });
                    }}>
                    <Text style={styles.pushLabel}>Sliders</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                        app.navigator.push({
                            name: 'Textfields',
                            component: TextFields,
                        });
                    }}>
                    <Text style={styles.pushLabel}>Textfields</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                        app.navigator.push({
                            name: 'Toggles',
                            component: Toggles,
                        });
                    }}>
                    <Text style={styles.pushLabel}>Toggles</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    },
});

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#a9a9a9',
        height: 56,
    },
    list: {
        backgroundColor: '#F5FCFF',
        paddingTop: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 20, marginBottom: 0,
    },
    pushLabel: {
        padding: 10,
        color: '#2196F3',
    },
});
