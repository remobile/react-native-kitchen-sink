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

var list = [
    {title:'乙肝疫苗 第1针', time:'2015-12-23'},
    {title:'百白破 第1针', time:'2015-12-23'},
    {title:'乙肝疫苗 第2针', time:'2015-12-23'},
    {title:'丙肝疫苗', time:'2015-12-23'},
    {title:'破伤风', time:'2015-12-23'},
];


module.exports = React.createClass({
    getInitialState: function() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(list),

        };
    },
    onPressRow(obj) {
        app.navigator.push({
            title: '疫苗详情',
            component: VaccinumDetail,
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
                        {obj.title}
                    </Text>

                    <Text style={styles.time} >
                        {obj.time}
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
                    dataSource={this.state.dataSource}
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
    time: {
        fontSize: 12,
        marginLeft: 5,
        marginBottom: 5,
    },
    arrow: {
        marginRight:20
    },
});
