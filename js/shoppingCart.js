var $body=$('body');




//弹窗返回
$body.on('click','#alertK .back',function () {
    // console.log(1);
    $(this).parent().parent().hide();
});
//点击更换参数弹出选择参数框
$body.on('click','.chooseThis',function () {
    $('#alertK').show();
});
//切换选项卡>选择参数
$body.on('click','#chooseK>.chooseK span',function () {
    var $txt=$(this).text();
    var $id=$(this).parents('.chooseK').attr('data-choose');
    $(this).addClass('active').siblings().removeClass('active');
    $('#chooseThis').find('span[data-choose="'+$id+'"]').text($txt);
});








