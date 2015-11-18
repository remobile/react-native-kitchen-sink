'use strict';

var React = require('react-native');
var {
    StyleSheet,
    TouchableOpacity,
    View,
} = React;

var ActionSheet = require('@remobile/react-native-action-sheet');
var Button = require('@remobile/react-native-simple-button');

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
        this.setState({show:true});
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.onOpen}>Photo</Button>
                <ActionSheet
                    visible={this.state.show}
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
