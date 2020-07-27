
var $body=$('body');




$body.on('touchstart','#view',function (e) {
    startX1 = e.originalEvent.changedTouches[0].pageX;
    startY1 = e.originalEvent.changedTouches[0].pageY;
});
$body.on('touchend','#view',function (e) {
    startX2 = e.originalEvent.changedTouches[0].pageX;
    startY2 = e.originalEvent.changedTouches[0].pageY;

    var sx=startX2-startX1;
    var sy=startY2-startY1;
    // console.log(sx,sy);
    if(sx>50&&(sy<200&&sy>-200)){
        console.log('上一个');
        go(false,$(this));

    }else if(sx<-50&&(sy<200&&sy>-200)){
        console.log('下一个');
        go(true,$(this));

    }
});


//定义环绕切换事件
function go(where,div) {
    console.log(div);
    // where表示前一张还是后一张, true则为后一张
    var box = div,
        imgs = box.children('div'),
        pos = ((box.data('pos') | 0) + (where ? 1 : -1) + imgs.length) % imgs.length;
    box.data('pos', pos);
    imgs.each(function (i,v) {
        console.log(i,v);
        switch (i) {
            case (pos - 1 + imgs.length) % imgs.length:
                v.className = "pos3";
                break;
            case pos:
                v.className = "pos0";
                break;
            case (pos + 1) % imgs.length:
                v.className = "pos1";
                break;
            default:
                v.className = "pos2";
        }
    });
}
