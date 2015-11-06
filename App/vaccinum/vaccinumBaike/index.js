'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TabBarIOS,
} = React;

var VaccinumInfo = require('./VaccinumInfo.js');
var VaccinumList = require('./VaccinumList.js');
var VaccinumSchedule = require('./VaccinumSchedule.js');

var FreeVaccinum =  React.createClass({
    getInitialState() {
        return {
            list: [
                {name:'卡介苗'},
                {name:'乙肝疫苗'},
                {name:'风疹疫苗'},
                {name:'小儿麻痹疫苗'},
                {name:'百白破'},
                {name:'小儿肺炎疫苗'},
                {name:'甲流疫苗'},
                {name:'脊灰疫苗'},
                {name:'风疹疫苗'},
                {name:'麻疹疫苗'},
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
                {name:'破伤风疫苗'},
                {name:'甲肝疫苗'},
                {name:'狂犬疫苗'},
                {name:'五联疫苗'},
                {name:'轮状病毒疫苗'},
                {name:'流感疫苗'},
                {name:'HIB疫苗'},
            ]
        }
    },
    render() {
        return (
            <VaccinumList list={this.state.list} />
        )
    }
});

module.exports = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TabBarIOS>

                    <TabBarIOSItem
                        title="疫苗时间表"
                        page={VaccinumSchedule} />

                    <TabBarIOSItem
                        title="计划内疫苗"
                        page={FreeVaccinum} />

                    <TabBarIOSItem
                        title="计划外疫苗"
                        page={FeeVaccinumS} />
                </TabBarIOS>
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
    rowInfo: {
        flex: 1,
    },
    list: {
        alignSelf:'stretch'
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
