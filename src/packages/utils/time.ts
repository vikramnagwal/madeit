import moment from "moment";

export function formatDate(format: string) {
    return moment().format(format);
}

export function getTimeNow() {
    return formatDate("h:mm");
}

export function getDateNow() {
    return formatDate("MMMM Do YYYY");
}

export function timeAgo(day: number) {
    return moment().subtract(day, 'days').format("MMMM Do YYYY");
}

