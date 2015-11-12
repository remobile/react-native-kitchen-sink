var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;

var ImagePicker = require('react-native-image-picker');
var Button = require('react-native-simple-button');

module.exports = React.createClass({
    onOpen() {
        var options = {maximumImagesCount: 10, width: 400};
        ImagePicker.getPictures(options, (result) => {
            console.log('result = ', result);
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.onOpen}>Photo</Button>
            </View>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
});
