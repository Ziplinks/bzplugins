export const formatMsgTime = ((timespan) => {
    var dateTime = new Date(timespan) // 将传进来的字符串或者毫秒转为标准时间
    var year = dateTime.getFullYear()
    var month = dateTime.getMonth() + 1 < 10 ? "0" + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1
    var day = dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate()
    var hour = dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()
    var minute = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes()
    // var second = dateTime.getSeconds()
    var second = dateTime.getSeconds() < 10 ? "0" + dateTime.getSeconds() : dateTime.getSeconds()
    var millisecond = dateTime.getTime() // 将当前编辑的时间转换为毫秒
    var now = new Date() // 获取本机当前的时间
    var nowNew = now.getTime() // 将本机的时间转换为毫秒
    var milliseconds = 0
    var timeSpanStr
    milliseconds = nowNew - millisecond
    if (milliseconds <= 1000 * 60 * 1) { // 小于一分钟展示为刚刚
        timeSpanStr = '刚刚'
    } else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) { // 大于一分钟小于一小时展示为分钟
        timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前'
    } else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) { // 大于一小时小于一天展示为小时
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前'
    } else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) { // 大于一天小于十五天展示位天
        timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前'
    } else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
        timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    } else {
        timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    }
    return timeSpanStr
})

export const formatTime = ((timespan) => {
    var dateTime = new Date(timespan) // 将传进来的字符串或者毫秒转为标准时间
    var year = dateTime.getFullYear()
    var month = dateTime.getMonth() + 1 < 10 ? "0" + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1
    var day = dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate()
    var hour = dateTime.getHours() < 10 ? "0" + dateTime.getHours() : dateTime.getHours()
    var minute = dateTime.getMinutes() < 10 ? "0" + dateTime.getMinutes() : dateTime.getMinutes()
    var second = dateTime.getSeconds() < 10 ? "0" + dateTime.getSeconds() : dateTime.getSeconds()
    var timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
    return timeSpanStr
})

export const deepCopy = (obj => {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断obj子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepCopy(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
})

export default {
    formatMsgTime,
    formatTime,
    deepCopy
}