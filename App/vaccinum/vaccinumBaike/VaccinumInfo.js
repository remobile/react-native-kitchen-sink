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
    render() {
        return (
            <ScrollView style={styles.container}>
                <InfoItem
                    icon={app.img.companyLogo}
                    label="预防疾病："
                    value={this.props.toDisease}
                    />
                <InfoItem
                    icon={app.img.companyLogo}
                    label="接种对象："
                    value={this.props.vaccinationObject}
                    />
                <InfoItem
                    icon={app.img.companyLogo}
                    label="免疫效果："
                    value={this.props.immuneEffect}
                    />
                <InfoItem
                    icon={app.img.companyLogo}
                    label="禁忌："
                    value={this.props.taboo}
                    />
                <InfoItem
                    icon={app.img.companyLogo}
                    label="注意事项："
                    value={this.props.note}
                    />
                <InfoItem
                    icon={app.img.companyLogo}
                    label="接种反应："
                    value={this.props.inoculationReaction}
                    />
            </ScrollView>
        );
    }
});

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
