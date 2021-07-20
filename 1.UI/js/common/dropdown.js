$(document).ready(function () {

    // close data-site when click select control
    $(".drop-content").click(function () {
        var dataSiteDropdown = $(this).find(".drop-data-site");
        var expanded = dataSiteDropdown.hasClass("checked");
        if (expanded) {
            dataSiteDropdown.css("display", "none")
            dataSiteDropdown.removeClass("checked")
        } else {
            dataSiteDropdown.css("display", "block")
            dataSiteDropdown.addClass("checked")
        }
    })
    // end event


    // close data-site when click outside screen
    $(document).on("click", function (event) {
        if (!$(event.target).closest(".drop-content").length) {
            var dataSiteDropdown = $(".drop-content").find(".drop-data-site")
            dataSiteDropdown.css("display", "none")
            dataSiteDropdown.removeClass("checked")
        }
    })
    // end event 

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



    // close modal
    $(".close").click(function () {
        $(".modal").hide();
    })
    // end event
    function isNullOrUndefined(par) {
        return (typeof (variable) != "undefined" && variable != null) ? false : true
    }
})

