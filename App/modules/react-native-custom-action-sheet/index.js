'use strict';

var React = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    View,
} = React;

var ActionSheet = require('react-native-action-sheet');
var Button = require('react-native-simple-button');

module.exports = React.createClass({
    getInitialState() {
        return {
            show: false
        };
    },
    onCancel() {
        this.setState({show:false});
    },
    onOpen() {
                console.log("=============");
        this.setState({show:true});
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.onOpen}>Photo</Button>
                <ActionSheet
                    modalVisible={this.state.show}
                    onCancel={this.onCancel} >
                    <ActionSheet.Button>Capture</ActionSheet.Button>
                    <ActionSheet.Button>Photo</ActionSheet.Button>
                    <ActionSheet.Button>Camera</ActionSheet.Button>
                </ActionSheet>
            </View>
        );
    },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});
