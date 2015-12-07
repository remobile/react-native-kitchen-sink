'use strict';
var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
} = React;

var Button = require('@remobile/react-native-simple-button');
var Dialogs = require('@remobile/react-native-dialogs');

module.exports = React.createClass({
    onConfirm(buttonIndex) {
        if (buttonIndex === 0) {
            console.log("doDownloadNewVersion");
        }
    },
    doCheckVersion() {
        Dialogs.confirm(
            '检测到有新的版本，是否下载更新',
            this.onConfirm,
            '版本信息',
            ['是','否']
        );
    },
    render() {
        return (
            <View style={styles.container}>
                <Button
                    style={styles.btnSubmit}
                    onPress={this.doCheckVersion} >检测最新版本</Button>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
