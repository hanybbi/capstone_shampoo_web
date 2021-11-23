$(function(){
    var $menu = $("#top_menu ul li"),
    $contents = $(".middle > section");

    $menu.click(function(x){
        x.preventDefault();
        $menu.removeClass("on");
        $(this).addClass("on");
        var idx = $(this).index();
        var section = $contents.eq(idx)
        var sectionDistance = section.offset().top;

        $("html, body").stop().animate({scrollTop:sectionDistance});
    });
    $(window).scroll(function(){
        $contents.each(function(){
            if($(this).offset().top <= $(window).scrollTop()){
                var idx = $(this).index();
                $menu.removeClass("on");
                $menu.eq(idx).addClass("on");
            }
        });
    });
});
