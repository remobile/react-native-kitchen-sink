var React = require('react-native');
var {
    StyleSheet,
    View,
    Image,
} = React;

var Zip = require('@remobile/react-native-zip');
var Button = require('@remobile/react-native-simple-button');

module.exports = React.createClass({
    testUnzip() {
        if (app.isandroid) {
            Zip.unzip('/sdcard1/1/Framework7.zip', '/sdcard/xx/', (z)=>{console.log(z)}, (z)=>{console.log(z)})
        } else {
            Zip.unzip('/Users/fang/data/Framework7.zip', '/Users/fang/data/xx/', (z)=>{console.log(z)}, (z)=>{console.log(z)})
            Zip.unzip('/Users/fang/data/Framework71.zip', '/Users/fang/data/yy/', (z)=>{console.log(z)}, (z)=>{console.log(z)})
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.testUnzip}>
                    test unzip
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
    },
});
