module.exports = {
    date2str(date) {
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        (month<10)&&(month='0'+month);
        (day<10)&&(day='0'+day);
        return year+'-'+month+'-'+day;
    },
    str2date(str) {
        return new Date(str);
    }
};
