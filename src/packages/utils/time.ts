import moment from "moment";

export function formatDate(format: string) {
    return moment().format(format);
}

export function timeNow() {
    return formatDate("h:mm");
}

export function dateNow() {
    return formatDate("MMMM Do YYYY");
}

export function timeAgo(day: number) {
    return moment().subtract(day, 'days').format("MMMM Do YYYY");
}

console.log(timeNow())