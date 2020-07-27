
$body=$('body');


//扩展tab显示
$body.on('click','#nav .other',function () {
    $('#alertK').show();
    $('#nav>p').show();
});
//选中遮罩层/扩展tab元素时，扩展tab隐藏
$body.on('click','#alertK,#nav>p>a',function (e) {
    console.log($(e.target).parents('#nav').attr('id'));
    //判断是否选中扩展tab元素
    if($(e.target).parents('#nav').attr('id')==='nav'){
        $('#nav .other>.txt').text($(e.target).text());
        //加载新的商品list↓



    }
    $('#alertK').hide();
    $('#nav>p').hide();
});



