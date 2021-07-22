$(document).ready(function () {

    // close data-site when click select control
    $(".drop-content").click(function () {
        $(this).find(".drop-data-site").slideToggle(300);

        var dropDown = $(this);
        $(document).click(function (e) {
            if (!dropDown.is(e.target) && dropDown.has(e.target).length === 0) {
                var isOpened = dropDown.find('.drop-data-site').css('display');
                if (isOpened == 'block') {
                    dropDown.find(".drop-data-site").slideUp(300);
                }
            }
        });
        // change text when select option combo box
        $(".drop-item").click(function () {
            var textSiteDropdown = $(this).parent().parent().find(".dropdown-text")
            var selectedOptionDropdown = $(this).find(".item-text").text()
            textSiteDropdown.text(selectedOptionDropdown)

            var dataSiteDropdown = $(this).parent().find(".drop-item")
            dataSiteDropdown.removeClass("selected")
            dataSiteDropdown.find(".checked-icon").html("")

            $(this).addClass("selected");
            $(this).find(".checked-icon").html(`<i class="fa fa-check"></i>`)
        })
        // end event
    })
    // end event

    // close modal
    $(".close").click(function () {
        $(".modal").hide();
    })
    // end event
    function isNullOrUndefined(par) {
        return (typeof (variable) != "undefined" && variable != null) ? false : true
    }


})

function formatText(text) {
    return (typeof (text) != "undefined" && text != null && text != "null") ? text.toString() : ""
}

function formatDate(text) {
    if (text != "") {
        let date = new Date(text);
        let year = date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return `${day}/${month}/${year}`;
    }
    return ""
}

function formatDateToYYYYMMDD(text) {
    if (text != "") {
        let date = new Date(text);
        let year = date.getFullYear();
        let month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
        let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        return `${year}-${month}-${day}`;
    }
    return ""
}

function formatMoney(text) {
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