'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
} = React;

var CacheImage = require('@remobile/react-native-cache-image');

var CacheImageIdMgr = {
    CACHE_ID_USER_HEAD: 0,
    CACHE_ID_USER_HEAD1: 1,
    CACHE_ID_USER_HEAD2: 2,
};

var SERVER = 'http://192.168.1.117:3000/';

module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <CacheImage
                    resizeMode='stretch'
                    defaultImage={app.img.tabnav_list}
                    url={SERVER+"1.png"}
                    style={styles.image}
                    cacheId={CacheImageIdMgr.CACHE_ID_USER_HEAD}
                    />
                <CacheImage
                    resizeMode='stretch'
                    defaultImage={app.img.tabnav_list}
                    url={SERVER+"2.png"}
                    style={styles.image}
                    cacheId={CacheImageIdMgr.CACHE_ID_USER_HEAD1}
                    />
                <CacheImage
                    resizeMode='stretch'
                    defaultImage={app.img.tabnav_list}
                    url={SERVER+"3.png"}
                    style={styles.image}
                    cacheId={CacheImageIdMgr.CACHE_ID_USER_HEAD2}
                    />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image: {
        width:200,
        height:200,
    }
});
