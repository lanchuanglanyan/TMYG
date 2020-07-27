var $body=$('body');












//显示element-ui计数器
var Main = {
    data() {
        return {
            num: 1
        };
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
};
var Ctor = Vue.extend(Main);
new Ctor().$mount('#chooseNumber');

//禁止遮罩层穿透并点击遮罩层取消
$('#alertK')[0].addEventListener('click', function (event) {
    if($(event.target).is('.alert')||$(event.target).is('.alert *')){

    }else {
        $('#alertK').find('.alert').removeClass('active').parent().hide();
    }
},{ passive: false });

//弹窗返回
$body.on('click','#alertK .back',function () {
    // console.log(1);
    $(this).parent().removeClass('active').parent().hide();
});
//弹窗展示
function alertT(name) {
    $('#alertK').find('.'+name+'').addClass('active').parent().show();
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


//切换选项卡>选择好评数
$body.on('click','#title span',function () {
    $(this).addClass('active').siblings().removeClass('active');
    //切换对应评论
});



/* 部分隐藏处理
** str 需要处理的字符串
 ** frontLen  保留的前几位
** endLen  保留的后几位
** cha  替换的字符串
*/
function getSecrecy(str, frontLen, endLen,cha) {
    var len = str.length - frontLen - endLen;
     var xing = '';
    for (var i = 0; i < len; i++) {
        xing += cha;
        }
    return str.substring(0, frontLen) + xing + str.substring(str.length - endLen);
}