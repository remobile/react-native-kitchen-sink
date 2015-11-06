'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;

var Feedback = require('./FeedBack.js');
var About = require('./About.js');
var LawInfo = require('./LawInfo.js');

var MenuItem = React.createClass({
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                activeOpacity={0.2}
                style={styles.menuItem}
                >

                <Image
                    resizeMode='contain'
                    source={this.props.icon}
                    style={styles.menuItemIcon} />

                <Text style={styles.menuItemLabel}>
                    {this.props.label}
                </Text>

                <Image
                    resizeMode='contain'
                    source={require('image!iau')}
                    style={styles.menuItemArrow} />
            </TouchableOpacity>
        );
    }
});


module.exports = React.createClass({
    getInitialState() {
        return {
            version: '1.0.1',
            company: '贵州恒智通创信息产业有限公司',
        }
    },
    showFeedback() {
        app.navigator.push({
            title: '意见反馈',
            component: Feedback,
            passProps: {}
        });
    },
    showAbout() {
        app.navigator.push({
            title: '关于',
            component: About,
            passProps: {}
        });
    },
    showLawInfo() {
        app.navigator.push({
            title: '软件许可协议',
            component: LawInfo,
            passProps: {}
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.companyContainer}>
                    <Image
                        resizeMode='contain'
                        source={require('../image/companyLogo.png')}
                        style={styles.companyLogo} />
                    <Text style={styles.version} >
                        {this.state.version}
                    </Text>
                    <Text style={styles.company} >
                        {this.state.company}
                    </Text>
                </View>


                <View style={styles.menuContainer}>
                    <MenuItem
                        icon={require('image!tabnav_list')}
                        label="意见反馈"
                        onPress={this.showFeedback}
                        />
                    <MenuItem
                        icon={require('image!tabnav_list')}
                        label="关于"
                        onPress={this.showAbout}
                        />
                    <MenuItem
                        icon={require('image!tabnav_list')}
                        label="软件许可证"
                        onPress={this.showLawInfo}
                        />
                </View>
            </View>
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    companyContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D8BFD8',
    },
    companyLogo: {
        flex:1,
    },
    version: {
        fontSize:12,
        margin:10,
    },
    company: {
        fontSize:16,
        margin:10,
    },
    menuContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5,
        marginBottom:5,
        borderWidth:1,
    },
    menuItemIcon: {
        marginLeft: 50,
        width:25,
        height:25,
        marginRight: 10,
    },
    menuItemLabel: {
        width:sr.mw,
        fontSize: 18,
        marginVertical: 20,
    },
    menuItemArrow: {
        marginRight:20
    }
});
