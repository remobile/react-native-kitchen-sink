'use strict';

var React = require('react-native');

var {
    StyleSheet,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
} = React;


module.exports = React.createClass({
    render() {
        return (
            <ScrollView style={styles.container}>
                <Image
                    resizeMode='stretch'
                    source={app.img.vaccinumSchedule}
                    style={styles.image} />
            </ScrollView>
        );
    }
});

var sr = app.Screen;
var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width:sr.w
    },
});
