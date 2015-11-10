var React = require('react-native');
var { Component, StyleSheet, View, Image } = React;

var ActionButton = require('react-native-action-button');


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex:1, justifyContent:'center', backgroundColor: '#f3f3f3'}}>
                <ActionButton buttonColor="rgba(231,76,60,1)" position = 'center'>
                    <ActionButton.Item
                        buttonColor='#9b59b6'
                        title="New Task"
                        onPress={() => console.log("notes tapped!")}>
                        <Image
                            resizeMode='stretch'
                            source={app.img.tabnav_list}
                            style={styles.icon} />
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor='#3498db'
                        title="Notifications"
                        onPress={() => {}}>
                        <Image
                            resizeMode='stretch'
                            source={app.img.tabnav_list}
                            style={styles.icon} />
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor='#1abc9c'
                        title="All Tasks"
                        onPress={() => {}}>
                        <Image
                            resizeMode='stretch'
                            source={app.img.tabnav_list}
                            style={styles.icon} />
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }
}

module.exports = App;

var styles = StyleSheet.create({
    icon: {
        width:25,
        height:25,
    },
});
