
$(function () {
    var hub = $.connection.dashboardHub;
    hub.client.UpdateData = function (data) {
        console.log(data);
        $("#temperature").text(data.Temperature);
        $("#humidity").text(data.Humidity);
        $("#temperature2").text(data.Temperature2);
        $("#pressure").text(data.Pressure);
        $("#updateTime").text(data.UpdateTime);
        $("#updateDate").text(data.UpdateDate);
    };

    $.connection.hub.start();
});