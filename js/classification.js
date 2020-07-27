
$body=$('body');


//切换tab=>sortList
$body.on('click','#sortList1>a',function () {
    $(this).addClass('active').siblings().removeClass('active');
});






