/**
 * namespace: HEAD
 * use: HEAD    .method
 * @author   : CY
 * @datetime : 2016/05/26
 * @version  : 1.0.0
 * @create   : 2016/05/26
 * @update   : 2016/05/26
 */
(function() {
    
    var registerClickListener = function ()
    {
        var $iconContainer = $('#icon');
        var $navContainer = $('#nav');
        
        $iconContainer.click(function(){ 
            if($('.nav').css('display') == 'none'){
                $('.nav').fadeIn();
            }else {
                $('.nav').fadeOut();
            }
        });
        $('.content,.footer').click(function (){
            $(".nav").fadeOut();
        });
        /*$('.nav li').click(function (){
            $('.nav li').removeClass('current');
            $(this).addClass('current');
        });*/
    };

    $(function() {
        registerClickListener();
    });
}());