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

var VaccinumInfo = require('./VaccinumInfo.js');


module.exports = React.createClass({
    getInitialState() {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this.props.list),
        };
    },
    onPressRow(obj) {
        app.navigator.push({
            title: obj.vaccineName1,
            component: VaccinumInfo,
            passProps: obj,
        });
    },
    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={rowID}/>
        );
    },
    renderRow(obj) {
        return (
            <View>
                <TouchableOpacity
                    onPress={this.onPressRow.bind(null, obj)}
                    underlayColor="#EEB422">
                    <View style={styles.row}>
                        <Image
                            resizeMode='stretch'
                            source={app.img.loading_8}
                            style={styles.icon} />
                        <Text style={styles.title} >
                            {obj.vaccineName}
                        </Text>

                        <Image
                            resizeMode='contain'
                            source={app.img.list_arrow}
                            style={styles.arrow} />
                    </View>

                </TouchableOpacity>
            </View>
        )
    },
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    style={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
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
        backgroundColor:'#E6E6FA',
    },
    rowInfo: {
        flex: 1,
    },
    icon: {
        marginLeft: 10,
        width:25,
        height:25,
        marginRight: 10,
    },
    list: {
        alignSelf:'stretch'
    },
    title: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCC'
    },
    arrow: {
        marginRight:20,
        marginVertical: 10,
        height: 25
    },
});
