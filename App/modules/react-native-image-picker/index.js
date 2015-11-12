var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    NativeModules
} = React;
var UIImagePickerManager = NativeModules.UIImagePickerManager;

var options = {
    title: 'Select Avatar', // specify null or empty string to remove the title
    cancelButtonTitle: 'Cancel',
    takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
    chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
    customButtons: {
        'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
    },
    maxWidth: 100,
    maxHeight: 100,
    quality: 0.2,
    allowsEditing: false, // Built in iOS functionality to resize/reposition the image
    noData: false, // Disables the base64 `data` field from being generated (greatly improves performance on large photos)
    storageOptions: { // if this key is provided, the image will get saved in the documents directory (rather than a temporary directory)
        skipBackup: true, // image will NOT be backed up to icloud
        path: 'images' // will save image at /Documents/images rather than the root
    }
};


var Button = require('react-native-simple-button');
module.exports = React.createClass({
    onOpen() {
        UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
            console.log('Response = ', response);

            if (didCancel) {
                console.log('User cancelled image picker');
            }
            else {
                if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    // You can display the image using either:
                    const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

                    this.setState({
                        avatarSource: source
                    });
                }
            }
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
