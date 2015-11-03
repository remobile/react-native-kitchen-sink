'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View,
} = React;

var AImage = require('react-native-image-animation');
module.exports = React.createClass({
    animationImages:[
        require('image!loading_1'),
        require('image!loading_2'),
        require('image!loading_3'),
        require('image!loading_4'),
        require('image!loading_5'),
        require('image!loading_6'),
        require('image!loading_7'),
        require('image!loading_8'),
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
