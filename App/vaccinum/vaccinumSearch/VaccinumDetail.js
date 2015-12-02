'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
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
        return this.props.data;
    },
    render() {
        return (
            <ScrollView style={styles.container}>
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="免疫类型："
                    value={this.state.immuneType}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="接种日期："
                    value={this.state.Time}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="接种地点："
                    value={this.state.inoculationAddr}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="疫苗名称："
                    value={this.state.vaccineName}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="疫苗生产厂家："
                    value={this.state.imanufacturer}
                    />
                <InfoItem
                    icon={app.img.tabnav_list}
                    label="接种单位："
                    value={this.state.inoculationUunit}
                    />
            </ScrollView>
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
