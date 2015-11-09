'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    Navigator,
    TouchableOpacity
} = React;

var SegmentedView = require('react-native-segmented-view');

var VaccinumInfo = require('./VaccinumInfo.js');
var VaccinumList = require('./VaccinumList.js');
var VaccinumSchedule = require('./VaccinumSchedule.js');

var FreeVaccinum =  React.createClass({
    getInitialState() {
        return {
            list: [
                {name:'卡介苗', image:app.img.loading_8},
                {name:'乙肝疫苗', image:app.img.loading_8},
                {name:'风疹疫苗', image:app.img.loading_8},
                {name:'小儿麻痹疫苗', image:app.img.loading_8},
                {name:'百白破', image:app.img.loading_8},
                {name:'小儿肺炎疫苗', image:app.img.loading_8},
                {name:'甲流疫苗', image:app.img.loading_8},
                {name:'脊灰疫苗', image:app.img.loading_8},
                {name:'风疹疫苗', image:app.img.loading_8},
                {name:'麻疹疫苗', image:app.img.loading_8},
            ]
        }
    },
    render() {
        return (
            <VaccinumList list={this.state.list} />
        )
    }
});


var FeeVaccinum =  React.createClass({
    getInitialState() {
        return {
            list: [
                {name:'破伤风疫苗', image:app.img.loading_8},
                {name:'甲肝疫苗', image:app.img.loading_8},
                {name:'狂犬疫苗', image:app.img.loading_8},
                {name:'五联疫苗', image:app.img.loading_8},
                {name:'轮状病毒疫苗', image:app.img.loading_8},
                {name:'流感疫苗', image:app.img.loading_8},
                {name:'HIB疫苗', image:app.img.loading_8},
            ]
        }
    },
    render() {
        return (
            <VaccinumList list={this.state.list} />
        )
    }
});

var ROUTE_STACK = [
    {tabIndex: 0, component: VaccinumSchedule},
    {tabIndex: 1, component: FreeVaccinum},
    {tabIndex: 2, component: FeeVaccinum},
];
var INIT_ROUTE_INDEX = 0;

var TabNavigator = require('react-native-tab-navigator');


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
            <SegmentedView
                titles={["疫苗时间表", "计划内疫苗", "计划外疫苗"]}
                index={this.state.tabIndex}
                stretch={true}
                style={styles.tabs}
                onPress={
                    tabIndex => { this.props.onTabIndex(tabIndex);
                        this.setState({tabIndex});}
                    }
                selectedTitleStyle={{color:'blue'}}
                titleStyle={{fontSize:16, fontWeight:'800'}}
                />
        );
    },
});


module.exports = React.createClass({
    renderScene: function(route, navigator) {
        return (
            <View style={{flex: 1}}>
                <View style={{height:41}} />
                <route.component/>
            </View>
        );
    },
    render() {
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
                        onTabIndex={(index) => {
                            this._navigator.jumpTo(ROUTE_STACK[index]);
                        }}
                        />
                }
                />
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        flex: 1,
    },
    pageContainer: {
        flex: 1,
    },
    tabs: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});
