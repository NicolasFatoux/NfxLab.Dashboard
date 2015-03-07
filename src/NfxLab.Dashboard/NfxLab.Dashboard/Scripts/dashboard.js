
$(function () {
    var hub = $.connection.dashboardHub;
    hub.client.UpdateData = function (data) {
        console.log(data);
        $("#temperature").text(data.Temperature);
        $("#humidity").text(data.Humidity);
        $("#updateTime").text(data.UpdateTime);
        $("#updateDate").text(data.UpdateDate);
    };

    $.connection.hub.start().done(function () {
        // Wire up Send button to call NewContosoChatMessage on the server.
        //$('#newContosoChatMessage').click(function () {
        //    contosoChatHubProxy.server.newContosoChatMessage($('#displayname').val(), $('#message').val());
        //    $('#message').val('').focus();
        //});

        //$("#debugPut").click(function () {
        //    var data = {
        //        temperature: $("#debugTemperature").val(),
        //        humidity: $("#debugHumidity").val()
        //    };

        //    $.ajax({
        //        url: '/api/SensorData',
        //        type: 'PUT',
        //        contentType: 'application/json',
        //        data: JSON.stringify(data),
        //        success: function (result) {
        //            // Do something with the result
        //        }
        //    });
        //})
    });
});