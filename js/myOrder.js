var $body=$('body');


//tab切换聚焦事件,进行list加载
$body.on('focus','#tab>a',function () {
    $(this).addClass('active').siblings().removeClass('active');
    var tab=$(this).attr('data-status');

    if(tab==='-1'){//判断待付款，显示多选下单footer
        $('#footer').show();
        $('#list').css('padding-bottom','14vw');
    }else {
        $('#footer').hide();
        $('#list').css('padding-bottom','0');
    }

    //获取数据



});


//待付款多选付款事件
$body.on('change','#list a input[type=checkbox]',function () {
    if(!$(this).prop('checked')){
        //判断是否选中状态，否 则全选选项熄灭
        $('#footer .checkAll input[type=checkbox]').prop('checked',false)
    }

    //多选下单金额计算
    var money=0;
    $('#list a input[type=checkbox]:checked').each(function (ind,val) {
        money += parseFloat($(this).parents('a').find('.money').find('span').text());
    });
    $('#footer .money>span').text(money);

    //判断是否所有都是选中状态，是 则全选选项点亮
    $('#list a input[type=checkbox]').each(function (ind,val) {
        if(!$(val).prop('checked')){
            return false;
        }else if($('#list a input[type=checkbox]').length===(ind+1)){
            $('#footer .checkAll input[type=checkbox]').prop('checked',true)
        }

    });

});



//全选/全不选 事件
$body.on('change','#footer .checkAll input[type=checkbox]',function () {
    var _prop=$(this).prop('checked');
    $('#list a input[type=checkbox]').each(function (ind,val) {
        $(val).prop('checked',_prop);
    });

    //全选下单金额计算
    var money=0;
    $('#list a input[type=checkbox]:checked').each(function (ind,val) {
        money += parseFloat($(this).parents('a').find('.money').find('span').text());
    });
    $('#footer .money>span').text(money);
});


var urlData=urlSearch();
// console.log(urlData.status);
var _tab=$('#tab');
_tab.find('a[data-status="'+urlData.status+'"]').addClass('active').siblings().removeClass('active');
if(urlData.status==='-1'){//判断待付款，显示多选下单footer
    $('#footer').show();
    $('#list').css('padding-bottom','14vw');
}else {
    $('#footer').hide();
    $('#list').css('padding-bottom','0');
}

//获取数据






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
