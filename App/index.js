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
    TouchableOpacity,
} = React;

var POST = require('./utils/net/Post.js');
var Route = require('./config/Route.js');
var Screen = require('./config/Screen.js');
var RTImage = require('./components/RTImage.js');
var Messagebox = require('./components/Messagebox.js');
var DefaultLeftButton = require('./components/DefaultLeftButton.js');
var Dimensions = require('Dimensions');
var cssVar = require('cssVar');

global.app = {
    POST: POST,
    route: Route,
    Screen: Screen,
    RTImage: RTImage,
    Messagebox: Messagebox,
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
var Home = require('./modules/home/Home.js');
var EmptyView = require('./modules/empty/EmptyView.js');


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
    LeftButton: function(route, navigator, index, navState) {
        if (index === 0) {
            return null;
        }
        var previousRoute = navState.routeStack[index - 1];
        var title = previousRoute.title;
        var len = 4;
        while (title.getCodeLength()>4) {
            title = title.substr(0, len);
            console.log(title);
            len--;
        }
        if (len !== 4) {
            title += '..';
        }
        return (
            <TouchableOpacity
                onPress={() => navigator.pop()}
                style={styles.navBarLeftButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {"< "+title}
                </Text>
            </TouchableOpacity>
        );
    },
    RightButton: function(route, navigator, index, navState) {
        var rightButton = route.rightButton;
        if (!rightButton) {
            return null;
        }
        return (
            <TouchableOpacity
                onPress={rightButton.handler}
                style={styles.navBarRightButton}>
                <Text style={[styles.navBarText, styles.navBarButtonText]}>
                    {rightButton.title}
                </Text>
            </TouchableOpacity>
        );
    },
    Title: function(route, navigator, index, navState) {
        return (
            <Text style={[styles.navBarText, styles.navBarTitleText]}>
                {route.title}
            </Text>
        );
    },
};

module.exports = React.createClass({
    componentDidMount: function() {
        app.root = this;
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
        return app.configureScene(route);
    },
    renderScene: function(route, navigator) {
        return (
            <View style={{flex: 1}}>
                <View style={{height:64}} />
                <route.component {...route.passProps}/>
            </View>
        );
    },
    render: function() {
        var initialRoute = {
            title: '登录',
            component: Login,
            passProps: {},
            leftButton: false,
        };
        return (
            <Navigator
                ref={(navigator) => {
                    app.navigator = navigator;
                }}
                debugOverlay={false}
                style={styles.container}
                initialRoute={initialRoute}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={NavigationBarRouteMapper}
                        style={styles.navBar}
                        />
                }
                />
        );
    },

});

var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FFFFE0'
    },
    navBar: {
        backgroundColor: '#FFB90F',
    },
    navBarText: {
        fontSize: 18,
        marginVertical: 10,
    },
    navBarTitleText: {
        color: cssVar('fbui-bluegray-60'),
        fontWeight: '500',
        marginVertical: 9,
    },
    navBarLeftButton: {
        paddingLeft: 10,
    },
    navBarRightButton: {
        paddingRight: 10,
    },
    navBarButtonText: {
        color: cssVar('fbui-accent-blue'),
    },
});
