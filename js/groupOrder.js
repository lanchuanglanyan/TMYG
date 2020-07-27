
var $body=$('body');


//tab切换聚焦事件,进行list加载
$body.on('focus','#tab>a',function () {
    $(this).addClass('active').siblings().removeClass('active');

});



