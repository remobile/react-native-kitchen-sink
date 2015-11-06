'use strict';

var React = require('react-native');
var {
    Navigator,
    PixelRatio,
    StyleSheet,
    ScrollView,
    Text,
    TouchableHighlight,
    View,
    Image
} = React;

var TabNavigator = require('react-native-tab-navigator');

var Home = require('./Home.js');
var List = require('./List.js');
var Settings = require('./Settings.js');


var ROUTE_STACK = [
    {tabIndex: 0, component: Home},
    {tabIndex: 1, component: List},
    {tabIndex: 2, component: Settings},
];
var INIT_ROUTE_INDEX = 0;

var HomeTabBar = React.createClass({
    getInitialState: function() {
        return {
            tabIndex: this.props.initTabIndex
        };
    },
    handleWillFocus: function(route) {
        var tabIndex = route.tabIndex;
        this.setState({ tabIndex, });
    },
    render: function() {
        return (
            <View style={styles.tabs}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.tabIndex === 0}
                        title="主页"
                        renderIcon={() =>
                            <Image
                                resizeMode='stretch'
                                source={app.img.tabnav_notification}
                                style={styles.icon} />
                        }
                        onPress={() => {
                            this.props.onTabIndex(0);
                            this.setState({ tabIndex: 0, });
                        }}>
                        <View />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.tabIndex === 1}
                        title="列表"
                        renderIcon={() =>
                            <Image
                                resizeMode='stretch'
                                source={app.img.tabnav_list}
                                style={styles.icon} />
                        }
                        onPress={() => {
                            this.props.onTabIndex(1);
                            this.setState({ tabIndex: 1, });
                        }}>
                        <View />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.tabIndex === 2}
                        title="设置"
                        renderIcon={() =>
                            <Image
                                resizeMode='stretch'
                                source={app.img.tabnav_settings}
                                style={styles.icon} />
                        }
                        onPress={() => {
                            this.props.onTabIndex(2);
                            this.setState({ tabIndex: 2, });
                        }}>
                        <View />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    },
});

module.exports = React.createClass({
    renderScene: function(route, navigator) {
        return (
            <route.component />
        );
    },
    render: function() {
        return (
            <Navigator
                debugOverlay={false}
                style={styles.container}
                ref={(navigator) => {
                    this._navigator = navigator;
                }}
                initialRoute={ROUTE_STACK[INIT_ROUTE_INDEX]}
                initialRouteStack={ROUTE_STACK}
                renderScene={this.renderScene}
                configureScene={(route) => ({
                    ...app.configureScene(route),
                })}
                navigationBar={
                    <HomeTabBar
                        initTabIndex={INIT_ROUTE_INDEX}
                        routeStack={ROUTE_STACK}
                        onTabIndex={(index) => {
                            this._navigator.jumpTo(ROUTE_STACK[index]);
                        }}
                        />
                }
                />
        );
    },
});

var styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        flex: 1,
    },
    tabs: {
        height: 50,
    },
    emptyPage: {
        flex: 1,
        paddingTop: 64,
    },
    emptyPageText: {
        margin: 10,
    },
    icon: {
        width:25,
        height:25
    }
});
