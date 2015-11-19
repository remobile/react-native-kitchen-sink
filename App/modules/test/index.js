'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    AsyncStorage,
    DatePickerIOS,
} = React;


var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    getDefaultProps: function () {
   return {
     date: new Date(),
     timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
   };
 },

 getInitialState: function() {
   return {
     date: this.props.date,
     timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
   };
 },
 onDateChange: function(date) {
     console.log(date);
    this.setState({date: date});
  },

  onTimezoneChange: function(event) {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  },
    render() {
        return (
            <View style={styles.container}>
                <DatePickerIOS
                  date={this.state.date}
                  mode="datetime"
                  timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                  onDateChange={this.onDateChange}
                 />
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
