var $body=$('body');

//监听滚动,锚点位置details_nav定位
window.addEventListener('scroll',function () {
    //当前界面高度
    var $scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    // var $scrollTop2=document.body.scrollTop;
    // alert($('#details').offset().top+' ccc '+$scrollTop+' dd '+$scrollTop2);
    if($('#details').offset().top-$scrollTop<=0){
        $('#details>.details_nav').addClass('position');
        $('#details>.details_T>.details_parameter').css('padding-top','13vw');
    }else {
        $('#details>.details_nav').removeClass('position');
        $('#details>.details_T>.details_parameter').css('padding-top','1vw');
    }
});

//定义banner滚动
var bannerLen=0;

var length=$('#bannerT').find('a').length;
var bannerDwidth=5.5*(length-1);
$('#bannerD').css('width',bannerDwidth+'vw').css('left',(100-bannerDwidth)/2+'vw');
for(var i=0;i<length-1;i++){
    if(i===0){
        $('#bannerD').append('<div class="active"></div>');
    }else {
        $('#bannerD').append('<div></div>');
    }
}

function bannerTime() {
    var length=$('#bannerT').find('a').length;
    bannerLen++;
    $('#bannerD').find('div').removeClass('active');
    $('#bannerD').find('div').eq(bannerLen).addClass('active');
    if(bannerLen===length-1){
        $('#bannerD').find('div').eq(0).addClass('active');
    }
    var animateLength;
    if(bannerLen>length-1){
        bannerLen=0;
        $("#bannerT").css({"left":0});
        bannerLen++;
        animateLength = bannerLen*(-100)+"vw";
        $("#bannerT").stop().animate({"left":animateLength},1000,function(){
            if(bannerLen===length-1){
                bannerLen=0;
                $("#bannerT").css({"left":0});
            }
        });
    }else {
        animateLength = bannerLen*(-100)+"vw";
        // console.log(animateLength);

        $("#bannerT").stop().animate({"left":animateLength},1000,function(){
            if(bannerLen===length-1){
                bannerLen=0;
                $("#bannerT").css({"left":0});
            }
        });
    }
    // console.log(bannerLen);
}
var bannnertime=setInterval(bannerTime,5000);

//banner切换
function bannerBack() {
    clearInterval(bannnertime);
    var length=$('#bannerT').find('a').length;
    bannerLen--;
    $('#bannerD').find('div').removeClass('active');
    $('#bannerD').find('div').eq(bannerLen).addClass('active');
    if(bannerLen===0){
        $('#bannerD').find('div').eq(length-1).addClass('active');
    }
    var animateLength;
    if(bannerLen<0){
        bannerLen=length-1;
        $("#bannerT").css({"left":(length-1)*(-100)+"vw"});
        bannerLen--;
        animateLength = bannerLen*(-100)+"vw";
        $("#bannerT").stop().animate({"left":animateLength},1000,function(){
            if(bannerLen===0){
                bannerLen=length-1;
                $("#bannerT").css({"left":(length-1)*(-100)+"vw"});
            }
        });
    }else {
        animateLength = bannerLen*(-100)+"vw";
        $("#bannerT").stop().animate({"left":animateLength},1000,function(){
            if(bannerLen===0){
                bannerLen=length-1;
                $("#bannerT").css({"left":(length-1)*(-100)+"vw"});
            }
        });
    }
    // console.log(bannerLen);
    bannnertime=setInterval(bannerTime,5000);
}
function bannerGo() {
    clearInterval(bannnertime);
    bannerTime();
    bannnertime=setInterval(bannerTime,5000);
}
//banner滑动
var startX1,startY1,startX2,startY2;
$body.on('touchstart','#displayMap',function (e) {
    // console.log(e);
    startX1 = e.originalEvent.changedTouches[0].pageX;
    startY1 = e.originalEvent.changedTouches[0].pageY;
});
$body.on('touchend','#displayMap',function (e) {
    // console.log(e);
    startX2 = e.originalEvent.changedTouches[0].pageX;
    startY2 = e.originalEvent.changedTouches[0].pageY;

    var sx=startX2-startX1;
    var sy=startY2-startY1;
    console.log(sx,sy);
    if(sx>50&&(sy<200&&sy>-200)){
        console.log('右滑');
        bannerBack();

        // $(this).siblings().removeClass('shanxian').find('.dgo').hide().siblings().show();
        // $(this).addClass('right').removeClass('left');

    }else if(sx<-50&&(sy<200&&sy>-200)){
        console.log('左滑');
        bannerGo();

        // $(this).addClass('left').removeClass('right');
        // $(this).siblings().find('.dt').hide().siblings().show();
        // $(this).siblings().addClass('shanxian');

    }
});


//弹窗返回
$body.on('click','#alertK .back',function () {
    // console.log(1);
    $(this).parent().removeClass('active').parent().hide();
});
//弹窗展示
function alertT(name) {
    $('#alertK').find('.'+name+'').addClass('active').siblings().removeClass('active').parent().show();
}
//确定购买/加入购物车选项
function pay(name){
    if($('#alertK>.choose').hasClass('active')){
        console.log($(name).attr('id'));
    }else {
        alertT('choose');
    }
}
//切换选项卡>选择参数
$body.on('click','#chooseK>.chooseK span',function () {
    var $txt=$(this).text();
    var $id=$(this).parents('.chooseK').attr('data-choose');
    $(this).addClass('active').siblings().removeClass('active');
    $('#chooseThis').find('span[data-choose="'+$id+'"]').text($txt);
});
//切换选项卡>详情区域切换
$body.on('click','#details>.details_nav .tab',function () {
    var $name=$(this).attr('data-active');
    $(this).addClass('active').siblings().removeClass('active');
    $('#details').find('.'+$name+'').addClass('active').siblings().removeClass('active');
});


var canvasImg;
function canvasHtml() {
    if(canvasImg===null||canvasImg===''||canvasImg===undefined) {

        var emt=$('#alertK>.alert.poster');
        html2canvas(emt,
            {
                useCORS:true,
                // allowTaint:true,
                taintTest: false,
                width: emt.offsetWidth ,
                height: emt.offsetHeight ,
                // window.devicePixelRatio是设备像素比
                scale: window.devicePixelRatio,
                // scale: 2,
                // dpi: window.devicePixelRatio *100
            }
        ).then(function (canvas) {

            var context = canvas.getContext('2d');
            // 【重要】关闭抗锯齿
            context.mozImageSmoothingEnabled = false;
            context.webkitImageSmoothingEnabled = false;
            context.msImageSmoothingEnabled = false;
            context.imageSmoothingEnabled = false;

            var url = canvas.toDataURL("image/png");
            canvasImg=url;
            console.log(url);

            $('#shareImg').attr('src',url).siblings().hide();
        });

    }else {
        $('#shareImg').attr('src',canvasImg).siblings().hide();
        $('.anim').hide();
    }


}



var data={'100':['1','2','3'],'200':['4','5','6']};
var jsonData1=Object.entries(data);
var mpaDate1=new Map(jsonData1);
mpaDate1.set('300',['7','8','9']);
var jsonData2=Array.from(mpaDate1);
console.log(jsonData1,mpaDate1,jsonData2);


/* 部分隐藏处理
** str 需要处理的字符串
** frontLen  保留的前几位
** endLen  保留的后几位
** cha  替换的字符串
** 实例：爱生活的九月 => 爱****月
*/
function getSecrecy(str, frontLen, endLen,cha) {
    console.log(str, frontLen, endLen,cha);
    var len = str.length - frontLen - endLen;
    var xing = '';
    for (var i = 0; i < len; i++) {
        xing += cha;
    }
    return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}




















