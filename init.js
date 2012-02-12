$(document).ready(function () {
    $("a").click(function () {
        if ($(this).attr("target") !== "_blank") {
            $("#receiver").attr("src", $(this).attr("href"));
            if ($.browser.webkit) {
                $("#receiver").load(function () {
                    $("#receiver").css("width", "0px");
                    $("#receiver").css("width", $(window).width() - 400)
                })
            }
            return false
        }
    });
    $("#container").css("height", $(window).height());
    $(window).resize(function () {
        $("#container").css("height", $(window).height())
    });
    $("#receiver").css("width", $(window).width() - 400);
    $(window).resize(function () {
        $("#receiver").css("width", $(window).width() - 400)
    })
});