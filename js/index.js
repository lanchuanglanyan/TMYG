var $body=$('body');


//加载完成后展示
$(document).ready(function () {
    $('#bgt').hide();
});




/*****index*****/
if($body.parent().attr('data-page')==='index'){
    //定义banner滚动
    var bannerLen=0;

    var length=$('#bannerT').find('a').length;
    var bannerDwidth=5.5*(length-1);
    $('#bannerD').css('width',bannerDwidth+'vw').css('left',(94.6-bannerDwidth)/2+'vw');
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
            animateLength = bannerLen*(-94.6)+"vw";
            $("#bannerT").stop().animate({"left":animateLength},1000,function(){
                if(bannerLen===length-1){
                    bannerLen=0;
                    $("#bannerT").css({"left":0});
                }
            });
        }else {
            animateLength = bannerLen*(-94.6)+"vw";
            console.log(animateLength);

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
            $("#bannerT").css({"left":(length-1)*(-94.6)+"vw"});
            bannerLen--;
            animateLength = bannerLen*(-94.6)+"vw";
            $("#bannerT").stop().animate({"left":animateLength},1000,function(){
                if(bannerLen===0){
                    bannerLen=length-1;
                    $("#bannerT").css({"left":(length-1)*(-94.6)+"vw"});
                }
            });
        }else {
            animateLength = bannerLen*(-94.6)+"vw";
            $("#bannerT").stop().animate({"left":animateLength},1000,function(){
                if(bannerLen===0){
                    bannerLen=length-1;
                    $("#bannerT").css({"left":(length-1)*(-94.6)+"vw"});
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
    $body.on('touchstart','#banner',function (e) {
        // console.log(e);
        startX1 = e.originalEvent.changedTouches[0].pageX;
        startY1 = e.originalEvent.changedTouches[0].pageY;
    });
    $body.on('touchend','#banner',function (e) {
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



}
