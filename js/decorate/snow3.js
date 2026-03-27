window.onload = function () {
    var minSize = 1; // 最小字体
    var maxSize = 50; // 最大字体
    var newOne = 300; // 生成雪花间隔
    var flakColor = "#fff"; // 雪花颜色
    var flak = $("<div></div>").css({ position: "absolute", top: "0px" }).html("❉"); // 定义一个雪花
    var dhight = $(window).height(); // 定义视图高度
    var dw = $(window).width() - 80; // 定义视图宽度

    setInterval(function () {
        var sizeflak = minSize + Math.random() * maxSize; // 产生大小不等的雪花
        var startLeft = Math.random() * dw; // 雪花生成是随机的 left 值
        var startOpacity = 0.9 + Math.random() * 0.1; // 随机透明度
        var endTop = dhight - 100; // 雪花停止 top 的位置
        var endLeft = Math.random() * dw; // 雪花停止的 left 位置
        var durationfull = 5000 + Math.random() * 1000; // 雪花飘落速度不同

        flak.clone().appendTo($("body")).css({
            left: startLeft,
            opacity: startOpacity,
            "font-size": sizeflak,
            color: flakColor
        }).animate({
            top: endTop,
            left: endLeft,
            opacity: 0.1
        }, durationfull, function () {
            $(this).remove();
        });
    }, newOne);
};