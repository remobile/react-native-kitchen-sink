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


var Vaccinum = require('../../vaccinum/home/views/index.js');
var MaterialKit = require('../react-native-material-kit');
var ProgressHud = require('../react-native-progress-hud');
var Progress = require('../react-native-progress');
var ImageProgress = require('../react-native-image-progress');
var HtmlView = require('../react-native-htmlview');
var GridView = require('../react-native-grid-view');
var Slider = require('../react-native-slider');
var LightBox = require('../react-native-lightbox');
var ImageAnimation = require('../react-native-image-animation/index.js');
var MarqueeLabel = require('../react-native-marquee-label');
var Tabbar = require('../react-native-tabbar');

var modules = [
    {title:'疾控中心', image: app.img.tabnav_list, module:Vaccinum},
    {title:'react-native-tabbar', image: app.img.tabnav_list, module:Tabbar},
    {title:'react-native-material-kit', image: app.img.tabnav_list, module:MaterialKit},
    {title:'eact-native-progress-hud', image: app.img.tabnav_list, module:ProgressHud},
    {title:'react-native-progress', image: app.img.tabnav_list, module:Progress},
    {title:'react-native-image-progress', image: app.img.tabnav_list, module:ImageProgress},
    {title:'react-native-htmlview', image: app.img.tabnav_list, module:HtmlView},
    {title:'react-native-grid-view', image: app.img.tabnav_list, module:GridView},
    {title:'react-native-slider', image: app.img.tabnav_list, module:Slider, noSwipe:true},
    {title:'react-native-lightbox', image: app.img.tabnav_list, module:LightBox},
    {title:'react-native-image-animation', image: app.img.tabnav_list, module:ImageAnimation},
    {title:'react-native-marquee-label', image: app.img.tabnav_list, module:MarqueeLabel},
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
            title: obj.title,
            component: obj.module,
        };
        if (obj.noSwipe) {
            route.sceneConfig = {
                ...app.configureScene(),
                gestures: null
            }
        }


        app.navigator.push(route);
    },
    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID+rowID}/>
        );
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
                        <Text style={styles.title} >
                            {obj.title}
                        </Text>
                        <Image
                            resizeMode='contain'
                            source={app.img.list_arrow}
                            style={styles.arrow} />
                    </View>
                </TouchableHighlight>
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
                    renderSeparator={this.renderSeparator}
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
    title: {
        width:sr.w-70
    },
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
    arrow: {
    },
});
