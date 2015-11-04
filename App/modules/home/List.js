'use strict';

var React = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    ListView,
    Image
} = React;

var TimerMixin = require('react-timer-mixin');
var RefreshInfiniteListView = require('react-native-refresh-infinite-listview');

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) // assumes immutable objects
module.exports = React.createClass({
    mixins: [TimerMixin],
    data: {index: 0, list:[]},
    getData(init) {
        var total = 5;
        if (init) {
        this.data.index = 0;
        this.data.list = [];
        total = Math.floor(Math.random()*0);
    }
        for (var i=0; i<total; i++) {
            this.data.list[this.data.index] = "Row" + this.data.index;
            this.data.index++;
        }
    },
    getInitialState() {
        this.getData(true);
        return {
            isLoadedAllData: false,
            dataSource: ds.cloneWithRows(this.data.list)
        }
    },
    onRefresh() {
        this.getData(true);
        this.setTimeout(()=>{
            this.list.hideHeader();
            this.setState({dataSource: ds.cloneWithRows(this.data.list)});
        }, 1000);
    },
    onInfinite() {
        this.getData();
        this.setTimeout(()=>{
            this.list.hideFooter();
            this.setState({dataSource: ds.cloneWithRows(this.data.list)});
        }, 1000);
    },
    renderRow(text) {
        return (
            <View style={styles.row}>
                <Image
                    resizeMode='stretch'
                    source={require('image!tabnav_list')}
                    style={styles.icon} />
                <Text style={styles.text} >
                    {text}
                </Text>
                <Image
                    resizeMode='contain'
                    source={require('image!iau')}
                    style={styles.arrow} />
            </View>
        )
    },
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{height:20}} />
                <RefreshInfiniteListView
                    ref = {(list) => {this.list= list}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    initialListSize={30}
                    scrollEventThrottle={10}
                    style={{backgroundColor:'transparent'/*,top:100, left:10, width:200, height:300, position:'absolute'*/}}
                    onRefresh = {this.onRefresh}
                    onInfinite = {this.onInfinite}
                    >
                </RefreshInfiniteListView>
            </View>
        )
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    row: {
        height:60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    list: {
        alignSelf:'stretch'
    },
    icon: {
        marginLeft: 10,
        width:25,
        height:25,
        marginRight: 10,
    },
    text: {
        width:sr.w-70
    },
    arrow: {
    },
});
