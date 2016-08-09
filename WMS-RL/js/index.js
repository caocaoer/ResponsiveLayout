/**
 * namespace: INDEX
 * use: INDEX    .method
 * @author   : CY
 * @datetime : 2016/07/14
 * @version  : 1.0.0
 * @create   : 2016/07/14
 * @update   : 2016/07/14
 */
(function() {
    
    var screeHeight = window.screen.height;
    var screeWidth = window.screen.width;
    var width = $(window).width();
    var $contentContainer = $('.content');
    function orient() {
        if (window.orientation == 90 || window.orientation == -90) {
            //ipad、iphone竖屏；Andriod横屏 
            $('body').attr('class', 'landscape');
            orientation = 'landscape';
            setHeight(screeWidth);
            return false;
        } else if (window.orientation == 0 || window.orientation == 180) {
            //ipad、iphone横屏；Andriod竖屏 
            $('body').attr('class', 'portrait');
            orientation = 'portrait';
            setHeight(screeHeight);
            return false;
        } else {
            setHeight(screeHeight); //pc
        }
    }

    //用户变化屏幕方向时调用 
    $(window).bind('orientationchange', function (e) {
        setTimeout(function(){
            window.location.reload();//刷新当前页面.
        }, 500);
        orient();
    });

    var setHeight = function (screeHeight) {
        $contentContainer.find('.box').css('height', screeHeight);
        $contentContainer.find('#basic').css('height', screeHeight);
        if(width+17<900){
            $contentContainer.find('.fixth').css('height', screeHeight+200);
        }
    };

    $(function () {
        orient();
        addSlide();
    });

    $(window).resize(function() {
        var windowWidth = $(window).width();
        if(windowWidth == 872 || windowWidth == 882 || windowWidth == 885 || windowWidth == 890){
            window.location.reload();//刷新当前页面.
        }
    });

    var addSlide = function () {
        if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) { //手机
            $('.content').find('.box').addClass('swiper-slide');

            for (var i = 0; i < 5; i++) {
                $('.content').find('.box').removeClass('slide-page-item' + i);
                $('.content').find('.parse').removeClass('slide-page-item' + i);
            }
            $('body').append('<script src="utils/swiper.min.js"><\/script>');
            $('.arrow').show();
            var swiper = new Swiper('.swiper-container', {
                paginationClickable: false,
                direction: 'vertical',
                loop:false,
                onSlideChangeStart: function (swiper) {
                    swiper.activeIndex == 5 ? $('.arrow').hide() : $('.arrow').show();
                }
            });
            $('.finish').hide();
            $('.content .end .footer').show();
            if(screeHeight == 1024 && (window.orientation==90 ||window.orientation==-90)){
                $('head').append('<link media="all and (orientation : landscape" rel="stylesheet" href="css/ipad-index.css" />');
            }
            $('body').find('.fixth .end').load('foot.html');
        } else { //电脑
            $('.arrow').hide();
            $('body').append('<script src="utils/slidepage.js"><\/script>');
            if(width+15>=899){
                $('.content .end').hide();
            }/*else if(width+15<=560 ) {
                alert(width);
                $('.content .end').show();
            }*/
            $('.swiper-container').css({
                'height': 'auto'
            });
        }
        $('body').find('.fixth .end').load('foot.html');
        
    };
}());