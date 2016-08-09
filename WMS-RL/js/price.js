/**
 * namespace: PRICE
 * use: PRICE.method
 * @author   : CY
 * @datetime : 2016/05/26
 * @version  : 1.0.0
 * @create   : 2016/05/26
 * @update   : 2016/05/26
 */
(function() {
    
    var registerPriceMouseListener = function ()
    {
        var $priceContainer = $('#price');
        $priceContainer.find('.content').on('mouseenter', '.type', function (){//鼠标移入
            $(this).css('background-color', 'RGB(243,152,0)');
            $(this).find('h4,span,div,input[type="button"]').css('color', '#fff');
            $(this).find('.line').css('background-color', '#fff');
            $(this).find('input[type="button"]').css('background-color', '#F39800').css('border-color', 'rgb(255, 255, 255)');
        });
        $priceContainer.find('.content').on('mouseleave', '.type', function (){//鼠标移出
           $(this).css('background-color', '#F6F6F6'); $(this).find('h4,span,div,input[type="button"]').css('color', '#F39800');
            $(this).find('span').css('color', '#868686');
            $(this).find('.line').css('background-color', '#F39800');
            $(this).find('input[type="button"]').css('background-color', '#fff').css('border-color', '#F39800');
        });
    };

    $(function() {
       registerPriceMouseListener();
    });
}());