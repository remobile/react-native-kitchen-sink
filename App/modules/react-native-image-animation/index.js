'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
} = React;

var AImage = require('@remobile/react-native-image-animation');
module.exports = React.createClass({
    animationImages:[
        app.img.loading_1,
        app.img.loading_2,
        app.img.loading_3,
        app.img.loading_4,
        app.img.loading_5,
        app.img.loading_6,
        app.img.loading_7,
        app.img.loading_8,
    ],
    render: function() {
        return (
            <View style={styles.container}>
                <AImage
                    resizeMode='stretch'
                    animationRepeatCount= {0}
                    animationDuration={200}
                    animationImages={this.animationImages}
                    style={styles.image} />
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
        width:100,
        height:100
    }
});
