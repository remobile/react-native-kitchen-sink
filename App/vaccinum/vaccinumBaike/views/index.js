'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
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

module.exports = React.createClass({
    getInitialState () {
        return {
            index:0
        };
    },
    render() {
        var page = [
            <VaccinumSchedule />
            ,
            <FreeVaccinum />
            ,
            <FeeVaccinum/>
        ][this.state.index];

        return (
            <View style={styles.container}>
                <SegmentedView
                    titles={["疫苗时间表", "计划内疫苗", "计划外疫苗"]}
                    index={this.state.index}
                    stretch={true}
                    style={{flex:0}}
                    onPress={index => this.setState({index})}
                    selectedTitleStyle={{color:'blue'}}
                    titleStyle={{fontSize:16, fontWeight:'800'}}
                    />
                <View style={styles.pageContainer}>
                    {page}
                </View>
            </View>
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageContainer: {
        flex: 1,
    },
});
