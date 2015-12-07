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
};



module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <CacheImage
                    resizeMode='stretch'
                    defaultImage={app.img.tabnav_list}
                    url="http://localhost:3000/1.png"
                    style={styles.image}
                    cacheId={CacheImageIdMgr.CACHE_ID_USER_HEAD}
                    />
                    <CacheImage
                        resizeMode='stretch'
                        defaultImage={app.img.tabnav_list}
                        url="http://localhost:3000/1.png"
                        style={styles.image}
                        cacheId={CacheImageIdMgr.CACHE_ID_USER_HEAD1}
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
