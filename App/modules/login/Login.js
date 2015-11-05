'use strict';

var React = require('react-native');
var Home = require('../home');
var Register = require('./Register.js');
var ForgetPassword = require('./ForgetPassword.js');

var {
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity,
    requireNativeComponent,
} = React;

var sr = app.Screen;
var RTImage = app.RTImage;
var POST = app.POST;
var Des = require('react-native-des');

module.exports = React.createClass({
    doLogin: function() {
        Des.encrypt("fangyunjiang is a good developer", "ABCDEFGH", function(base64) {
            console.log(base64);
            Des.decrypt(base64, "ABCDEFGH", function(text) {
                console.log(text);
            });
        });
        // this.doLoginSuccess();
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
                <TouchableOpacity
                    onPress={this.doLogin}
                    style={styles.btnLoginContainer}>
                    <Text>登录</Text>
                </TouchableOpacity>
                {/*忘记密码按钮*/}
                <TouchableOpacity
                    onPress={this.doShowForgetPassword}
                    style={styles.btnForgetPassWordContainer}>
                    <Text>找回密码</Text>
                </TouchableOpacity>
                {/*注册按钮*/}
                <TouchableOpacity
                    onPress={this.doShowRegister}
                    style={styles.btnRigisterContainer}>
                    <Text>注册</Text>
                </TouchableOpacity>
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
        top: sr.mh-sr.hs(170)/2,
        backgroundColor: '#BBFFFF',
        color:'white'
    },
    txtPassWord: {
        position: 'absolute',
        width:sr.ws(120),
        height:sr.hs(30),
        left: sr.mw-sr.ws(105)/2,
        top: sr.mh-sr.hs(60)/2,
        backgroundColor: '#BBFFFF',
        color:'white'
    },
    btnLoginContainer: {
        position: 'absolute',
        width:sr.ws(70),
        height:sr.hs(30),
        left: sr.mw-sr.ws(30)/2,
        top:sr.mh+sr.hs(150)/2,
        backgroundColor: 'transparent'
    },
    btnForgetPassWordContainer: {
        position: 'absolute',
        width:sr.ws(70),
        height:sr.hs(30),
        left: 5,
        bottom: 5,
        backgroundColor: 'transparent'
    },
    btnRigisterContainer: {
        position: 'absolute',
        width:sr.ws(70),
        height:sr.hs(30),
        right: 5,
        bottom:5,
        backgroundColor: 'transparent'
    }
});
