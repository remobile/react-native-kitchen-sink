'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;

var POST = app.POST;

var Toast = require('@remobile/react-native-toast').show;

var PersonalInfo = require('../data/PersonalInfo.js');
var Settings = require('../settings/index.js');
var VaccinumSearch = require('../vaccinumSearch/index.js');
var VaccinumBaike = require('../vaccinumBaike/index.js');
var HistoryInfo = require('../data/HistoryInfo.js');
var PersonalInfo = require('../data/PersonalInfo.js');

var CCTouchable =  React.createClass({
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={0.2}
                style={this.props.style}
                >
                {this.props.children}
            </TouchableOpacity>
        )
    }
});

module.exports = React.createClass({
    getInitialState() {
        var info = PersonalInfo.info||{};
        var historyInfo = HistoryInfo.info||{};
        return {
            username: info.username,
            birthday: info.birthday,
            nextVaccinumTime: historyInfo.vaccineTime,
            nextVaccinumName: historyInfo.vaccineCode,
        };
    },
    doGetHistoryInfo() {
        var userid = PersonalInfo.info.userid;
        var param = {userId: userid};
        POST(app.route.ROUTE_VACCINUM_HISTORY_LIST, param, this.doGetHistoryInfoSuccess, this.doGetHistoryInfoFailed);
    },
    doGetHistoryInfoSuccess(data) {
        if (data.success) {
            var context = data.context;
            var content = {
                nextVaccinumTime: context.vaccineTime,
                nextVaccinumName: context.vaccineCode,
            };
            this.setState({
                nextVaccinumTime:content.nextVaccinumTime,
                nextVaccinumName:content.nextVaccinumName,
            });
            HistoryInfo.set(context);
        } else {
            Toast("获取主页信息失败");
        }
    },
    doGetHistoryInfoFailed(error) {
        Toast("获取主页信息失败");
    },
    enterSettings() {
        app.navigator.push({
            title: '设置',
            component: Settings,
        });
    },
    enterPersonal(){
        app.navigator.push({
            title: '个人中心',
            component: app.module.Personal,
            rightButton: {  image: app.img.tabnav_list, handler: this.enterSettings},
        });
    },
    enterVaccinumSearch(){
        app.navigator.push({
            title: '疫苗查询',
            component: VaccinumSearch,
        });
    },
    enterVaccinumBaike(){
        app.navigator.push({
            title: '疫苗百科',
            component: VaccinumBaike,
        });
    },
    componentDidMount() {
        if (HistoryInfo.needUpdate()) {
            this.doGetHistoryInfo();
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <CCTouchable
                    onPress={this.enterPersonal}
                    style={styles.personalContainer}
                    >
                    <View style={styles.headContainer}>
                        <Image
                            resizeMode='stretch'
                            source={app.img.personalHead}
                            style={styles.head} />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.username}>
                                {this.state.username}
                            </Text>
                            <Text style={styles.birthday}>
                                {this.state.birthday}
                            </Text>
                        </View>
                        <View style={styles.nextVaccinumTimeContainer}>
                            <Text style={styles.label}>下次接种时间:</Text>
                            <Text style={styles.nextVaccinumTime}>
                                {this.state.nextVaccinumTime}
                            </Text>
                        </View>
                        <View style={styles.nextVaccinumNameContainer}>
                            <Text style={styles.label}>疫苗名称:</Text>
                            <Text style={styles.nextVaccinumName}>
                                {this.state.nextVaccinumName}
                            </Text>
                        </View>
                    </View>
                </CCTouchable>

                <CCTouchable
                    onPress={this.enterVaccinumSearch}
                    style={styles.vaccinumSearchContainer}
                    >
                    <Image
                        resizeMode='contain'
                        source={app.img.vaccinumSearch}
                        style={styles.menuImage} />
                    <Text style={styles.menuText}>接种疫苗查询</Text>
                </CCTouchable>

                <CCTouchable
                    onPress={this.enterVaccinumBaike}
                    style={styles.vaccinumBaikeContainer}
                    >
                    <Image
                        resizeMode='contain'
                        source={app.img.vaccinumBaike}
                        style={styles.menuImage} />
                    <Text style={styles.menuText}>疫苗百科</Text>
                </CCTouchable>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
    },
    personalContainer:{
        flex:2,
        backgroundColor:'#D8BFD8',
    },
    vaccinumSearchContainer:{
        flex:1,
        borderTopWidth:2,
        justifyContent:'center',
        alignItems:'center',
    },
    vaccinumBaikeContainer:{
        flex:1,
        borderTopWidth:2,
        justifyContent:'center',
        alignItems:'center',
    },
    //顶部栏
    headContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    infoContainer:{
        height:120,
        justifyContent:'space-around',
        alignItems:'center',
    },
    head:{
        width:150,
        height:150,
        borderRadius:75,
    },
    nameContainer:{
        flexDirection:'row'
    },
    username:{
        fontSize:24,
        color:'#CD6839',
        marginRight:20,
    },
    birthday:{
        fontSize:14,
        color:'#FF6347',
        alignSelf:'center',
    },
    nextVaccinumTimeContainer:{
        flexDirection:'row'
    },
    label:{
        fontSize:14,
        marginRight:20,
    },
    nextVaccinumTime:{
        fontSize:18,
        color:'red',
    },
    nextVaccinumNameContainer:{
        flexDirection:'row'
    },
    nextVaccinumName:{
        fontSize:18,
        color:'red',
    },
    //菜单栏
    menuImage:{
        flex:1,
    },
    menuText:{
        fontSize:14,
        margin:20,
    },
});
