var React = require('react-native');
var {
    StyleSheet,
    View,
} = React;

var ImagePicker = require('@remobile/react-native-image-picker');
var Button = require('@remobile/react-native-simple-button');
var Dialogs = require('@remobile/react-native-dialogs');

module.exports = React.createClass({
    onOpen() {
        var options = {maximumImagesCount: 10, width: 400};
        ImagePicker.getPictures(options, function(results) {
            console.log(results);
            var msg = '';
            for (var i = 0; i < results.length; i++) {
                msg += 'Image URI: ' + results[i] + '\n';
            }
            Dialogs.alert(msg);
        }, function (error) {
            console.log(error);
            Dialogs.alert('Error: ' + error);
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
