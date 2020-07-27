var $body=$('body');


$(document).ready(function () {

    //根据几人团设置参团人位置框的居中宽
    groupNumberList(3);
});



function groupNumberList(number) {
    if(number<=5){
        var _width=number*20;
        $('#groupNumberList').css('cssText','width: '+_width+'vw');
    }else {
        $('#groupNumberList').css('cssText','width: 100vw');
    }
}
