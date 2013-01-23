(function ($) {
    var $slider = $('.slider figure');
    var $page = $('.morePage');
    var $triArticleFirst = $('.numberFirst');
    var $triArticleLast = $('.numberLast');
    var delay = 5000;
    var $boxLogin = $('.connexionBoutton .loginBox');
    var $boxInscription = $('.inscription .loginBox');
    var $login = $('.lastItem');
    var $inscription = $('.inscription');
    var $achat = $('.achat');
    var $livraison = $('article.livraison');
    var $confirmation = $('article.confirmation');
    var $achat = $('article.achat');

    //Slider accueil
    var switchImg = function () {

        var $nextImg = $slider.filter(':visible').next();

        if ($nextImg.size() == 0) {
            $nextImg = $slider.first();
        }

        $slider.filter(':visible').fadeOut('fast', function () {
            $nextImg.fadeIn('fast')
        });
    };

    //Ajouter au panier
    var addPanier = function (e) {
        var $span = $('nav a span');
        var $valPanier = $span.text();

        var articleNumber = parseInt($valPanier) + 1;
        $span.text(articleNumber);
    };

    //Afficher plus d'article
    var addMore = function (e) {
        $page.show();
        $triArticleLast.hide();
        $triArticleFirst.show();
    }
;
    //Afficher moins d'article
    var addLess = function (e) {
        $page.hide();
        $triArticleLast.show();
        $triArticleFirst.hide();
    };

    //Connexion utilisateur ou iscription
    var login = function (e) {
        $boxLogin.hide();
        $boxInscription.hide();
        $(e.target).parent().find('.loginBox').show();
    };

    //Affiche l'étape de livraison
    var showLivraison = function(e){
        $achat.hide();
        $confirmation.hide();
        $livraison.show();
    };

    //Affiche l'étape de confirmation d'achat
    var showConfirmation = function(e){
        $livraison.hide();
        $confirmation.show();
    };

    //Affiche l'étape des d'achat
    var showAchat = function(e){
        $confirmation.hide();
        $livraison.hide();
        $achat.show();
    };

    //Load de routine
    $(function () {
        $slider.not(":first").hide();
        $page.hide();
        $triArticleFirst.hide();
        $boxLogin.hide();
        $boxInscription.hide();
        $livraison.hide();
        $confirmation.hide();

        setInterval(switchImg, delay);
        $('.panier').on('click', addPanier);
        $triArticleFirst.on('click', addLess);
        $triArticleLast.on('click', addMore);
        $login.on('click', login);
        $inscription.on('click', login);
        $('input.livraison').on('click', showLivraison);
        $('input.confirmation').on('click', showConfirmation);
        $('input.achat').on('click', showAchat);
    });

})(jQuery);