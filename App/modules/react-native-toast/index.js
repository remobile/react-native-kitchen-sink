var React = require('react-native');
var {
    StyleSheet,
    View,
    Image
} = React;

var Toast = require('@remobile/react-native-toast');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={Toast.show.bind(null, "this is a message")}>
                    show
                </Button>
                <Button onPress={Toast.showShortTop.bind(null, "this is a message")}>
                    showShortTop
                </Button>
                <Button onPress={Toast.showShortCenter.bind(null, "this is a message")}>
                    showShortCenter
                </Button>
                <Button onPress={Toast.showShortBottom.bind(null, "this is a message")}>
                    showShortBottom
                </Button>
                <Button onPress={Toast.showLongTop.bind(null, "this is a message")}>
                    showLongTop
                </Button>
                <Button onPress={Toast.showLongCenter.bind(null, "this is a message")}>
                    showLongCenter
                </Button>
                <Button onPress={Toast.showLongBottom.bind(null, "this is a message")}>
                    showLongBottom
                </Button>
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
        paddingVertical:150,
    }
});
