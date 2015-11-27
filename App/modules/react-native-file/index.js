var React = require('react-native');
var {
    StyleSheet,
    View,
    Image,
} = React;

var File = require('@remobile/react-native-file');

var Button = require('@remobile/react-native-simple-button');

var {
    requestFileSystem,
    LocalFileSystem,
    FileReader,
} = File;

var isWrite = false;
module.exports = React.createClass({
    fail(e) {
        console.log(e);
    },
    readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log('onloadend', evt);
        };
        reader.onloadstart = function(evt) {
            console.log('onloadstart', evt);
        };
        reader.onprogress = function(evt) {
            console.log('onprogress', evt);
        };
        reader.onload = function(evt) {
            console.log('onload', evt);
        };
        reader.onabort = function(evt) {
            console.log('onabort', evt);
        };
        reader.onerror = function(evt) {
            console.log('onerror', evt);
        };
        reader.readAsText(file);
        // reader.readAsDataURL(file);
    },
    gotFile(file) {
        console.log(file);
        this.readAsText(file);
    },
    onFileWriterSuccess(writer) {
        //  log('fileName='+writer.fileName+';fileLength='+writer.length+';position='+writer.position);
        writer.onwrite = function(evt) {//当写入成功完成后调用的回调函数
            console.log('write success');
        };
        writer.onerror = function(evt) {//写入失败后调用的回调函数
            console.log('write error');
        };
        writer.onabort = function(evt) {//写入被中止后调用的回调函数，例如通过调用abort()
            console.log('write abort');
        };
        // 快速将文件指针指向文件的尾部 ,可以append
        //  writer.seek(writer.length);
        writer.write('fangyunjiang is a good developer');//向文件中写入数据
        //  writer.truncate(11);//按照指定长度截断文件
        //  writer.abort();//中止写入文件
    } ,
    gotFileEntry(fileEntry) {
        console.log(fileEntry);
        if (isWrite) {
            fileEntry.createWriter(this.onFileWriterSuccess, this.fail);
        } else {
            fileEntry.file(this.gotFile, this.fail);
        }
    },
    gotDirectoryEntry(dirEntry) {
        console.log(dirEntry);
        if (isWrite) {
            dirEntry.getFile('1.txt', {
                create : true,
                exclusive : false
            }, this.gotFileEntry, this.fail);
        } else {
            dirEntry.getFile('1.txt', {
                create : false,
                exclusive : false
            }, this.gotFileEntry, this.fail);
        }
    },
    gotFS(fileSystem) {
        console.log(fileSystem);
        fileSystem.root.getDirectory('fang', {
            create : true,
            exclusive : false
        }, this.gotDirectoryEntry, this.fail);
    },
    testReadText() {
        isWrite = false;
        requestFileSystem(LocalFileSystem.PERSISTENT, 0, this.gotFS, this.fail);
    },
    testWriteText() {
        isWrite = true;
        requestFileSystem(LocalFileSystem.PERSISTENT, 0, this.gotFS, this.fail);
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.testReadText}>
                    test read text
                </Button>
                <Button onPress={this.testWriteText}>
                    test write text
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
