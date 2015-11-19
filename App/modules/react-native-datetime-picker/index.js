'use strict';

var React = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} = React;

var DateTimePicker = require('@remobile/react-native-datetime-picker');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    getInitialState() {
        return {
            date: new Date(),
        }
    },
    showDatePicker() {
        var date = this.state.date;
        this.picker.showDatePicker(date, (d)=>{
            this.setState({date:d});
        });
    },
    showTimePicker() {
        var date = this.state.date;
        this.picker.showTimePicker(date, (d)=>{
            this.setState({date:d});
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign: 'center'}}>
                    {this.state.date.toString()}
                </Text>
                <View style={{height:40}} />
                <Button onPress={this.showDatePicker}>showDatePicker</Button>
                <View style={{height:40}} />
                <Button onPress={this.showTimePicker}>showTimePicker</Button>
                <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop:20,
    },
});
