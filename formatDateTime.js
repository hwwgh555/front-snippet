// 格式化时间 20190304145736 => 2019/03/04 14:57:36
export function formatDateTime(dateTimeStr, dateSeparator = '/', timeSeparator = ':') {
    const stringTime = dateTimeStr.toString()
    if (stringTime.length === 14) {
        // 年月日时分秒 20190304145736
        const reg = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/
        return stringTime.replace(reg, `$1${dateSeparator}$2${dateSeparator}$3 $4${timeSeparator}$5${timeSeparator}$6`)
    }
    if (stringTime.length === 8) {
        // 年月日 20190304
        const reg = /^(\d{4})(\d{2})(\d{2})$/
        return stringTime.replace(reg, `$1${dateSeparator}$2${dateSeparator}$3`)
    }
    if (stringTime.length === 6) {
        // 时分秒 14:57:36
        const reg = /^(\d{2})(\d{2})(\d{2})$/
        return stringTime.replace(reg, `$1${timeSeparator}$2${timeSeparator}$3`)
    }
    return stringTime
}
