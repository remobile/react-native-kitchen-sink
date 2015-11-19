var React = require('react-native');
var {
    StyleSheet,
    View,
    Image,
} = React;

var Camera = require('@remobile/react-native-camera');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    getInitialState () {
        return {
            image:null,
        };
    },
    capturePhoto() {
        var options = {
            quality: 50,
            allowEdit: false,
            destinationType: Camera.DestinationType.DATA_URL,
        };
        Camera.getPicture(options, (imageData) => {
            this.setState({image: {uri:'data:image/jpeg;base64,'+imageData}});
        });
    },
    capturePhotoEdit() {
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: Camera.DestinationType.DATA_URL,
        };
        Camera.getPicture(options, (imageData) => {
            this.setState({image: {uri:'data:image/jpeg;base64,'+imageData}});
        });
    },
    getPhoto(source) {
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: source,
            encodingType: Camera.EncodingType.PNG,
        };
        Camera.getPicture(options, (imageData) => {
                this.setState({image: {uri:'data:image/png;base64,'+imageData}});
        }, (error) => {
                console.log(error);
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.capturePhoto}>
                    Capture Photo
                </Button>
                <Button onPress={this.capturePhotoEdit}>
                    Capture Editable Photo
                </Button>
                <Button onPress={this.getPhoto.bind(null, Camera.PictureSourceType.PHOTOLIBRARY)}>
                    From Photo Library
                </Button>
                <Button onPress={this.getPhoto.bind(null, Camera.PictureSourceType.SAVEDPHOTOALBUM)}>
                    From Photo Album Editable
                </Button>
                <Image
                    resizeMode='stretch'
                    source={this.state.image}
                    style={styles.image} />
            </View>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
        width: 200,
        height: 200,
        backgroundColor: 'gray',
    }
});
