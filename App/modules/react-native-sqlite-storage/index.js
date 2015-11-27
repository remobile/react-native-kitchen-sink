'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
    AsyncStorage,
} = React;


var Button = require('@remobile/react-native-simple-button');
var Sqlite = require('@remobile/react-native-sqlite');

module.exports = React.createClass({
    doTest() {
        var db = Sqlite.openDatabase({name: "my.db"});

        db.transaction(function(tx) {
            tx.executeSql('DROP TABLE IF EXISTS test_table');
            tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');

            // demonstrate PRAGMA:
            db.executeSql("pragma table_info (test_table);", [], function(res) {
                console.log("PRAGMA res: " + JSON.stringify(res));
            });

            tx.executeSql("INSERT INTO test_table (data, data_num) VALUES (?,?)", ["test", 100], function(tx, res) {
                console.log("insertId: " + res.insertId + " -- probably 1");
                console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");

                db.transaction(function(tx) {
                    tx.executeSql("select count(id) as cnt from test_table;", [], function(tx, res) {
                        console.log("res.rows.length: " + res.rows.length + " -- should be 1");
                        console.log("res.rows.item(0).cnt: " + res.rows.item(0).cnt + " -- should be 1");
                    });
                });

            }, function(e) {
                console.log("ERROR: " + e.message);
            });
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.doTest}>测试</Button>
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
