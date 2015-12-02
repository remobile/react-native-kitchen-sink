'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
} = React;

var VaccinumDetail = require('./VaccinumDetail.js');
var HistoryInfo = require('../data/HistoryInfo.js');

var testList = [
    {vaccineName:'乙肝疫苗 第1针', Time:'2015-12-23'},
    {vaccineName:'百白破 第1针', Time:'2015-12-23'},
    {vaccineName:'乙肝疫苗 第2针', Time:'2015-12-23'},
    {vaccineName:'丙肝疫苗', Time:'2015-12-23'},
    {vaccineName:'破伤风', Time:'2015-12-23'},
];

var testDetail = {
    immuneType:'加强',
    Time:'2012-10-13',
    inoculationAddr: '贵阳市南明区大西门',
    vaccineName: '百白破',
    imanufacturer: '云南昆明制药厂',
    inoculationUunit: '贵阳妇幼保健院',
}

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

module.exports = React.createClass({
    getInitialState: function() {
        var list = HistoryInfo.info.list||[];
        return {
            list:list,
        };
    },
    onPressRow(obj) {
        app.navigator.push({
            title: '疫苗详情',
            component: VaccinumDetail,
            passProps:{data: obj},
        });
    },
    renderRow(obj) {
        return (
            <TouchableOpacity
                onPress={this.onPressRow.bind(null, obj)}
                activeOpacity={0.2}
                style={styles.row}>
                <View style={styles.rowInfo}>
                    <Text style={styles.title} >
                        {obj.vaccineName}
                    </Text>

                    <Text style={styles.Time} >
                        {obj.Time}
                    </Text>
                </View>
                <Image
                    resizeMode='contain'
                    source={app.img.list_arrow}
                    style={styles.arrow} />
            </TouchableOpacity>
        )
    },
    render: function() {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.list}
                    dataSource={ds.cloneWithRows(this.state.list)}
                    renderRow={this.renderRow}
                    />
            </View>
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:5,
        marginBottom:5,
        marginHorizontal:20,
        borderWidth:1,
        borderColor:'gray',
        backgroundColor:'#E6E6FA',
    },
    rowInfo: {
        flex: 1,
    },
    list: {
        alignSelf:'stretch',
        marginTop: 30,
    },
    title: {
        fontSize: 18,
        margin: 5,
    },
    Time: {
        fontSize: 12,
        marginLeft: 5,
        marginBottom: 5,
    },
    arrow: {
        marginRight:20
    },
});
