'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} = React;

var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    getInitialState() {
        return {
            text: '',
        };
    },
    onChange(text) {
        this.setState({text:text});
    },
    doSubmit() {
    },
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.panelContainer}>
                    <Text style={styles.title}>我们将真诚对待您的每一个问题</Text>
                    <TextInput
                        style={styles.input}
                        onChange={this.onChange}/>
                    <Button
                        style={styles.btnSubmit}
                        onPress={this.doSubmit} >提交</Button>
                </View>
                <View style={{flex:1}} />
            </View>
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    panelContainer: {
        marginHorizontal: 20,
        marginTop:50,
        height:sr.h*2/3,
    },
    title: {
        fontSize:16,
        color:'#B22222',
    },
    input: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#B2DFEE',
    },
    btnSubmit: {
        height: 50,
    },
});
