$(document).ready(function(){
    $(".navbar, .hero h1, .sign a").css({
        "transition": ".4s",
        "opacity": "1",
        "transform": "translate(0,0)"
    });
});
$('.nav-link').click(function(e){
    const elementTujuan = $(this).attr('href');
    let tujuanScroll = $(elementTujuan).offset().top;
    $('html,body').animate({
        scrollTop: tujuanScroll - 100
    }, 1500)
    e.preventDefault();
});

$(window).scroll(function(){
    let wScroll = $(this).scrollTop();
    if (wScroll > 150){
        $(".navbar").css({
            "backgroundColor": "#00acac",
            "boxShadow": "0 3px 5px #666"
        });
        $(".features").css({
            "opacity": "1",
            "transform": "translateY(0)"
        });
    }

    if (wScroll < 150) {
        $(".navbar").css({
            "backgroundColor": "transparent",
            "boxShadow": "none"
        });
    }

    if ( wScroll > $(".article1").offset().top - 250){
        $(".article1 img").css({
            "transform": "translateX(0)",
            "opacity": "1"
        });
        $(".article-right").css({
            "transform": "translateX(0)",
            "opacity": "1"
        });
    }

    if ( wScroll > $(".article2").offset().top - 250){
        $(".article2 h3").css({
            "transform": "translateX(0)",
            "opacity": "1"
        });
    }

    if ( wScroll > $(".article3").offset().top - 250){
        $(".article3").css({
            "transform": "translateY(0)",
            "opacity": "1"
        });
    }

    if ( wScroll > $(".gallery").offset().top - 160){
        $(".photos .photo").each(function(i){
            setTimeout(function(){
                $(".photos .photo").eq(i).css({
                    "transform": "translateY(0)",
                    "opacity": "1"
                });
            }, (400 * i));
        });
    }
});

$(window).scroll(function(){
    

});
