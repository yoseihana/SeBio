(function ($) {
    var $slider = $('.slider figure');
    var $page = $('.morePage');
    var $triArticleFirst = $('.numberFirst');
    var $triArticleLast = $('.numberLast');
    var delay = 5000;
    var $box = $('.loginBox');
    var $form = $('#loginBox form');
    var $login = $('.lastItem a');

    //Slider accueil
    var switchImg = function () {

        var $nextImg = $slider.filter(':visible').next();

        if ($nextImg.size() == 0) {
            $nextImg = $slider.first();
        }

        $slider.filter(':visible').fadeOut('fast', function () {
            $nextImg.fadeIn('fast')
        });
    }

    //Ajouter au panier
    var addPanier = function (e) {
        var $span = $('nav a span');
        var $valPanier = $span.text();

        var articleNumber = parseInt($valPanier) + 1;
        $span.text(articleNumber);
    }

    //Afficher plus d'article
    var addMore = function (e) {
        $page.show();
        $triArticleLast.hide();
        $triArticleFirst.show();
    }

    //Afficher moins d'article
    var addLess = function (e) {
        $page.hide();
        $triArticleLast.show();
        $triArticleFirst.hide();
    }

    //Connexion utilisateur
    var login = function (e) {
        $box.show();
        var $email = $('#email').val();
        var $password = $('#password').val();



        $('#login').on('click', function(e){
                addValue($email, $password);
        });

    };

    var addValue = function(email, password){
        console.log('Email: '+email+' - Password: '+password);
    }

    //Load de routine
    $(function () {
        $slider.not(":first").hide();
        $page.hide();
        $triArticleFirst.hide();
        $box.hide();

        setInterval(switchImg, delay);
        $('.panier').on('click', addPanier);
        $triArticleFirst.on('click', addLess);
        $triArticleLast.on('click', addMore);
        $login.on('click', login);


    });

})(jQuery);

/*$(function() {
 var button = $('#loginButton');
 var box = $('#loginBox');
 var form = $('#loginForm');
 button.removeAttr('href');
 button.mouseup(function(login) {
 box.toggle();
 button.toggleClass('active');
 });
 form.mouseup(function() {
 return false;
 });
 $(this).mouseup(function(login) {
 if(!($(login.target).parent('#loginButton').length > 0)) {
 button.removeClass('active');
 box.hide();
 }
 });
 });*/
