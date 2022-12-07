const databaseDate = date => {
    if (date) {
        try {
            return new Date(date).toISOString().slice(0, 10);
        } catch (error) {
            console.warn('Error in databaseDate', error);
            return null;
        }
    } else {
        return null;
    }
};

const databaseDateTime = date => {
    if (date) {
        try {
            return new Date(date)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ');
        } catch (error) {
            console.warn('Error in databaseDateTime', error);
            return null;
        }
    } else {
        return null;
    }
};

const formatDate = (date, separator = '-', time = true) => {
    try {
        if (date) {
            const d = new Date(date);
            const returnDate = [day, month, year].join(separator);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            const year = d.getFullYear();
            if (month.length < 2) {
                month = '0' + month;
            }
            if (day.length < 2) {
                day = '0' + day;
            }
            if (time) {
                let ampm = 'AM';
                let h = d.getHours();
                let m = d.getMinutes();
                if (h >= 12) {
                    if (h > 12) h -= 12;
                    ampm = 'PM';
                }
                if (m < 10) m = '0' + m;
                const returnTime = h + ':' + m + ' ' + ampm;
                return returnDate + ' ' + returnTime;
            }
            return returnDate;
        }
        return '';
    } catch (error) {
        console.warn('Error in formatDate', error);
        return '';
    }
};

const formatBytes = (a, b) => {
    if (a === 0) return '0 Bytes';
    const c = 1024;
    const d = b || 2;
    const e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const f = Math.floor(Math.log(a) / Math.log(c));
    return parseFloat((a / c ** f).toFixed(d)) + '' + e[f];
};

const calendarFormat = date => {
    try {
        if (date) {
            const d = new Date(date);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            const year = d.getFullYear();
            if (month.length < 2) {
                month = '0' + month;
            }
            if (day.length < 2) {
                day = '0' + day;
            }
            return [year, month, day].join('-');
        }
        return '';
    } catch (error) {
        console.warn('Error in calendarFormat', error);
        return '';
    }
};

const dayMonth = date => {
    try {
        if (date) {
            date = new Date(date);
            const month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = date.getDate();
            const month_index = date.getMonth();
            return day + '-' + month_names[month_index];
        }
        return null;
    } catch (error) {
        console.warn('Error in dayMonth', error);
        return null;
    }
};

const getDay = date => {
    try {
        if (date) {
            date = new Date(date);
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const day = date.getDay();
            return days[day];
        }
        return '';
    } catch (error) {
        console.warn('Error in getDay', error);
        return '';
    }
};

const dayMonthTime = date => {
    try {
        if (date) {
            date = new Date(date);
            const month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = date.getDate();
            const month_index = date.getMonth();
            let ampm = 'AM';
            let h = date.getHours();
            let m = date.getMinutes();
            if (h >= 12) {
                if (h > 12) h -= 12;
                ampm = 'PM';
            }
            if (m < 10) m = '0' + m;
            const returnDate = day + '-' + month_names[month_index];
            const returnTime = h + ':' + m + ' ' + ampm;
            return returnDate + ' ' + returnTime;
        }
        return null;
    } catch (error) {
        console.warn('Error in dayMonthTime', error);
        return null;
    }
};

const completeDate = date => {
    try {
        if (date) {
            date = new Date(date);
            const month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = date.getDate();
            const month_index = date.getMonth();
            const year = date.getFullYear();
            return day + '-' + month_names[month_index] + '-' + year;
        }
        return null;
    } catch (error) {
        console.warn('Error in completeDate', error);
        return null;
    }
};

const isToday = date => {
    try {
        if (date) {
            date = new Date(date);
            const day = date.getDate();
            const month = date.getMonth();
            const year = date.getFullYear();

            const today_date = new Date();
            const today_day = today_date.getDate();
            const today_month = today_date.getMonth();
            const today_year = today_date.getFullYear();
            return day === today_day && month === today_month && year === today_year ? true : false;
        }
        return false;
    } catch (error) {
        console.warn('Error in isToday', error);
        return false;
    }
};

const completeDateTime = date => {
    try {
        if (date) {
            date = new Date(date);
            const month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = date.getDate();
            const month_index = date.getMonth();
            const year = date.getFullYear();

            let ampm = 'AM';
            let h = date.getHours();
            let m = date.getMinutes();
            if (h >= 12) {
                if (h > 12) h -= 12;
                ampm = 'PM';
            }
            if (m < 10) m = '0' + m;
            const returnDate = day + '-' + month_names[month_index] + '-' + year;
            const returnTime = h + ':' + m + ' ' + ampm;
            return returnDate + ' ' + returnTime;
        }
        return null;
    } catch (error) {
        console.warn('Error in completeDateTime', error);
        return null;
    }
};

const monthYear = date => {
    try {
        if (date) {
            date = new Date(date);
            const month_names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const month_index = date.getMonth();
            const year = date.getFullYear();
            return month_names[month_index] + '-' + year;
        }
        return null;
    } catch (error) {
        console.warn('Error in monthYear', error);
        return null;
    }
};

const yearOnly = date => {
    try {
        if (date) {
            date = new Date(date);
            const year = date.getFullYear();
            return year;
        }
        return null;
    } catch (error) {
        console.warn('Error in yearOnly', error);
        return null;
    }
};

const TimeOnly = (date, isAmPm = true) => {
    try {
        if (date) {
            date = new Date(date);
            let ampm = 'AM';
            let h = date.getHours();
            let m = date.getMinutes();
            if (isAmPm) {
                if (h >= 12) {
                    if (h > 12) h -= 12;
                    ampm = 'PM';
                }
            }
            if (m < 10) m = '0' + m;
            const returnTime = h + ':' + m + (isAmPm ? ' ' + ampm : '');
            return returnTime;
        }
        return null;
    } catch (error) {
        console.warn('Error in TimeOnly', error);
        return null;
    }
};

const sameDay = d1 => {
    try {
        if (d1) {
            const date1 = new Date(d1);
            const date2 = new Date();
            return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
        }
        return false;
    } catch (error) {
        console.warn('Error in sameDay', error);
        return false;
    }
};

const sameDays = (d1, d2) => {
    try {
        if (d1 && d2) {
            const date1 = new Date(d1);
            const date2 = new Date(d2);
            return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
        }
        return false;
    } catch (error) {
        console.warn('Error in sameDays', error);
        return false;
    }
};

const validateEmail = email => {
    try {
        if (email) {
            const emailFormat = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z]{2,4})+$/;
            if (emailFormat.test(email)) {
                return true;
            }
            return false;
        }
        return false;
    } catch (error) {
        console.warn('Error in validateEmail', error);
        return false;
    }
};

const daysBetween = (date1, date2) => {
    try {
        if (!date2) {
            date2 = new Date();
        }
        const date1_ms = new Date(date1).getTime();
        const date2_ms = new Date(date2).getTime();

        const difference_ms = Math.abs(date1_ms - date2_ms);

        const seconds = Math.round(difference_ms / 1000);
        const minutes = Math.round(difference_ms / (1000 * 60));
        const hours = Math.round(difference_ms / (1000 * 60 * 60));
        const days = Math.round(difference_ms / (1000 * 60 * 60 * 24));

        if (days === 1) {
            const data = 'yesterday';
            return data;
        }
        if (days > 1) {
            const data = days + ' ' + (days > 1 ? 'days' : 'day') + ' ago';
            return data;
        }
        if (hours > 0) {
            const data = hours + ' ' + (hours > 1 ? 'hours' : 'hour') + ' ago';
            return data;
        }
        if (minutes > 0) {
            const data = minutes + ' ' + (minutes > 1 ? 'min' : 'min') + ' ago';
            return data;
        }
        if (seconds > 0) {
            const data = seconds + ' ' + (seconds > 1 ? 'sec' : 'sec') + ' ago';
            return data;
        }
        if (hours > 10) {
        }
        const data = seconds + ' ' + (seconds > 1 ? 'sec' : 'sec') + ' ago';
        return data;
    } catch (error) {
        console.warn('Error in daysBetween', error);
        return null;
    }
};

const datesDifference = (date1, date2) => {
    try {
        if (date2) {
        } else {
            date2 = new Date();
        }
        const date1_ms = new Date(date1).getTime();
        const date2_ms = new Date(date2).getTime();

        const difference_ms = Math.abs(date2_ms - date1_ms);

        const days = Math.round(difference_ms / (1000 * 60 * 60 * 24));

        if (days >= 1) {
            const data = days + ' ' + (days > 1 ? 'days' : 'day');
            return data;
        }
        return '0 days';
    } catch (error) {
        console.warn('Error in datesDifference', error);
        return '0 days';
    }
};

const datePassed = date2 => {
    try {
        if (date2) {
            const date1_ms = new Date().getTime();
            const date2_ms = new Date(date2).getTime();
            if (date2_ms > date1_ms) {
                return false;
            }
            return true;
        }
        return false;
    } catch (error) {
        console.warn('Error in datePassed', error);
        return false;
    }
};

const timeDifference = (date1, date2) => {
    try {
        if (date1 && date2) {
            date1 = new Date(date1);
            date2 = new Date(date2);
            let diffInMilliSeconds = Math.abs(date2 - date1) / 1000;
            const days = Math.floor(diffInMilliSeconds / 86400);
            diffInMilliSeconds -= days * 86400;
            const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
            diffInMilliSeconds -= hours * 3600;
            const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
            diffInMilliSeconds -= minutes * 60;

            let Days = 0;
            let Hours = 0;
            let Minutes = 0;

            if (days > 1) {
                Days = days + ' ' + (days > 1 ? 'days' : 'day');
            }
            if (hours > 0) {
                Hours = hours + ' ' + (hours > 1 ? 'hours' : 'hour');
            }
            if (minutes > 0) {
                Minutes = minutes + ' ' + (minutes > 1 ? 'minutes' : 'minute');
            }
            if (hours > 10) {
                Minutes = 0;
            }
            if (hours > 24) {
                Hours = 0;
            }
            return (Days ? Days : '') + ' ' + (Hours ? Hours : '') + ' ' + (Minutes ? Minutes : '');
        }
        return null;
    } catch (error) {
        console.warn('Error in timeDifference', error);
        return null;
    }
};

const timeSince = (date, since = true) => {
    try {
        date = new Date(date).getTime();
        const seconds = Math.floor((new Date() - date) / 1000);
        let interval = Math.floor(seconds / 31536000);
        if (interval > 0) {
            return interval + (interval > 1 ? ' years' : ' year') + (since ? ' ago' : '');
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 0) {
            return interval + (interval > 1 ? ' months' : ' month') + (since ? ' ago' : '');
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 0) {
            return interval + (interval > 1 ? ' days' : ' day') + (since ? ' ago' : '');
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 0) {
            return interval + (interval > 1 ? ' hours' : ' hour') + (since ? ' ago' : '');
        }
        interval = Math.floor(seconds / 60);
        if (interval > 0) {
            return interval + (interval > 1 ? ' minutes' : ' minute') + (since ? ' ago' : '');
        }
        return Math.floor(seconds) + (seconds > 1 ? ' seconds' : ' second') + (since ? ' ago' : '');
    } catch (error) {
        console.warn('Error in timeSince', error);
        return null;
    }
};

const generateId = () => {
    try {
        return new Date().getTime() + Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
    } catch (error) {
        console.warn('Error in generateId', error);
        return null;
    }
};

const validateIFSC = code => {
    try {
        if (code) {
            const codeFormat = /^[A-Za-z]{4}0[A-Z0-9]{6}$/;
            if (codeFormat.test(code)) {
                return true;
            }
            return false;
        }
        return false;
    } catch (error) {
        console.warn('Error in validateIFSC', error);
        return false;
    }
};

const validatePAN = pan => {
    try {
        if (pan) {
            const panFormat = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
            if (panFormat.test(pan)) {
                return true;
            }
            return false;
        }
        return false;
    } catch (error) {
        console.warn('Error in validatePAN', error);
        return false;
    }
};

module.exports = {
    databaseDate,
    databaseDateTime,
    formatDate,
    formatBytes,
    calendarFormat,
    dayMonth,
    getDay,
    dayMonthTime,
    completeDate,
    isToday,
    completeDateTime,
    monthYear,
    yearOnly,
    TimeOnly,
    sameDay,
    sameDays,
    validateEmail,
    daysBetween,
    datesDifference,
    datePassed,
    timeDifference,
    timeSince,
    generateId,
    validateIFSC,
    validatePAN
};
