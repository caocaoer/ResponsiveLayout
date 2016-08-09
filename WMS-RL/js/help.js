/**
 * namespace: HELP
 * use: HELP    .method
 * @author   : CY
 * @datetime : 2016/05/26
 * @version  : 1.0.0
 * @create   : 2016/05/26
 * @update   : 2016/05/26
 */
(function() {
    
    var registerClickListener = function ()
    {
        var $helpContainer = $('#help');
        var $contentContainer = $helpContainer.find('.content');
        
        var $contentContainer = $('.content');
        $contentContainer.find('.menu input').click(function(){ 
            var type = $(this).data('type');
            $contentContainer.find('.menu input').removeClass('current');
            $(this).addClass('current');
            $('.box').hide();
            $('.'+type+'').show();
        });
        
        $contentContainer.find('#use').click(function(){
            $contentContainer.find('#operate img').attr('src', 'img/icon2,1.png');
            $contentContainer.find('#common-question img').attr('src', 'img/icon3,1.png');
            $(this).find('img').attr('src', 'img/icon1,2.png');
            
            $contentContainer.find('.use').show();
            $contentContainer.find('.question').hide();
            $contentContainer.find('.operate').hide();
        });
        $contentContainer.find('#operate').click(function(){
            $contentContainer.find('#use img').attr('src', 'img/icon1,1.png');
            $contentContainer.find('#common-question img').attr('src', 'img/icon3,1.png');
            $(this).find('img').attr('src', 'img/icon2,2.png');
            
            $contentContainer.find('.use').hide();
            $contentContainer.find('.question').hide();
            $contentContainer.find('.operate').show();
        });
        $contentContainer.find('#common-question').click(function(){
            $contentContainer.find('#use img').attr('src', 'img/icon1,1.png');
            $contentContainer.find('#operate img').attr('src', 'img/icon2,1.png');
            $(this).find('img').attr('src', 'img/icon3,2.png');
            
            $contentContainer.find('.use').hide();
            $contentContainer.find('.question').show();
            $contentContainer.find('.operate').hide();
        });
        
        var $container = $('.introduce li');
        $container.find('h4').click(function(){  
            var $currentParent = $(this).parent().parent().parent();
            $currentParent.find('h4').removeClass('selected');
            if($(this).parent().find('.explain').css('display') == 'block'){
                $(this).parent().find('.explain').hide();
                $(this).removeClass('selected');
            }else {
                $(this).parent().parent().find('.explain').hide();
                $(this).parent().find('.explain').show();
                if(!$currentParent.hasClass('question')){
                    $(this).addClass('selected');
                }
            }
        });
    };

    $(function() {
        registerClickListener();
    });
}());