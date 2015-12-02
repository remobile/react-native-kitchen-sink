'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    AsyncStorage,
} = React;


var Button = require('@remobile/react-native-simple-button');
var Mongoose = require('@remobile/react-native-mongoose');

const DB_NAME = "personalInfo";
const CLT_NAME = "personalInfo";
module.exports = React.createClass({
    componentDidMount() {
        this.db = new Mongoose(DB_NAME);
        this.collection = this.db.collection(CLT_NAME, {max:30, unique:['a']});
    },
    doClear() {
        AsyncStorage.removeItem(DB_NAME);
        (async function(){
            var list = await AsyncStorage.getAllKeys();
            for (var i in list) {
                await AsyncStorage.removeItem(list[i]);
            }
        })();
    },
    doShowList() {
        (async function(){
            var list = await AsyncStorage.getAllKeys();
            for (var i in list) {
                var obj = await AsyncStorage.getItem(list[i]);
                console.log(list[i], JSON.parse(obj));
            }
        })();
    },
    doShowKeys() {
        (async function(){
            var list = await AsyncStorage.getAllKeys();
            console.log('result:', list);
        })();
    },
    async doInsert() {
        var info = {
            a : 4,
            b : 3,
        };
        var collection = this.collection;
        var list = await collection.insert(info).catch(error=>console.log(error));;
        console.log("list");
        console.log(list);
    },
    async doFind() {
        var collection = this.collection;
        var req = await collection.find();
        console.log(req);
    },
    async doFindOne() {
        var collection = this.collection;
        var req = await collection.findOne({b:3,a:1});
        console.log(req);
    },
    async doRemove() {
        var collection = this.collection;
        var req = await collection.remove();
        console.log(req);
        var req = await collection.find();
        console.log(req);
    },
    async doUpsert() {
        var collection = this.collection;
        var info = {
            a : 4,
            b : 6,
        };
        var list = await collection.upsert(info, {a:4}).catch(error=>console.log(error));;
        console.log("list");
        console.log(list);
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.doClear}>清除</Button>
                <Button onPress={this.doShowList}>列表</Button>
                <Button onPress={this.doShowKeys}>键值</Button>
                <Button onPress={this.doInsert}>Insert</Button>
                <Button onPress={this.doFind}>Find</Button>
                <Button onPress={this.doFindOne}>findOne</Button>
                <Button onPress={this.doRemove}>Remove</Button>
                <Button onPress={this.doUpsert}>Upsert</Button>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'space-around',
        paddingVertical: 150,
    },
});
