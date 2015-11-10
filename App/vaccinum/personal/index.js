'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} = React;

var POST = app.POST;

var Button = require('react-native-simple-button');
var PersonalInfo = require('../data/PersonalInfo.js');

var InfoItem = React.createClass({
    render() {
        return (
            <View style={styles.infoItem}>
                <Image
                    resizeMode='stretch'
                    source={this.props.icon}
                    style={styles.infoItemIcon} />
                <Text style={styles.infoItemLabel}>
                    {this.props.label}
                </Text>
                <TextInput
                    style={styles.infoItemValue}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    editable = {this.props.editable}
                    />
            </View>
        );
    }
});


module.exports = React.createClass({
    getInitialState() {
        var info = PersonalInfo.info||{};
        return {
            infoBinded: PersonalInfo.info,
            username: info.username||'方远航',
            birthday: info.birthday||'2012-10-13',
            mothername: info.mothername||'裴克娟',
            phone: info.phone||'18085192480',
        }
    },
    doShowCameraMenu() {
    },
    doBindInfo() {
        var state = this.state;
        if (!state.username) {
            app.Messagebox("请输入宝宝名字");
            return;
        }
        if (!state.birthday) {
            app.Messagebox("请输入出生日期");
            return;
        }
        if (!state.mothername) {
            app.Messagebox("请输入母亲名字");
            return;
        }
        if (!state.phone) {
            app.Messagebox("请输入联系电话");
            return;
        }
        var param = {
            username: state.username,
            birthday: state.birthday,
            mothername: state.mothername,
            phone: state.phone,
        };
        POST(app.route.ROUTE_BIND_INFO, param, this.doBindInfoSuccess, this.doBindInfoFailed);
    },
    doBindInfoSuccess(data) {
        if (data.success) {
            PersonalInfo.set(data.content).then(()=>{
                app.navigator.replacePreviousAndPop({
                    title: '主页',
                    component: app.module.Main
                });
            });
        } else {
            app.Messagebox("绑定失败");
        }
    },
    doBindInfoFailed(error) {
        app.Messagebox("绑定失败");
    },
    cancelBind() {
        this.setState({infoBinded:false});
    },
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headContainer}>
                    <TouchableOpacity
                        onPress={this.doShowCameraMenu}
                        underlayColor="#EEB422">

                        <Image
                            resizeMode='stretch'
                            source={app.img.personalHead}
                            style={styles.head} />

                    </TouchableOpacity>

                </View>

                <View style={styles.separator} />
                <View style={styles.infoContainer}>
                    <InfoItem
                        icon={app.img.tabnav_list}
                        label="宝宝名字："
                        value={this.state.username}
                        onChangeText={username=>{this.setState({username})}}
                        editable={!this.state.infoBinded}
                        />
                    <InfoItem
                        icon={app.img.tabnav_list}
                        label="出生日期："
                        value={this.state.birthday}
                        onChangeText={birthday=>{this.setState({birthday})}}
                        editable={!this.state.infoBinded}
                        />
                    <InfoItem
                        icon={app.img.tabnav_list}
                        label="母亲名字："
                        value={this.state.mothername}
                        onChangeText={mothername=>{this.setState({mothername})}}
                        editable={!this.state.infoBinded}
                        />
                    <InfoItem
                        icon={app.img.tabnav_list}
                        label="联系电话："
                        value={this.state.phone}
                        onChangeText={phone=>{this.setState({phone})}}
                        editable={!this.state.infoBinded}
                        />
                </View>

                <View style={styles.separator} />
                <View style={styles.buttonContainer}>
                    {this.state.infoBinded?
                        [
                            <Text>宝宝信息已经绑定</Text>
                            ,
                            <Button
                                onPress={this.cancelBind}
                                style={styles.cancelBind}
                                textStyle={{color:'red', fontSize:12}}>解除绑定</Button>
                        ]
                        :
                        <Button onPress={this.doBindInfo}>绑定宝宝信息</Button>
                    }
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    head:{
        width:150,
        height:150,
        borderRadius:75,
    },
    infoContainer: {
        flex: 3,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingTop:50,
        paddingBottom:50,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoItemIcon: {
        marginLeft: 50,
        width:25,
        height:25,
        marginRight: 10,
    },
    infoItemLabel: {
    },
    infoItemValue: {
        width:120,
        height:30,
        backgroundColor: '#F0F0F0',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
    },
    separator: {
        height: 10,
        backgroundColor: '#CCC'
    },
    cancelBind: {
        position:'absolute',
        bottom:10,
        right:20
    }
});
