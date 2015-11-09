'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Navigator,
    Platform,
    BackAndroid,
    View,
    PixelRatio,
    Text,
    Image,
    TouchableOpacity,
    cssVar
} = React;

var ProgressHUD = require('react-native-progress-hud');

var POST = require('./utils/net/Post.js');
var Route = require('./config/Route.js');
var Screen = require('./config/Screen.js');
var RTImage = require('./components/RTImage.js');
var Messagebox = require('./components/Messagebox.js');
var DefaultLeftButton = require('./components/DefaultLeftButton.js');
var Dimensions = require('Dimensions');
var cssVar = require('cssVar');
var img = require('./resource/image.js');

global.app = {
    POST: POST,
    route: Route,
    Screen: Screen,
    RTImage: RTImage,
    Messagebox: Messagebox,
    img: img,
    isandroid: Platform.OS==="android"
};

app.configureScene = function(route) {
    route = route||{};
    var sceneConfig = route.sceneConfig;
    if (sceneConfig) {
        return sceneConfig;
    }
    if (Platform.OS==="android") {
        if (route.fromBottom) {
            sceneConfig = Navigator.SceneConfigs.FloatFromBottomAndroid;
        } else {
            sceneConfig = Navigator.SceneConfigs.FadeAndroid;
        }
    } else {
        if (route.fromBottom) {
            sceneConfig = Navigator.SceneConfigs.FloatFromBottom;
        } else {
            sceneConfig = Navigator.SceneConfigs.HorizontalSwipeJump;
        }
    }
    return sceneConfig;
};

var Login = require('./modules/login/Login.js');
var Home = require('./vaccinum/home/index.js');
// var Home = require('./modules/home/index.js');

String.prototype.getCodeLength = function() {
    var realLength = 0, len = this.length, charCode = -1;
    for (var i = 0; i < len; i++) {
        charCode = this.charCodeAt(i);
        if (charCode >= 0 && charCode <= 128) realLength += 1;
        else realLength += 2;
    }
    return realLength;
};

var NavigationBarRouteMapper = {
    getVisibleTitle: function(title) {
        var realLength = 0, len = title.length, preLen = -1, charCode = -1, needCut = false;
        for (var i=0; i<len; i++) {
            charCode = title.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1;
            } else {
                realLength += 2;
            }
            if (preLen===-1 && realLength >= 4) {
                preLen = i+1;
            } else if (realLength > 6) {
                needCut = true;
                break;
            }
        }
        console.log(preLen);
        if (needCut) {
            title = title.substr(0, preLen)+'..';
        }
        return title;
    },
    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }
        var previousRoute = navState.routeStack[index - 1];
        var title = this.getVisibleTitle(previousRoute.title);
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Image
                    resizeMode='contain'
                    source={app.img.back_arrow}
                    style={styles.leftNavBarIcon} />
                <Text
                    numberOfLines={1}
                    style={[styles.navBarText, styles.navBarButtonText, {left:-10}]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton: function(route, navigator, index, navState) {
        var rightButton = route.rightButton;
        if (!rightButton) {
            return null;
        }
        if (rightButton.image) {
            return (
                <TouchableOpacity
                    onPress={rightButton.handler}
                    style={styles.navBarRightButton}>
                    <Text style={[styles.navBarText, styles.navBarButtonText]}>
                        {' '}
                    </Text>
                    <Image
                        resizeMode='contain'
                        source={rightButton.image}
                        style={styles.rightNavBarIcon} />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={rightButton.handler}
                    style={styles.navBarRightButton}>
                    <Text style={[styles.navBarText, styles.navBarButtonText]}>
                        {rightButton.title}
                    </Text>
                </TouchableOpacity>
            );
        }
    },
    Title: function(route, navigator, index, navState) {
        return (
            <Text
                numberOfLines={1}
                style={[styles.navBarText, styles.navBarTitleText, {textAlign: (app.isandroid ? 'left' : 'center')}]}>
                {route.title}
            </Text>
        );
    },
};

module.exports = React.createClass({
    mixins: [ProgressHUD.Mixin],
    getInitialState() {
        return {
            navigationBar: true
        };
    },
    componentDidMount: function() {
        app.root = this;
        app.showProgressHUD = this.showProgressHUD;
        app.dismissProgressHUD = this.dismissProgressHUD;
        if (app.isandroid) {
            BackAndroid.addEventListener('hardwareBackPress', function() {
                if (app.navigator.getCurrentRoutes().length > 1) {
                    app.navigator.pop();
                    return true;
                }
                if (!app.willExitAndroid) {
                    app.Messagebox("再按一次返回键退出程序");
                    app.willExitAndroid = true;
                    setTimeout(function() {app.willExitAndroid = false}, 3000);
                    return true;
                }
                return false;
            });
        }
    },
    configureScene : function(route){
        this.setState({navigationBar:!!route.title});
        return app.configureScene(route);
    },
    renderScene: function(route, navigator) {
        if (route.title) {
            return (
                <View style={{flex: 1}}>
                    <View style={{height:Navigator.NavigationBar.Styles.General.TotalNavHeight}} />
                    <route.component {...route.passProps}/>
                </View>
            );
        } else {
            return (
                <route.component {...route.passProps}/>
            );
        }
    },
    render: function() {
        var initialRoute = {
            // title: '登录',
            component: Login,
            // title: '主页',
            // component: Home,
            passProps: {},
        };
        var navigationBar = (
            <Navigator.NavigationBar
                routeMapper={NavigationBarRouteMapper}
                style={styles.navBar}
                />
        );
        return (
            <View style={{flex:1}}>
                <Navigator
                    ref={(navigator) => {
                        app.navigator = navigator;
                    }}
                    debugOverlay={false}
                    style={styles.container}
                    initialRoute={initialRoute}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    navigationBar={this.state.navigationBar ? navigationBar : null}
                    />
                <ProgressHUD
                    isVisible={this.state.is_hud_visible}
                    isDismissible={false}
                    overlayColor="rgba(0, 0, 0, 0.6)"
                    />
            </View>
        );
    },

});

var sr = Screen;
var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFFFE0'
    },
    navBar: {
        backgroundColor: '#FFB90F',
        alignItems:'center'
    },
    navBarText: {
        fontSize: 18,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: cssVar('fbui-bluegray-60'),
        fontWeight: '500',
        marginVertical: 9,
        width: sr.mw,
    },
    navBarLeftButton: {
        flexDirection: 'row',
        paddingLeft: 2,
        alignItems:'center',
    },
    navBarRightButton: {
        flexDirection: 'row',
        paddingRight: 6,
        alignItems:'center'
    },
    navBarButtonText: {
        color: cssVar('fbui-accent-blue'),
    },
    leftNavBarIcon: {
        height:18,
        left: -5,
    },
    rightNavBarIcon: {
        height: 30,
    }
});
