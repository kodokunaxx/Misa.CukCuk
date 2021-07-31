/**
 * Khởi tạo class DropdownRender
 * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
 */
class DropdownRender {
    constructor(idSelector, dropdownItem) {
        this.IdSelector = idSelector
        this.DropdownItem = dropdownItem
        this.renderData();
        this.selectOption(dropdownItem[0]);
        this.initEvents();
    }

    /**
     * các sự kiện với dropdown
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    initEvents() {
        /**
         * Đóng mở dropdown
         * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
         */
        $(`#${this.IdSelector} .drop-content`).click(function () {
            console.log(1);
            $(this).find(".drop-data-site").slideToggle(300);

        })

        $(document).click(function (e) {
            var dropDown = $(`#${this.IdSelector} .drop-content`);
            if (!dropDown.is(e.target) && dropDown.has(e.target).length === 0) {
                var opened = dropDown.find('.drop-data-site').css('display');
                if (opened == 'block') {
                    dropDown.find(".drop-data-site").slideUp(300);
                }
            }
        });

        /**
         * Thay đổi text hiển thị khi select
         * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
         */
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
    }

    /**
     * Sinh dữ liệu cho dropdown
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    renderData() {
        let data = "";
        this.DropdownItem.forEach(element => {
            data +=
                `<div class="drop-item" data-value="${element.Id}">
                <div class="checked-icon"></div>
                <div class="item-text">${element.Name}</div>
            </div>`
        });
        $(`#${this.IdSelector} .drop-data-site`).append(data);
    }

    /**
     * gán giá trị selected ban đầu
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    selectOption(dropdownItem) {
        let dropList = $(`#${this.IdSelector} .drop-item`);
        for (let i = 0; i < dropList.length; i++) {
            const element = $(dropList[i]);
            const val = element.find(".item-text").text();
            if (val == dropdownItem.Name) {
                dropList.removeClass("selected");
                dropList.find(".checked-icon").html("");
                $(`#${this.IdSelector} .dropdown-text`).html(val);
                element.addClass("selected");
                element.find(".checked-icon").html(`<i class="fa fa-check"></i>`);
                return
            }
        }
        if (dropList.length > 0) {
            dropList.removeClass("selected");
            dropList.find(".checked-icon").html("");
            $(`#${this.IdSelector} .dropdown-text`).html(this.DropdownItem[0].Name);
            const element = $(dropList[0]);
            element.addClass("selected");
            element.find(".checked-icon").html(`<i class="fa fa-check"></i>`);
        }
    }


}

/**
 * Khởi tạo class DropdownItem
 * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
 */
class DropdownItem {
    constructor(name, id) {
        this.Id = id;
        this.Name = name;
    }
}