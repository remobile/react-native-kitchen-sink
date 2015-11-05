'use strict';

var React = require('react-native')
var {Text, View, ListView, StyleSheet, ScrollView} = React

var HTMLView = require('react-native-htmlview')


var htmlContent = '';
htmlContent += '<table border="0" cellpadding="0" cellspacing="0" style="font-size:1em;">';
htmlContent += '    <tr>';
htmlContent += '        <td valign="top">';
htmlContent += '            <p>�ٶ�����������ʹ�ðٶ��������棨���¼�ưٶȣ�ǰ�����������ϸ�Ķ���͸�����Ȿ������������ѡ��ʹ�ðٶȣ��������ʹ�ðٶȣ�����ʹ����Ϊ������Ϊ�Ա�����ȫ�����ݵ��Ͽɡ�</p>';
htmlContent += '            <ul>';
htmlContent += '                <li>���ڰٶ��Է��˹�������ʽ������������Ĺؼ����Զ����ɵ���������ҳ�����ӣ����ٶ�ע��֮���������⣬����һ����ʹ�ðٶȶ��������µ����⡢�������Ȩ������ɵ���ʧ�����������ر��������ӵ��ĵ�������վ���ݶ���Ⱦ���Բ��������ٶȶ���Ų������಻�е��κη������Ρ�</li>';
htmlContent += '                <li>�κ�ͨ��ʹ�ðٶȶ��������ӵ��ĵ�������ҳ��ϵ�����������ṩ�������ܴӸõ�������ҳ�ϻ����Ѷ�����÷��񣬰ٶȶ���Ϸ��ԸŲ������಻�е��κη������Ρ�</li>';
htmlContent += '                <li>�ٶ������������������Ĺؼ����Զ�������ò����ɣ��������ٶ��޳ɱ��������ӵ��ĵ�������ҳ�ϵ����ݻ�������</li>';
htmlContent += '                <li>��Ӧ�ö�ʹ����������Ľ�����ге����ա��ٶȲ����κ���ʽ�ı�֤������֤���������������Ҫ�󣬲���֤���������жϣ�����֤��������İ�ȫ�ԡ���ȷ�ԡ���ʱ�ԡ��Ϸ��ԡ�������״����ͨѶ��·����������վ���κ�ԭ�����������������ʹ�ðٶȣ��ٶȲ��е��κη������Ρ�</li>';
htmlContent += '                <li>�ٶ����ز���������ʹ�ðٶ��û��ĸ�����˽Ȩ����ע����û����������ʼ���ַ�ȸ������ϣ��Ǿ����������ɻ������ط��ɡ������ǿ���Թ涨���ٶȲ���������й¶�����������ٶ�������������ʹ����������ʱ����Ĺؼ��ֽ�������Ϊ�����ĸ�����˽���ϡ�</li>';
htmlContent += '                <li>�κ���վ������뱻�ٶ���¼������������������Ӧ�ü�ʱ��ٶȷ�ӳ������������վҳ���и��ݾܾ�֩��Э�飨Robots Exclusion Protocol����ע�ܾ���¼�ı�ǣ����򣬰ٶȽ����չ�������Ϊ����¼��վ��</li>';
htmlContent += '                <li>�κε�λ�������Ϊͨ���ٶ��������ӵ��ĵ�������ҳ���ݿ��������ַ�����Ϣ���紫��Ȩ��Ӧ�ü�ʱ��ٶ��������Ȩ��֪ͨ�����ṩ����֤����Ȩ��֤������ϸ��Ȩ���֤�����ٶ����յ����������ļ��󣬽�����������Ͽ�����������ݡ�����μ��ض�Ƶ��������Ȩ����������</li>';
htmlContent += '            </ul>';
htmlContent += '        </td>';
htmlContent += '    </tr>';
htmlContent += '</table>';
htmlContent += '<table border="0" cellpadding="0" cellspacing="0" style="font-size:1em;">';
htmlContent += '    <tr>';
htmlContent += '        <td valign="top">';
htmlContent += '            <p>�ٶ�����������ʹ�ðٶ��������棨���¼�ưٶȣ�ǰ�����������ϸ�Ķ���͸�����Ȿ������������ѡ��ʹ�ðٶȣ��������ʹ�ðٶȣ�����ʹ����Ϊ������Ϊ�Ա�����ȫ�����ݵ��Ͽɡ�</p>';
htmlContent += '            <ul>';
htmlContent += '                <li>���ڰٶ��Է��˹�������ʽ������������Ĺؼ����Զ����ɵ���������ҳ�����ӣ����ٶ�ע��֮���������⣬����һ����ʹ�ðٶȶ��������µ����⡢�������Ȩ������ɵ���ʧ�����������ر��������ӵ��ĵ�������վ���ݶ���Ⱦ���Բ��������ٶȶ���Ų������಻�е��κη������Ρ�</li>';
htmlContent += '                <li>�κ�ͨ��ʹ�ðٶȶ��������ӵ��ĵ�������ҳ��ϵ�����������ṩ�������ܴӸõ�������ҳ�ϻ����Ѷ�����÷��񣬰ٶȶ���Ϸ��ԸŲ������಻�е��κη������Ρ�</li>';
htmlContent += '                <li>�ٶ������������������Ĺؼ����Զ�������ò����ɣ��������ٶ��޳ɱ��������ӵ��ĵ�������ҳ�ϵ����ݻ�������</li>';
htmlContent += '                <li>��Ӧ�ö�ʹ����������Ľ�����ге����ա��ٶȲ����κ���ʽ�ı�֤������֤���������������Ҫ�󣬲���֤���������жϣ�����֤��������İ�ȫ�ԡ���ȷ�ԡ���ʱ�ԡ��Ϸ��ԡ�������״����ͨѶ��·����������վ���κ�ԭ�����������������ʹ�ðٶȣ��ٶȲ��е��κη������Ρ�</li>';
htmlContent += '                <li>�ٶ����ز���������ʹ�ðٶ��û��ĸ�����˽Ȩ����ע����û����������ʼ���ַ�ȸ������ϣ��Ǿ����������ɻ������ط��ɡ������ǿ���Թ涨���ٶȲ���������й¶�����������ٶ�������������ʹ����������ʱ����Ĺؼ��ֽ�������Ϊ�����ĸ�����˽���ϡ�</li>';
htmlContent += '                <li>�κ���վ������뱻�ٶ���¼������������������Ӧ�ü�ʱ��ٶȷ�ӳ������������վҳ���и��ݾܾ�֩��Э�飨Robots Exclusion Protocol����ע�ܾ���¼�ı�ǣ����򣬰ٶȽ����չ�������Ϊ����¼��վ��</li>';
htmlContent += '                <li>�κε�λ�������Ϊͨ���ٶ��������ӵ��ĵ�������ҳ���ݿ��������ַ�����Ϣ���紫��Ȩ��Ӧ�ü�ʱ��ٶ��������Ȩ��֪ͨ�����ṩ����֤����Ȩ��֤������ϸ��Ȩ���֤�����ٶ����յ����������ļ��󣬽�����������Ͽ�����������ݡ�����μ��ض�Ƶ��������Ȩ����������</li>';
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