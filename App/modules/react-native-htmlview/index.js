'use strict';

var React = require('react-native')
var {Text, View, ListView, StyleSheet, ScrollView} = React

var HTMLView = require('react-native-htmlview')


var htmlContent = '';
htmlContent += '<table border="0" cellpadding="0" cellspacing="0" style="font-size:1em;">';
htmlContent += '    <tr>';
htmlContent += '        <td valign="top">';
htmlContent += '            <p>百度提醒您：在使用百度搜索引擎（以下简称百度）前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用百度，但如果您使用百度，您的使用行为将被视为对本声明全部内容的认可。</p>';
htmlContent += '            <ul>';
htmlContent += '                <li>鉴于百度以非人工检索方式、根据您键入的关键字自动生成到第三方网页的链接，除百度注明之服务条款外，其他一切因使用百度而可能遭致的意外、疏忽、侵权及其造成的损失（包括因下载被搜索链接到的第三方网站内容而感染电脑病毒），百度对其概不负责，亦不承担任何法律责任。</li>';
htmlContent += '                <li>任何通过使用百度而搜索链接到的第三方网页均系他人制作或提供，您可能从该第三方网页上获得资讯及享用服务，百度对其合法性概不负责，亦不承担任何法律责任。</li>';
htmlContent += '                <li>百度搜索结果根据您键入的关键字自动搜索获得并生成，不代表百度赞成被搜索链接到的第三方网页上的内容或立场。</li>';
htmlContent += '                <li>您应该对使用搜索引擎的结果自行承担风险。百度不做任何形式的保证：不保证搜索结果满足您的要求，不保证搜索服务不中断，不保证搜索结果的安全性、正确性、及时性、合法性。因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用百度，百度不承担任何法律责任。</li>';
htmlContent += '                <li>百度尊重并保护所有使用百度用户的个人隐私权，您注册的用户名、电子邮件地址等个人资料，非经您亲自许可或根据相关法律、法规的强制性规定，百度不会主动地泄露给第三方。百度提醒您：您在使用搜索引擎时输入的关键字将不被认为是您的个人隐私资料。</li>';
htmlContent += '                <li>任何网站如果不想被百度收录（即不被搜索到），应该及时向百度反映，或者在其网站页面中根据拒绝蜘蛛协议（Robots Exclusion Protocol）加注拒绝收录的标记，否则，百度将依照惯例视其为可收录网站。</li>';
htmlContent += '                <li>任何单位或个人认为通过百度搜索链接到的第三方网页内容可能涉嫌侵犯其信息网络传播权，应该及时向百度提出书面权利通知，并提供身份证明、权属证明及详细侵权情况证明。百度在收到上述法律文件后，将会依法尽快断开相关链接内容。详情参见特定频道的著作权保护声明。</li>';
htmlContent += '            </ul>';
htmlContent += '        </td>';
htmlContent += '    </tr>';
htmlContent += '</table>';
htmlContent += '<table border="0" cellpadding="0" cellspacing="0" style="font-size:1em;">';
htmlContent += '    <tr>';
htmlContent += '        <td valign="top">';
htmlContent += '            <p>百度提醒您：在使用百度搜索引擎（以下简称百度）前，请您务必仔细阅读并透彻理解本声明。您可以选择不使用百度，但如果您使用百度，您的使用行为将被视为对本声明全部内容的认可。</p>';
htmlContent += '            <ul>';
htmlContent += '                <li>鉴于百度以非人工检索方式、根据您键入的关键字自动生成到第三方网页的链接，除百度注明之服务条款外，其他一切因使用百度而可能遭致的意外、疏忽、侵权及其造成的损失（包括因下载被搜索链接到的第三方网站内容而感染电脑病毒），百度对其概不负责，亦不承担任何法律责任。</li>';
htmlContent += '                <li>任何通过使用百度而搜索链接到的第三方网页均系他人制作或提供，您可能从该第三方网页上获得资讯及享用服务，百度对其合法性概不负责，亦不承担任何法律责任。</li>';
htmlContent += '                <li>百度搜索结果根据您键入的关键字自动搜索获得并生成，不代表百度赞成被搜索链接到的第三方网页上的内容或立场。</li>';
htmlContent += '                <li>您应该对使用搜索引擎的结果自行承担风险。百度不做任何形式的保证：不保证搜索结果满足您的要求，不保证搜索服务不中断，不保证搜索结果的安全性、正确性、及时性、合法性。因网络状况、通讯线路、第三方网站等任何原因而导致您不能正常使用百度，百度不承担任何法律责任。</li>';
htmlContent += '                <li>百度尊重并保护所有使用百度用户的个人隐私权，您注册的用户名、电子邮件地址等个人资料，非经您亲自许可或根据相关法律、法规的强制性规定，百度不会主动地泄露给第三方。百度提醒您：您在使用搜索引擎时输入的关键字将不被认为是您的个人隐私资料。</li>';
htmlContent += '                <li>任何网站如果不想被百度收录（即不被搜索到），应该及时向百度反映，或者在其网站页面中根据拒绝蜘蛛协议（Robots Exclusion Protocol）加注拒绝收录的标记，否则，百度将依照惯例视其为可收录网站。</li>';
htmlContent += '                <li>任何单位或个人认为通过百度搜索链接到的第三方网页内容可能涉嫌侵犯其信息网络传播权，应该及时向百度提出书面权利通知，并提供身份证明、权属证明及详细侵权情况证明。百度在收到上述法律文件后，将会依法尽快断开相关链接内容。详情参见特定频道的著作权保护声明。</li>';
htmlContent += '            </ul>';
htmlContent += '        </td>';
htmlContent += '    </tr>';
htmlContent += '</table>';


module.exports = React.createClass({
  render() {
    return (
        <ScrollView>
      <HTMLView
        value={htmlContent}
        onLinkPress={(url) => console.log('navigating to: ', url)}
        stylesheet={styles}
      />
      </ScrollView>
    )
  }
})

var styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366', // pink links
  },
})
