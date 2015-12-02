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

var BaikeInfo = require('../data/BaikeInfo.js');

var POST = app.POST;


var testContext = {
    feeList: [
        {
            immuneEffect: "效果3",
            inoculationReaction: "反应1",
            note: "注册事项",
            taboo: "禁忌",
            toDisease: "疾病4",
            vaccinationObject: "对象2",
            vaccineId: "00000001122",
            vaccineName: "名称",
        },
    ],
    freeList: [
        {
            immuneEffect: "效果3",
            inoculationReaction: "反应1",
            note: "注册事项",
            taboo: "禁忌",
            toDisease: "疾病4",
            vaccinationObject: "对象2",
            vaccineId: "00000001122",
            vaccineName: "名称",
        },
    ]
};

var testDetail = {
    toDisease:'过敏性休克',
    vaccinationObject: '3月龄至6周岁的儿童',
    immuneEffect: '百白破疫苗经国内外多年时间证明...',
    taboo: '患有中枢神经系统疾病，如脑病',
    note: '打疫苗之前一定要看说明',
    inoculationReaction: '会有眩晕的效果',
};

var FreeVaccinum =  React.createClass({
    render() {
        return (
            <VaccinumList list={this.props.list} />
        )
    }
});


var FeeVaccinum =  React.createClass({
    render() {
        return (
            <VaccinumList list={this.props.list} />
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
    getInitialState() {
        return {
            tabIndex: this.props.initTabIndex
        };
    },
    handleWillFocus(route) {
        var tabIndex = route.tabIndex;
        this.setState({ tabIndex, });
    },
    render() {
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
    doGetVaccinumInfo() {
        POST(app.route.ROUTE_VACCINUM_DATA_LIST, {}, this.doGetVaccinumInfoSuccess, this.doGetVaccinumInfoFailed);
    },
    doGetVaccinumInfoSuccess(data) {
        if (data.success) {
        	var context = data.context;
        	this.stateState({list:list});
        	BaikeInfo.set(list);

        } else {
            Toast("获取疫苗信息失败");
        }
    },
    doGetVaccinumInfoFailed(error) {
        Toast("获取疫苗信息失败");
    },
    getInitialState() {
        return {
            context: BaikeInfo.info,
        };
    },
    componentDidMount() {
    	if (!BaikeInfo.info) {
    		this.doGetVaccinumInfo();
    	}
    },
    renderScene(route, navigator) {
        var props = null;
        var context = this.state.context||{freeList:[], feeList:[]};
        if (route.tabIndex === 1) {
            props = {list:context.freeList};
        } else if (route.tabIndex === 2) {
            props = {list:context.feeList};
        }
        console.log(props);
        return (
            <View style={{flex: 1}}>
                <View style={{height:41}} />
                <route.component {...props}/>
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
