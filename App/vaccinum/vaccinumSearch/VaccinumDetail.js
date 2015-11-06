'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} = React;

var InfoItem = React.createClass({
    render() {
        return (
            <View style={styles.infoItem}>
                <View style={styles.infoItemPre}>
                    <Image
                        resizeMode='stretch'
                        source={this.props.icon}
                        style={styles.infoItemIcon} />
                    <Text style={styles.infoItemLabel}>
                        {this.props.label}
                    </Text>
                </View>
                <View style={styles.separator} />
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
            type:'加强',
            date:'2012-10-13',
            location: '贵阳市南明区大西门',
            name: '百白破',
            factory: '云南昆明制药厂',
            unit: '贵阳妇幼保健院',
        }
    },
    render() {
        return (
            <View style={styles.container}>
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="免疫类型："
                    value={this.state.type}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="接种日期："
                    value={this.state.date}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="接种地点："
                    value={this.state.location}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="疫苗名称："
                    value={this.state.factory}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="疫苗生产厂家："
                    value={this.state.unit}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="接种单位："
                    value={this.state.type}
                    />
            </View>
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoItem: {
        marginTop: 20,
    },
    infoItemPre: {
        flexDirection: 'row',
        margin: 10,
    },
    infoItemIcon: {
        marginLeft: 10,
        width:25,
        height:25,
        marginRight: 10,
    },
    infoItemLabel: {
        fontSize:16,
        color:'#EE6A50',
    },
    infoItemValue: {
        marginTop:10,
        marginLeft: 80,
    },
    separator: {
        height: 2,
        width: 120,
        backgroundColor: '#CCC'
    },
});
