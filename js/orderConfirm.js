var $body=$('body');


//假设红包数组
var redPacketArr=[
    {redPacketId:1,preferentialAmount:10,quota:200},
    {redPacketId:2,preferentialAmount:20,quota:200},
    {redPacketId:3,preferentialAmount:30,quota:200}
];
$.each(redPacketArr,function (ind,val) {
    var html='<div data-redPacket="'+val.redPacketId+'" class="">\n' +
        '<div>￥<span data-redPacket="preferentialAmount">'+val.preferentialAmount+'</span></div>\n' +
        '<div>满<span data-redPacket="quota">'+val.quota+'</span>元使用</div>\n' +
        '<div>使用要求：限唐目商城产品可用，可用商品下单时可见有优惠券使用提示</div>\n' +
        '</div>\n';
    $('#alertK .red-packet-K').append(html);
});


//禁止遮罩层穿透
$('#alertK')[0].addEventListener('click', function (event) {
    //判断点击遮罩层就隐藏，点击弹窗不作操作
    if($(event.target).is('.alert')||$(event.target).is('.alert *')){
    }else {
        $('#alertK').hide();
    }
},{ passive: false });
//关闭/打开选择红包弹窗
$body.on('click','#alertK .back,#orderGoodsList .red-packet',function () {
    var _this=$(this);
    if(_this.parent().attr('data-id')){
        console.log($(this).parent().attr('data-id'));
        localStorage.setItem('orderGoodsId',$(this).parent().attr('data-id'));
        if(_this.find('.number')[0]){
            $('#alertK').toggle();

            //显示红包列表

        }
    }else {
        $('#alertK').toggle();
    }
});
//选择红包,对应订单商品显示优惠金额
$body.on('click','#alertK .red-packet-K>div',function () {
    $(this).addClass('active').siblings().removeClass('active');
    var _redPacketId=$(this).attr('data-redPacket');
    var _money=$(this).find('[data-redPacket="preferentialAmount"]').text();
    var orderGoodsId=localStorage.getItem('orderGoodsId');
    $('#orderGoodsList').find('[data-id="'+orderGoodsId+'"]').find('.red-packet').attr('data-redPacket',_redPacketId).find('.money').text(_money);

    $('#alertK').hide();
});

//获取订单商品列表已选择红包
