'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} = React;

var MenuItem = React.createClass({
    render() {
        return (
        <TouchableHighlight
                    onPress={this.props.onPress}
                    underlayColor="#EEB422">
            <View style={styles.menuItem}>
              <Image
				                resizeMode='stretch'
				                source={this.props.icon)}
				                style={styles.infoItemIcon} />
				              <text style={styles.infoItemLabel}>{this.props.label}</text>
				               <Image
				                resizeMode='stretch'
				                source={require('image!arrow'))}
				                style={styles.infoItemArrow} />
            </View>
             </TouchableHighlight>
        );
    }
});


module.exports = React.createClass({
		getInitialState() {
				return {
					version: '',
					birthday: '',
					mothername: '',
					phone: '',
					infoBinded: false
				};
			},
			showFeedback() {},
			showAbout() {},
			showLawInfo() {},
    render() {
        return (
            <View style={styles.container}>
                <Image
				                resizeMode='stretch'
				                source={require('image!companyLogo')}
				                style={styles.vaccinumSearch} />
				             <View style={styles.nameContainer}>
				             	 <text>{this.state.username}</text>
				               <text>{this.state.birthday}</text>
				             </View>
				              <View style={styles.nextTimeContainer}>
				              	<text>{this.state.version}</text>
				             </View>
				              <View style={styles.nextVaccinumSearchContainer}>
				               	<text>{this.state.company}</text>
				             </View>
            		</View>
            		 
            		<View style={styles.menuContainer}>
            				<MenuItem 
            					icon={require('image!xx')}
            					label="意见反馈"
            					onPress={this.showFeedback}
            				/>
            				<MenuItem 
            					icon={require('image!xx')}
            					label="关于"
            					onPress={this.showAbout}
            				/>
            				<MenuItem 
            					icon={require('image!xx')}
            					label="软件许可证"
            					onPress={this.showLawInfo}
            				/>
            		</View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
     menuContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuItem: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
    infoItemIcon: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
    infoItemLabel: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
     infoItemArrow: {
    	  flex: 1,
    	  flexDirection: 'row',
    },
});
