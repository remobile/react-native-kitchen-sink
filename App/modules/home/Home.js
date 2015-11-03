'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableHighlight,
    Navigator,
} = React;


var MaterialKit = require('../react-native-material-kit');
var ProgressHud = require('../react-native-progress-hud');
var Progress = require('../react-native-progress');
var ImageProgress = require('../react-native-image-progress');
var HtmlView = require('../react-native-htmlview');
var GridView = require('../react-native-grid-view');
var Slider = require('../react-native-slider');
var LightBox = require('../react-native-lightbox');

var modules = [
    {text:'react-native-material-kit', image: require('image!tabnav_list'), module:MaterialKit},
    {text:'eact-native-progress-hud', image: require('image!tabnav_list'), module:ProgressHud},
    {text:'react-native-progress', image: require('image!tabnav_list'), module:Progress},
    {text:'react-native-image-progress', image: require('image!tabnav_list'), module:ImageProgress},
    {text:'react-native-htmlview', image: require('image!tabnav_list'), module:HtmlView},
    {text:'react-native-grid-view', image: require('image!tabnav_list'), module:GridView},
    {text:'react-native-slider', image: require('image!tabnav_list'), module:Slider, noSwipe:true},
    {text:'react-native-lightbox', image: require('image!tabnav_list'), module:LightBox},
];


module.exports = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(modules),

        };
    },
    _onPressRow(obj) {
        var route = {
            title: obj.text,
            component: obj.module,
        };
        if (obj.noSwipe) {
            route.sceneConfig = {
                ...Navigator.SceneConfigs.HorizontalSwipeJump,
                gestures: null
            }
        }


        app.navigator.push(route);
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
        marginLeft: 10,
        width:25,
        height:25,
        marginRight: 10,
    },
    text: {
        width:sr.w-70
    },
    arrow: {
    },
});
