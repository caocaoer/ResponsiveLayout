$(function(){function e(e){if("up"===e){if(0>=o)return!1;o--}else{if(o>=t-1)return!1;o++}$("html, body").animate({scrollTop:n[o]},500),$(".slide-page-fixed > span").removeClass("cur").eq(o).addClass("cur")}for(var n=[],t=$(".slide-pages > div").size(),o=($(".header").outerHeight(),0),i=0;t>i;i++)n[i]=$(".slide-pages > div").eq(i).offset().top;n[0]=0,$(".slide-page-fixed > span").each(function(e){$(this).click(function(){o=e,$("html,body").animate({scrollTop:n[o]},300),$(".slide-page-fixed > span").removeClass("cur").eq(o).addClass("cur")})});var a,l=function(o){var i=0;o=o||window.event,o.wheelDelta?i=o.wheelDelta/120:o.detail&&(i=-o.detail/3),$(window).scrollTop()<n[t-1]&&(o&&o.preventDefault?o.preventDefault():window.event.returnValue=!1,a?clearTimeout(a):"",a=setTimeout(function(){0>i?e("down"):i>0&&e("up")},100))};document.addEventListener&&document.addEventListener("DOMMouseScroll",l,!1),window.onmousewheel=document.onmousewheel=l});