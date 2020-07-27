var $body=$('body');



var urlData=urlSearch();
$('.'+urlData.stats+'').addClass('act').siblings().removeClass('act');


//禁止遮罩层穿透
$('#alertK')[0].addEventListener('click', function (event) {
    if($(event.target).is('.alert')||$(event.target).is('.alert *')){

    }else {
        $('#alertK').hide();
    }
},{ passive: false });

//切换退款/退货/换货原因
function changeRadio(_this) {
    $(_this).find('input[type=radio]').prop('checked',true);
    var _txt=$(_this).find('.val').text();
    var _id=$(_this).find('input[type=radio]').attr('id');
    $('.radioReason').attr('data-radio',_id).text(_txt);
    $('#alertK').hide();
}
//点击选择退款/退货/换货原因
$body.on('click','.chooseReason',function () {
    $('#alertK').show();
});



/*获取链接参数
* http://www.baidu.com?a=1&b=2&c=3 ==> {a:1,b:2,c:3}
* */
function urlSearch() {
    var str=location.href; //取得整个地址栏
    var num=str.split('?');
    var arr;
    var data={};
    var name;
    $.each(num,function (ind,val) {
        if(ind>0){
            if(val.split('&').length>1){
                for(var i=0;i<val.split('&').length;i++){
                    arr=val.split('&')[i].split('=');
                    name=arr[0];
                    data[name]=arr[1];
                }
            }else {
                arr=val.split('=');
                var name=arr[0];
                data[name]=arr[1];
            }
        }
    });
    return data;
}
