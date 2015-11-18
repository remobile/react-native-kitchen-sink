'use strict';

var React = require('react-native');
var {
    StyleSheet,
    View
} = React;

var MarqueeLabel = require('@remobile/react-native-marquee-label');
module.exports = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                <MarqueeLabel style={styles.marqueeLabel}
                     text="fangyunjiang is a good developer"
                     marqueeType="MLContinuous"
                     scrollDuration={3.0}
                     fadeLength={0.0}
                     leadingBuffer={0.0}
                     trailingBuffer={50}
                     textColor='red'
                     font={{fontSize:80, fontWeight: 0.4}}
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

    marqueeLabel: {
        backgroundColor: '#FFFFE0',
        width:200,
        height:140
    }
});
