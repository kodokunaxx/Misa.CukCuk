$(document).ready(function () {

});

class BaseJs {
    constructor() {

    }

    static formatText(text) {
        return (typeof (text) != "undefined" && text != null && text != "null") ? text.toString() : ""
    }

    static formatDate(text) {
        if (text != "") {
            let date = new Date(text);
            let year = date.getFullYear();
            let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
            let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return `${day}/${month}/${year}`;
        }
        return ""
    }

    static formatDateToYYYYMMDD(text) {
        if (text != "") {
            let date = new Date(text);
            let year = date.getFullYear();
            let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
            let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return `${year}-${month}-${day}`;
        }
        return ""
    }

    static formatMoney(text) {
        let count = 1;
        let result = "";
        if (text.length == 0) return "0"
        for (let i = text.length - 1; i >= 0; i--) {
            if (count % 3 == 0 && text.length > 3 && i != 0) {
                result = "." + text[i] + result;
            } else {
                result = text[i] + result;
            }
            count++;
        }
        return result;
    }
}