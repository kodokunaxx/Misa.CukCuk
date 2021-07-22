$(document).ready(function () {
    loadDataTable();
    loadDataDropdownDepartment();
    loadDataDropdownPosition();

    $("#add-employee").click(function () {
        $("#detail-employee").attr("method", "POST");
        $("#detail-employee").show();
    })

    let idEmployee = "";

    $("#btn-reload").click(function () {
        loadDataTable();
        $(".content-body>.container").scrollTop(0);
    })

})

function loadDataTable() {
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
                    <td>${formatText(element.EmployeeCode)}</td>
                    <td>${formatText(element.FullName)}</td>
                    <td>${formatText(element.GenderName)}</td>
                    <td>${formatDate(element.DateOfBirth)}</td>
                    <td>${formatText(element.PhoneNumber)}</td>
                    <td>${formatText(element.Email)}</td>
                    <td>${formatText(element.PositionName)}</td>
                    <td>${formatText(element.DepartmentName)}</td>
                    <td class="txt-align-right">${formatMoney(formatText(element.Salary))}</td>
                    <td>${formatText(element.WorkStatus)}</td>
                </tr>`;
            count++;
            data += row;
        });
        $("#misa-datatable>tbody").append(data);
    }).fail(function (res) {

    })
}

function loadDataDropdownDepartment() {
    $.ajax({
        url: `http://cukcuk.manhnv.net/api/Department`,
        method: "GET"
    }).done(function (res) {
        let data =
            `<div class="drop-item selected" data-value="allDeapartment">
                <div class="checked-icon">
                    <i class="fa fa-check"></i>
                </div>
                <div class="item-text">Tất cả phòng ban</div>
            </div>`;

        res.forEach(element => {
            data +=
                `<div class="drop-item" data-value="${element.DepartmentId}">
                <div class="checked-icon"></div>
                <div class="item-text">${element.DepartmentName}</div>
            </div>`
        });

        $(".department .drop-data-site").append(data);

    })
}

function loadDataDropdownPosition() {
    $.ajax({
        url: `http://cukcuk.manhnv.net/v1/Positions`,
        method: "GET"
    }).done(function (res) {
        let data =
            `<div class="drop-item selected" data-value="allPosition">
                <div class="checked-icon">
                    <i class="fa fa-check"></i>
                </div>
                <div class="item-text">Tất cả vị trí</div>
            </div>`;

        res.forEach(element => {
            data +=
                `<div class="drop-item" data-value="${element.PositionId}">
                <div class="checked-icon"></div>
                <div class="item-text">${element.PositionName}</div>
            </div>`
        });

        $(".position .drop-data-site").append(data);

    })
}