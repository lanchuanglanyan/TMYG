var $body=$('body');

$(document).ready(function () {
    // $('#moneyExtractMoney').focus();
});


//切换充值选项
$body.on('click','#moneyRechargeSelect>a',function () {
    $(this).addClass('act').siblings().removeClass('act');
});



//全部提现
function allMoney(_this) {
    var _money=$(_this).attr('data-money');
    $('#moneyExtractMoney').val(_money);
}

//输入数字，小数点后两位
function clearNoNum(obj) {
    obj.value = obj.value.replace(/[^\d.]/g,"");  //清除“数字”和“.”以外的字符
    obj.value = obj.value.replace(/\.{2,}/g,"."); //只保留第一个. 清除多余的
    obj.value = obj.value.replace(".","$#$").replace(/\./g,"").replace("$#$",".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/,'$1$2.$3');//只能输入两个小数
    if(obj.value.indexOf(".")< 0 && obj.value !==""){//以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        obj.value= parseFloat(obj.value);
    }
}

//点击行切换支付方式
function radioChange(_this) {
    $(_this).find('input[type=radio]').prop('checked',true);


    $('#alertK').hide();
}
