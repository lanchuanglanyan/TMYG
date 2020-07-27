$body=$('body');



//切换tab
$body.on('click','#tab>div',function () {
    $(this).addClass('act').siblings().removeClass('act');
});



