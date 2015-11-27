var React = require('react-native');
var {
    StyleSheet,
    View,
    Image,
} = React;

var fs = require('react-native-fs');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    async isFileExist(filepath) {
        return new Promise(async(resolve, reject) => {
            try {
                await fs.readFile(filepath);
                resolve(true);
            } catch (e) {
                resolve(e);
            }
        });
    },
    async showExist() {
        var s = await this.isFileExist('/Users/fang/data/1.txt');
        console.log(s);
    },
    async showConstants () {
        // console.log(fs.MainBundlePath);
        // console.log(fs.CachesDirectoryPath);
        // console.log(fs.DocumentDirectoryPath);
        // var ret =  await fs.writeFile('/Users/fang/rn/KitchenSink/1.txt', 'Lorem ipsum dolor sit amet', 'utf8');
        // console.log(ret);
        console.log("data");

        fs.readFile('/Users/fang/rn/KitchenSink/node_modules/blueimp-md5/js/md5.min.js', 'utf8').catch((err) => {
            console.log(err.message);
          });
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.showConstants}>
                    showConstants
                </Button>
                <Button onPress={this.showExist}>
                    showExist
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
