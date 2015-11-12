'use strict';

var Button = require('react-native-simple-button');
var React = require('react-native');
var Home = require('../home');
var Register = require('./Register.js');
var ForgetPassword = require('./ForgetPassword.js');

var Des = require('react-native-des');

var {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
} = React;

var sr = app.Screen;
var RTImage = app.RTImage;
var POST = app.POST;

var reactNativeStore = require('react-native-store');
var PersonalInfo = require('../../vaccinum/data/PersonalInfo.js');

module.exports = React.createClass({
    doLogin: function() {
        Des.encrypt("fang", 'ABCDEFGH', function(base64) {
            console.log(base64);
        });
        return;
        if (!this.state.phone) {
            app.Messagebox('手机号码不能为空');
        }
        if (!this.state.password) {
            app.Messagebox('密码不能为空');
            return;
        }
        var param = {phone:this.state.phone, password:this.state.password};
        POST(app.route.ROUTE_LOGIN, param, this.doLoginSuccess, this.doLoginFailed);

    },
    doLoginSuccess: function(data) {
        app.navigator.replace({
            title: '主页',
            component: Home,
            passProps: {},
            fromBottom: true,
        });
    },
    doLoginFailed: function(error) {
        console.log(error);
    },
    doShowForgetPassword: function() {
        app.navigator.push({
            title: '忘记密码',
            component: ForgetPassword,
            passProps: {},
            rightButton: { title: '注册', handler: this.doShowRegister},
            fromLeft: true,
        });
    },
    doShowRegister: function() {
        app.navigator.push({
            title: '注册',
            component: Register,
            passProps: {},
        });
    },
    getInitialState: function() {
        return {
            phone: "",
            password: ""
        };
    },
    render: function() {
        return (
            <View style={styles.container}>
                {/*电话号码输入框*/}
                <TextInput
                    style={styles.txtPhone}
                    onChangeText={(text) => this.setState({phone: text})}
                    />
                {/*密码输入框*/}
                <TextInput
                    style={styles.txtPassWord}
                    onChangeText={(text) => this.setState({password: text})}
                    />
                {/*登录按钮*/}
                <Button onPress={this.doLogin} style={styles.btnLogin}>登录</Button>
                {/*忘记密码按钮*/}
                <Button onPress={this.doShowForgetPassword} style={styles.btnForgetPassWord}>找回密码</Button>
                {/*注册按钮*/}
                <Button onPress={this.doShowRegister} style={styles.btnRigister}>注册</Button>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    txtPhone: {
        position: 'absolute',
        width:sr.ws(120),
        height:sr.hs(30),
        left: sr.mw-sr.ws(105)/2,
        top: sr.mh-sr.hs(240)/2,
        backgroundColor: '#BBFFFF',
        color:'white'
    },
    txtPassWord: {
        position: 'absolute',
        width:sr.ws(120),
        height:sr.hs(30),
        left: sr.mw-sr.ws(105)/2,
        top: sr.mh-sr.hs(120)/2,
        backgroundColor: '#BBFFFF',
        color:'white'
    },
    btnLogin: {
        position: 'absolute',
        left: sr.mw-sr.ws(30)/2,
        top:sr.mh+sr.hs(50)/2,
    },
    btnForgetPassWord: {
        position: 'absolute',
        left: 5,
        bottom: 5,
    },
    btnRigister: {
        position: 'absolute',
        right: 5,
        bottom:5,
    }
});
