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
					text: '',
				};
			},
			onChange(text) {
				this.setState({text:text});
			}
			doSubmit() {
				},
    render() {
        return (
            <View style={styles.container}>
                <InputText style={styles.input} onChange={this.onChange}/>
                 <Button style={styles.btnSubmit} onPress={this.doSubmit} />Ã·Ωª</Button>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnSubmit: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
