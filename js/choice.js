var $body=$('body');


//顶部tab切换聚焦事件,进行list加载
$body.on('focus','#tab>a',function () {
    $(this).addClass('active').siblings().removeClass('active');
    var $data_status=$(this).attr('data-status');
    $('#list>div[data-status="'+$data_status+'"]').show().siblings().hide();
    //获取数据

});

/* 预设flash-sale-tabList值,进行限时抢购tabList预设长度
** 37是单个元素宽度*/
var flash_sale_arr=[
    {date:'2020-1-4',val:'1月4日',act:1},
    {date:'2020-1-12',val:'1月12日',act:0},
    {date:'2020-1-20',val:'1月20日',act:0},
    {date:'2020-1-28',val:'1月28日',act:0}
];
var tabListLength=flash_sale_arr.length*37;
$('#tabList').css('width',tabListLength+'vw');
$.each(flash_sale_arr,function (ind,val) {
    var html;
    if(val.act===1){
        html='<a data-date="'+val.date+'" class="act" href="javascript:void(0)">\n' +
            '       <div>\n' +
            '           <div>'+val.val+'</div>\n' +
            '           <div>抢购进行中</div>\n' +
            '       </div>\n' +
            '     </a>\n';
    }else {
        html='<a data-date="'+val.date+'" class="" href="javascript:void(0)">\n' +
            '       <div>\n' +
            '           <div>'+val.val+'</div>\n' +
            '           <div>抢购即将开始</div>\n' +
            '       </div>\n' +
            '     </a>\n';
    }
    $('#tabList').append(html);
});


//限时抢购tab切换聚焦事件,进行限时抢购list加载
$body.on('focus','#tabList>a',function () {
    $(this).addClass('act').siblings().removeClass('act');
    var $data_date=$(this).attr('data-date');

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
