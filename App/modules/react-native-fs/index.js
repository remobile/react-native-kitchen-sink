var React = require('react-native');
var {
    StyleSheet,
    View,
    Image,
} = React;

var fs = require('react-native-fs');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    async showConstants () {
        console.log(fs.MainBundlePath);
        console.log(fs.CachesDirectoryPath);
        console.log(fs.DocumentDirectoryPath);
        var ret =  await fs.writeFile('/Users/fang/rn/KitchenSink/1.txt', 'Lorem ipsum dolor sit amet', 'utf8');
        console.log(ret);
        var data = await fs.readFile('/Users/fang/rn/KitchenSink/1.txt', 'utf8');
        console.log(data);
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.showConstants}>
                    showConstants
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
    }
});
