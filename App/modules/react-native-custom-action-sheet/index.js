'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DatePickerIOS,
} = React;

var CustomActionSheet = require('react-native-custom-action-sheet');

module.exports = React.createClass({
    getInitialState () {
        return {
            modalVisible:true
        };
    },
    toggleModal() {

    },
    render() {
        return (
            <View style={styles.container}>

                      <CustomActionSheet modalVisible={this.state.modalVisible} onCancel={this.toggleModal}>
                        <View style={styles.datePickerContainer}>
                        </View>
                      </CustomActionSheet>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    datePickerContainer: {

    },

});
