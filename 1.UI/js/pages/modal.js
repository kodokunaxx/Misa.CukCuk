$(document).ready(function () {
    $("#misa-datatable").on('dblclick', 'tbody tr', function () {
        $("#detail-employee").attr("method", "PUT");
        $("#detail-employee").show();
        $("[name=EmployeeCode]").focus();
        const employeeId = $(this).attr("employeeId");
        $("#detail-employee").attr("employeeId", employeeId);
        loadEmployeeDetail(employeeId);
    })

    $("#btn-save").click(function () {
        const method = $("#detail-employee").attr("method");
        actionToEmployee(method);
    })
})

function loadEmployeeDetail(employeeId) {
    $.ajax({
        url: `http://cukcuk.manhnv.net/v1/Employees/${employeeId}`,
        method: "GET",
    }).done(function (res) {
        $("[name=EmployeeCode]").val(formatText(res["EmployeeCode"]))
        $("[name=FullName]").val(formatText(res["FullName"]))
        $("[name=IdentityNumber]").val(formatText(res["IdentityNumber"]))
        $("[name=IdentityPlace]").val(formatText(res["IdentityPlace"]))
        $("[name=Email]").val(formatText(res["Email"]))
        $("[name=PhoneNumber]").val(formatText(res["PhoneNumber"]))
        $("[name=Salary]").val(formatMoney(formatText(res["Salary"])))
        $("[name=JoinDate]").val(formatDateToYYYYMMDD(formatText(res["JoinDate"])))
        $("[name=DateOfBirth]").val(formatDateToYYYYMMDD(res["DateOfBirth"]))
        $("[name=IdentityDate]").val(formatDateToYYYYMMDD(res["IdentityDate"]))
    })
}

function actionToEmployee(method) {
    const employeeId = $("#detail-employee").attr("employeeId");
    let url = "";
    if (method == "PUT") {
        url = `http://cukcuk.manhnv.net/v1/Employees/${employeeId}`
    } else
        url = `http://cukcuk.manhnv.net/v1/Employees`
    console.log(method)
    let data = {
        "EmployeeCode": $("[name=EmployeeCode]").val(),
        "FullName": $("[name=FullName]").val(),
        "Gender": 0,
        "DateOfBirth": $("[name=DateOfBirth]").val(),
        "PhoneNumber": $("[name=PhoneNumber]").val(),
        "Email": $("[name=Email]").val(),
        "IdentityNumber": $("[name=IdentityNumber]").val(),
        "IdentityDate": $("[name=IdentityDate]").val(),
        "IdentityPlace": $("[name=IdentityPlace]").val(),
        "JoinDate": $("[name=JoinDate]").val(),
        "WorkStatus": 1,
        "Salary": parseInt($("[name=Salary]").val())
    }
    $.ajax({
        url: url,
        method: method,
        data: JSON.stringify(data),
        dataType: "json",
        contentType: "application/json"
    }).done(function (res) {
        alert("thêm thành công!");
    }).fail(function (res) {
        alert("fail")
    })
}

function resetModal() {
    $("[name=EmployeeCode]").val("")
    $("[name=FullName]").val("")
    $("[name=IdentityNumber]").val("")
    $("[name=IdentityPlace]").val("")
    $("[name=Email]").val("")
    $("[name=PhoneNumber]").val("")
    $("[name=Salary]").val("")
    $("[name=JoinDate]").val("")
    $("[name=DateOfBirth]").val("")
    $("[name=IdentityDate]").val("")
}