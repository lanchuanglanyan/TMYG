
var $body=$('body');


//点击切换选项卡载入数据
$body.on('click','#goodsList>.tab>div',function () {
    $(this).addClass('active').siblings().removeClass('active');
});








