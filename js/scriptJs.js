(function ($) {
    var $slider = $('.slider figure');
    var $page = $('.morePage');
    var $triArticleFirst = $('.number li:first');
    var $triArticleLast = $('.number li:last');
    var delay = 5000;

    var switchImg = function () {

        var $nextImg = $slider.filter(':visible').next();

        if ($nextImg.size() == 0) {
            $nextImg = $slider.first();
        }

        $slider.filter(':visible').fadeOut('fast', function () {
            $nextImg.fadeIn('fast')
        });
    }

    var addPanier = function (e) {
        var $span = $('nav a span');
        var $valPanier = $span.text();

        var articleNumber = parseInt($valPanier) + 1;
        $span.text(articleNumber);
    }

    var addMore = function (e) {
        console.log('ok');
        $page.show();
        $triArticleLast.hide();
        $triArticleFirst.show();
    }

    var addLess = function (e) {
        console.log('test');
        $page.hide();
        $triArticleLast.show();
        $triArticleFirst.hide();
    }

    //Load de routine
    $(function () {
        $slider.not(":first").hide();
        $page.hide();
        $triArticleFirst.hide();

        setInterval(switchImg, delay);
        $('.panier').on('click', addPanier);
        $triArticleFirst.on('click', addMore);
        $triArticleLast.on('click', addLess);

    });

})(jQuery);
