var React = require('react-native');
var {
    StyleSheet,
    View,
} = React;

var Camera = require('react-native-camera');
var Button = require('react-native-simple-button');

module.exports = React.createClass({
    onOpen() {
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType:Camera.PictureSourceType.PHOTOLIBRARY
        };
          Camera.getPicture(options, (result) => {
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
