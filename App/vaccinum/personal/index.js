'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    NativeAppEventEmitter,
} = React;

var POST = app.POST;

var Button = require('@remobile/react-native-simple-button');
var DateTimePicker = require('@remobile/react-native-datetime-picker');
var Camera = require('@remobile/react-native-camera');
var ActionSheet = require('@remobile/react-native-action-sheet');
var FileTransfer = require('@remobile/react-native-file-transfer');
var Toast = require('@remobile/react-native-toast').show;

var PersonalInfo = require('../data/PersonalInfo.js');

var InfoItem = React.createClass({
    render() {
        return (
            <View style={styles.infoItem}>
                <Image
                    resizeMode='stretch'
                    source={this.props.icon}
                    style={styles.infoItemIcon} />
                <Text style={styles.infoItemLabel}>
                    {this.props.label}
                </Text>
                <TextInput
                    style={styles.infoItemValue}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    editable={this.props.editable}
                    keyboardType={this.props.keyboardType}
                    />
            </View>
        );
    }
});


module.exports = React.createClass({
    getInitialState() {
        var info = PersonalInfo.info||{};
        return {
            infoBinded: PersonalInfo.info,
            userhead: PersonalInfo.userhead||app.img.personalHead,
            username: info.username||'张三',
            birthday: info.birthday||'2015-11-10',
            mothername: info.mothername||'张三母亲',
            phone: info.phone||'136847630231',
            actionSheetVisible: false,
        }
    },
    doShowCameraMenu() {
        this.setState({actionSheetVisible:true});
    },
    onHideCameraMenu() {
        this.setState({actionSheetVisible:false});
    },
    doBindInfo() {
        var state = this.state;
        if (!state.username) {
            Toast("请输入宝宝名字");
            return;
        }
        if (!state.birthday) {
            Toast("请输入出生日期");
            return;
        }
        if (!state.mothername) {
            Toast("请输入母亲名字");
            return;
        }
        if (!state.phone) {
            Toast("请输入联系电话");
            return;
        }
        var param = {
            babyName: state.username,
            babyBirthday: state.birthday,
            motherName: state.mothername,
            phone: state.phone,
        };
        POST(app.route.ROUTE_BIND_INFO, param, this.doBindInfoSuccess, this.doBindInfoFailed);
    },
    doBindInfoSuccess(data) {
        if (data.success) {
            var state = this.state;
            var content = {
                userid: data.context.userId,
                username: state.username,
                birthday: state.birthday,
                mothername: state.mothername,
                phone: state.phone,
            };
            PersonalInfo.set(content).then(()=>{
                app.navigator.replacePreviousAndPop({
                    title: '主页',
                    component: app.module.Main
                });
            });
        } else {
            Toast("绑定失败");
        }
    },
    doBindInfoFailed(error) {
        Toast("绑定失败");
    },
    cancelBind() {
        this.setState({infoBinded:false});
    },
    uploadUserHead(file) {
        var options = new FileTransfer.FileUploadOptions();
        options.fileKey = 'file';
        options.fileName = file.substr(file.lastIndexOf('/')+1);
        options.mimeType = 'image/jpeg';

        var params = {};
        params.username = this.state.username;

        options.params = params;
        var fileTransfer = new FileTransfer();

        this.uploadProgress = NativeAppEventEmitter.addListener(
            'uploadProgress',
            (progress) => console.log(progress)
        );

        fileTransfer.upload(file, app.route.ROUTE_UPLOAD_USER_HEAD, this.uploadSuccessCallback, this.uploadErrorCallback, options);
    },
    uploadSuccessCallback(data) {
        console.log(data);
        Toast("上传成功");
    },
    uploadErrorCallback() {
        Toast("上传失败");
    },
    selectPicture() {
        this.onHideCameraMenu();
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.PNG,
        };
        Camera.getPicture(options, (file) => {
            this.setState({userhead: {uri:file}});
            this.uploadUserHead(file);
        });
    },
    takePicture() {
        this.onHideCameraMenu();
        var options = {
            quality: 50,
            allowEdit: true,
            destinationType: Camera.DestinationType.FILE_URI,
        };
        Camera.getPicture(options, (file) => {
            this.setState({userhead: {uri:file}});
            this.uploadUserHead(file);
        });
    },
    setBirthDay() {
        var date = app.utils.str2date(this.state.birthday);
        this.picker.showDatePicker(date, (d)=>{
            this.setState({birthday:app.utils.date2str(d)});
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headContainer}>
                    <TouchableOpacity
                        onPress={this.state.infoBinded?this.doShowCameraMenu:null}
                        underlayColor="#EEB422">

                        <Image
                            resizeMode='stretch'
                            source={this.state.userhead}
                            style={styles.head} />

                    </TouchableOpacity>

                </View>

                <View style={styles.separator} />
                <View style={styles.infoContainer}>
                    <InfoItem
                        icon={app.img.tabnav_list}
                        label="宝宝名字："
                        value={this.state.username}
                        onChangeText={username=>{this.setState({username})}}
                        editable={!this.state.infoBinded}
                        />
                    <View style={styles.infoItem}>
                        <Image
                            resizeMode='stretch'
                            source={app.img.tabnav_list}
                            style={styles.infoItemIcon} />
                        <Text style={styles.infoItemLabel}>
                            出生日期：
                        </Text>
                        <TouchableOpacity onPress={!this.state.infoBinded?this.setBirthDay:null}>
                            <View style={styles.infoItemText}>
                                <Text numberOfLines={1}>
                                    {this.state.birthday}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <InfoItem
                        icon={app.img.tabnav_list}
                        label="母亲名字："
                        value={this.state.mothername}
                        onChangeText={mothername=>{this.setState({mothername})}}
                        editable={!this.state.infoBinded}
                        />
                    <InfoItem
                        icon={app.img.tabnav_list}
                        label="联系电话："
                        value={this.state.phone}
                        onChangeText={phone=>{this.setState({phone})}}
                        editable={!this.state.infoBinded}
                        keyboardType='phone-pad'
                        />
                </View>

                <View style={styles.separator} />
                <View style={styles.buttonContainer}>
                    {this.state.infoBinded?
                        [
                            <Text key="text">宝宝信息已经绑定</Text>
                            ,
                            <Button
                                 key="button"
                                onPress={this.cancelBind}
                                style={styles.cancelBind}
                                textStyle={{color:'red', fontSize:12}}>解除绑定</Button>
                        ]
                        :
                        <Button onPress={this.doBindInfo}>绑定宝宝信息</Button>
                    }
                </View>
                <ActionSheet
                    cancelText="取消"
                    visible={this.state.actionSheetVisible}
                    onCancel={this.onHideCameraMenu} >
                    <ActionSheet.Button onPress={this.selectPicture}>相册</ActionSheet.Button>
                    <ActionSheet.Button onPress={this.takePicture}>照相</ActionSheet.Button>
                </ActionSheet>
                <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
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
    head:{
        width:150,
        height:150,
        borderRadius:75,
    },
    infoContainer: {
        flex: 3,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        paddingTop:50,
        paddingBottom:50,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoItemIcon: {
        marginLeft: 50,
        width:25,
        height:25,
        marginRight: 10,
    },
    infoItemLabel: {
    },
    infoItemValue: {
        width:120,
        height:30,
        backgroundColor: '#F0F0F0',
    },
    infoItemText: {
        width:120,
        height:30,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height:60,
    },
    separator: {
        height: 10,
        backgroundColor: '#CCC'
    },
    cancelBind: {
        position:'absolute',
        bottom:10,
        right:20
    }
});
