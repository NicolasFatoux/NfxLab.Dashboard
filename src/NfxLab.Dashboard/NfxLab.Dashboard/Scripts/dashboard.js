
$(function () {
    var hub = $.connection.dashboardHub;
    hub.client.UpdateData = function (data) {
        console.log(data);
        $("#temperature").text(data.Temperature);
        $("#humidity").text(data.Humidity);
        $("#updateTime").text(data.UpdateTime);
        $("#updateDate").text(data.UpdateDate);
    };

    $.connection.hub.start();
});