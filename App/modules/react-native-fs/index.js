var React = require('react-native');
var {
    StyleSheet,
    View,
    Image,
} = React;

var fs = require('react-native-fs');
var Button = require('@remobile/react-native-simple-button');
var ROOT = '/Users/fang/data/';

module.exports = React.createClass({
    isFileExist(filepath) {
        return new Promise((resolve, reject) => {
            fs.stat(filepath).then((rs) => {
                resolve(true);
            }).catch((err) => {
                resolve(false);
            });
        });
    },
    async showExist() {
        var s = await this.isFileExist(ROOT+'1.txt');
        console.log(s);
    },
    showConstants () {
        console.log(fs.MainBundlePath);
        console.log(fs.CachesDirectoryPath);
        console.log(fs.DocumentDirectoryPath);
    },
    async testRead() {
        var ret =  await fs.readFile(ROOT+'1.txt', 'utf8').catch((err) => {
            console.log(err.message);
          });
         console.log(ret);
    },
    async testMkdir() {
        var ret =  await fs.mkdir(ROOT+'fang');
        console.log(ret);
    },
    async testUnlink() {
        var ret =  await fs.unlink(ROOT+'fang');
        console.log(ret);
    },
    async testDownload() {
        var ret =  await fs.downloadFile('http://192.168.1.117:3000/fang.zip', ROOT+'xx.zip',
         (a,b,c,d)=>{console.log(a,b,c,d)}, (a,b,c,d)=>{console.log(a,b,c,d)}).then(res => {
            console.log(res);
        });
        console.log(ret);
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
                <Button onPress={this.testRead}>
                    testRead
                </Button>
                <Button onPress={this.testWrite}>
                    testWrite
                </Button>
                <Button onPress={this.testWrite}>
                    testWrite
                </Button>
                <Button onPress={this.testMkdir}>
                    testMkdir
                </Button>
                <Button onPress={this.testUnlink}>
                    testUnlink
                </Button>
                <Button onPress={this.testDownload}>
                    testDownload
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
