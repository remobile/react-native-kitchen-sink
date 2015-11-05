'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} = React;


module.exports = React.createClass({
    getInitialState() {
        return {
            username: '',
            birthday: '',
            nextVaccinumTime: '',
            nextVaccinumName: ''
        };
    },
    enterPersonal(){
    },
    enterVaccinumSearch(){
    },
    enterVaccinumBaike(){
    },
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={this.enterPersonal}
                    underlayColor="#EEB422">
                    <View style={styles.personalContainer}>
                    </View>
                </TouchableHighlight>


                <TouchableHighlight
                    onPress={this.enterVaccinumSearch}
                    underlayColor="#EEB422">
                    <View style={styles.vaccinumSearchContainer}>
                    </View>
                </TouchableHighlight>


                <TouchableHighlight
                    onPress={this.enterVaccinumBaike}
                    underlayColor="#EEB422">
                    <View style={styles.vaccinumBaikeContainer}>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    personalContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextVaccinumSearchContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        background
    },
    vaccinumSearchContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
