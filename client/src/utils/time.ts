/**
 * 获取当前时间并格式化为 hh:mm:ss，并添加时间段标识（上午、下午、傍晚、凌晨）
 * @returns {string} 格式化后的时间字符串
 */
export function getCurrentTime(): string {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let period = '';

    if (hours >= 0 && hours < 6) {
        period = '凌晨';
    } else if (hours >= 6 && hours < 12) {
        period = '上午';
    } else if (hours >= 12 && hours < 18) {
        period = '下午';
    } else {
        period = '夜间';
    }

    // 转换为 12 小时制
    hours = hours % 12 || 12;
    return `${period} ${String(hours).padStart(2, '0')}:${minutes}:${seconds}`;
}