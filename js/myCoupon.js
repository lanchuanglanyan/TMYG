var $body=$('body');

$(document).ready(function () {
    //禁止遮罩层穿透
    $('#alertK')[0].addEventListener('click', function (event) {
        if($(event.target).is('.alert')||$(event.target).is('.alert *')){

        }else {
            $('#alertK').hide();
        }
    },{ passive: false });

});




//tab切换聚焦事件,进行list加载
$body.on('focus','#tab>a',function () {
    $(this).addClass('active').siblings().removeClass('active');
    //获取数据
});

//点击弹出qrCode,展示对应qr码数据
$body.on('click','#list .code',function () {
    $('#alertK').show();
});


//初始加载数据
var urlData=urlSearch();
// console.log(urlData.status);
var _tab=$('#tab');
_tab.find('a[data-status="'+urlData.status+'"]').addClass('active').siblings().removeClass('active');
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
