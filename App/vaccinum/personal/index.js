'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;

var Button = require('react-native-simple-button');

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

                <Text style={styles.infoItemValue}>
                    {this.props.value}
                </Text>
            </View>
        );
    }
});


module.exports = React.createClass({
    getInitialState() {
        return {
            username:'方远航',
            birthday:'2012-10-13',
            mothername: '裴克娟',
            phone: '18085192480',
            infoBinded: true,
        }
    },
    doShowCameraMenu() {
    },
    doBindInfo() {
        this.setState({infoBinded:true});
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
                            source={require('../image/personalHead.jpg')}
                            style={styles.head} />

                    </TouchableOpacity>

                </View>

                <View style={styles.separator} />
                <View style={styles.infoContainer}>
                    <InfoItem
                        icon={require('image!tabnav_list')}
                        label="宝宝名字："
                        value={this.state.username}
                        />
                    <InfoItem
                        icon={require('image!tabnav_list')}
                        label="出生日期："
                        value={this.state.birthday}
                        />
                    <InfoItem
                        icon={require('image!tabnav_list')}
                        label="母亲名字："
                        value={this.state.mothername}
                        />
                    <InfoItem
                        icon={require('image!tabnav_list')}
                        label="练习电话："
                        value={this.state.phone}
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
