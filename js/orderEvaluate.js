var $body=$('body');



$body.on('click','.grade>div',function () {
    $(this).addClass('act').siblings().removeClass('act')
    // $(this).parent().children().removeClass('act');
    // $(this).addClass('act').prevAll().addClass('act');
});



function evaluateLength(_this) {
    $(_this).siblings().find('span').text(150-$(_this).val().length);
}
