'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableHighlight,
} = React;


var Sample = require('../react-native-material-kit/index.js');
var modules = [
    {text:'react-native-material-kit', image: require('image!tabnav_list'), module:Sample},
    {text:'react-native', image: require('image!tabnav_list'), module:Sample},
    {text:'react-native-material-kit123123123', image: require('image!tabnav_list'), module:Sample},
];


module.exports = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(modules),

        };
    },
    _onPressRow(obj) {
        app.navigator.push({
            title: obj.text,
            component: obj.module
        });
    },
    renderRow(obj) {
        return (
            <View>
                <TouchableHighlight
                    onPress={this._onPressRow.bind(null, obj)}
                    underlayColor="#EEB422">
                    <View style={styles.row}>
                        <Image
                            resizeMode='stretch'
                            source={obj.image}
                            style={styles.icon} />
                        <Text style={styles.text} >
                            {obj.text}
                        </Text>
                        <Image
                            resizeMode='contain'
                            source={require('image!iau')}
                            style={styles.arrow} />
                    </View>
                </TouchableHighlight>
                <View style={{height:1, backgroundColor:'green'}} />
            </View>
        )
    },
    render: function() {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    />
            </View>
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        height:60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    list: {
        alignSelf:'stretch'
    },
    icon: {
        width:25,
        height:25,
        marginRight: 10,
    },
    text: {
        width:sr.w-60
    },
    arrow: {
    },
});
