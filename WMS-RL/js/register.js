/**
 * namespace: REGISTER
 * use: REGISTER.method
 * @author   : CY
 * @datetime : 2016/07/11
 * @version  : 1.0.0
 * @create   : 2016/07/11
 * @update   : 2016/07/11
 */
(function() {
    
    var registerClickMouseListener = function ()
    {
        $('#firstNext').click(function(){
            $('.first').hide();
            $('.second').show();
            $('#oneImg').attr('src', 'img/register-icon1,2.png');
            $('#twoImg').attr('src', 'img/register-icon2.png');
        });

        $('#secondNext').click(function(){
            $('.second').hide();
            $('.third').show();
            $('#oneImg').attr('src', 'img/register-icon1,2.png');
            $('#twoImg').attr('src', 'img/register-icon1,2.png');
            $('#threeImg').attr('src', 'img/register-icon3.png');
        });

        $('#finish').click(function(){
            $('.box-register').hide();
            $('.box-success').show();
        });
    };

    $(function() {
       registerClickMouseListener();
    });
}());