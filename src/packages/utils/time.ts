import moment from "moment";

export function formatDate(format: string) {
    return moment().format(format);
}

export function getTimeNow() {
    return formatDate("h:mm");
}

export function getDateNow() {
    return formatDate("dddd Do MMMM");
}

export function dateAgo(day: number) {
    return moment().subtract(day, 'days').format("MMMM Do YYYY");
}

