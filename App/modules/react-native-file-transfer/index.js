var React = require('react-native');
var {
    StyleSheet,
    NativeAppEventEmitter,
    View,
    Text,
} = React;

var FileTransfer = require('react-native-file-transfer');
var Button = require('react-native-simple-button');

module.exports = React.createClass({
    getInitialState () {
        return {
            image:null,
        };
    },
    uploadSuccessCallback(ret) {
        console.log(ret);
        this.uploadProgress.remove();
    },
    uploadErrorCallback(error) {
        console.log(error);
        this.uploadProgress.remove();
    },
    testUpload() {
        var fileURL = 'file:///Users/fang/node/test/post.js';
        // var fileURL = 'file:///sdcard/data/1.jpg';
        var options = new FileTransfer.FileUploadOptions();
        options.fileKey = 'file';
        options.fileName = fileURL.substr(fileURL.lastIndexOf('/')+1);
        options.mimeType = 'text/plain';

        var params = {};
        params.value1 = 'test';
        params.value2 = 'param';

        options.params = params;
        var ft = new FileTransfer();

        this.uploadProgress = NativeAppEventEmitter.addListener(
          'uploadProgress',
          (progress) => console.log(progress)
        );

        ft.upload(fileURL, encodeURI('http://192.168.1.117:3000/upload'), this.uploadSuccessCallback, this.uploadErrorCallback, options);
    },
    testDownload() {
        var fileTransfer = new FileTransfer();
          var uri = encodeURI("http://192.168.1.117:3000/helpAndAbout/help");
          this.downloadProgress = NativeAppEventEmitter.addListener(
            'downloadProgress',
            (progress) => console.log(progress)
          );
          var self = this;
          fileTransfer.download(
              uri,
              '/Users/fang/oldwork/client/server/xxx.html',
            // '/sdcard/data/xx.html',
              function(entry) {
                  console.log(entry);
                  self.downloadProgress.remove();
              },
              function(error) {
                  console.log(error);
                  self.downloadProgress.remove();
              },
              true
          );
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.testUpload}>
                    Test Upload
                </Button>
                <Button onPress={this.testDownload}>
                    Test Download
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
        paddingVertical:200,
    }
});
