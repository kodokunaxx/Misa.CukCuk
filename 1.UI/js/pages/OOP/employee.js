$(document).ready(function () {
    new EmployeeJs();
    //DropdownRender.initEvents();
});

/**
 * Khởi tạo class EmployeeJs
 * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
 */
class EmployeeJs {
    constructor() {
        this.renderDropdown();
        this.loadDataTable();
        this.initEvents();
    }

    /**
     * Hiển thị dữ liệu ra table
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    loadDataTable() {
        $.ajax({
            url: `http://cukcuk.manhnv.net/v1/Employees`,
            method: 'GET'
        }).done(function (res) {
            $("#misa-datatable>tbody>tr").remove();
            let data = "";
            let count = 1;
            res.forEach(element => {
                let row =
                    `<tr employeeId=${element.EmployeeId}>
                        <td class="txt-align-right">${count}</td>
                        <td title="${BaseJs.formatText(element.EmployeeCode)}">
                            ${BaseJs.formatText(element.EmployeeCode)}
                        </td>
                        <td>${BaseJs.formatText(element.FullName)}</td>
                        <td>${BaseJs.formatText(element.GenderName)}</td>
                        <td>${BaseJs.formatDate(element.DateOfBirth)}</td>
                        <td>${BaseJs.formatText(element.PhoneNumber)}</td>
                        <td>${BaseJs.formatText(element.Email)}</td>
                        <td>${BaseJs.formatText(element.PositionName)}</td>
                        <td>${BaseJs.formatText(element.DepartmentName)}</td>
                        <td class="txt-align-right">${BaseJs.formatMoney(BaseJs.formatText(element.Salary))}</td>
                        <td>${BaseJs.formatText(element.WorkStatus)}</td>
                    </tr>`;
                count++;
                data += row;
            });
            $("#misa-datatable>tbody").append(data);
        }).fail(function (res) {
            alert("Vui lòng liên hệ misa để được hỗ trợ chức năng này")
        })
    }

    /**
     * Khởi tạo class EmployeeJs
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    add() {

    }

    /**
     * Khởi tạo class EmployeeJs
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    edit() {

    }

    /**
     * Khởi tạo class EmployeeJs
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    delete() {

    }

    /**
     * call all render function
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    initEvents() {
        self = this;
        $("#add-employee").click(function () {
            $("#detail-employee").attr("method", "POST");
            $("#detail-employee").show();
        })

        $("#btn-reload").click(function () {
            self.loadDataTable();
            $(".content-body>.container").scrollTop(0);
        })

        $("#misa-datatable").on('dblclick', 'tbody tr', function () {
            $("#detail-employee").attr("method", "PUT");
            $("#detail-employee").show();
            $("[name=EmployeeCode]").focus();
            const employeeId = $(this).attr("employeeId");
            $("#detail-employee").attr("employeeId", employeeId);
            loadEmployeeDetail(employeeId);
        })

        $(".close").click(function () {
            $(".modal").hide();
        })
    }

    /**
     * call all render function
     * CreatedBy: Đỗ Mạnh Hà (23/7/2021)
     */
    renderDropdown() {
        this.renderPositionDropdown();
        this.renderDepartmentDropdown();
    }

    renderPositionDropdown() {
        let options = []
        try {
            $.ajax({
                url: `http://cukcuk.manhnv.net/v1/Positions`,
                method: "GET",
                async: false,
                success: function (response) {
                    options.push(new DropdownItem("Tất cả vị trí", ""))
                    response.forEach(element => {
                        options.push(new DropdownItem(element.PositionName, element.PositionId))
                    })
                },
                error: function (response) {
                    console.log(response)
                }

            })
        } catch (error) {
            console.log("Show Position Dropdown: \n" + error)
        }
        new DropdownRender("position", options);
    }

    renderDepartmentDropdown() {
        let options = []
        try {
            $.ajax({
                url: `http://cukcuk.manhnv.net/api/Department`,
                method: "GET",
                async: false,
                success: function (response) {
                    options.push(new DropdownItem("Tất cả phòng ban", ""))
                    response.forEach(element => {
                        options.push(new DropdownItem(element.DepartmentName, element.DepartmentId))
                    })
                },
                error: function (response) {
                    console.log(response)
                }

            })
        } catch (error) {
            console.log("Show department Dropdown: \n" + error)
        }
        new DropdownRender("department", options);
    }

}