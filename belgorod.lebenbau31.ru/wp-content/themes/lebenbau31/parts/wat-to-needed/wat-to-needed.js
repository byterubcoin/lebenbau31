
$(document).ready(function() {
    $(".slider").slick({
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: true,
        //cssEase: 'easeInBack',
    });

    function myHandler(e) {
        $('.slider').slick('slickPlay');
    }
                
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;
    $('.progressBarContainer .progressBar').each(function(index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
    });
    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 200);
    }
    function interval() {
        if (($('.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
        progressBarIndex = $('.slider .slick-track div[aria-hidden="false"]').data("slickIndex");
        startProgressbar();
        } else {
            percentTime += 1 / (time + 0);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            $('.progressBarMenu').removeClass('active');
            $('.inProgress' + progressBarIndex).parents('.progressBarMenu').addClass('active');
            if (percentTime >= 100) {
                $('.single-item').slick('slickNext');
                progressBarIndex++;
            if (progressBarIndex > 2) {
                progressBarIndex = 0;
            }
                startProgressbar();
            }
        }
    }
    function resetProgressbar() {
        $('.inProgress').css({
        width: 0 + '%'
        });
        $('.inProgress').removeClass('active');
        clearInterval(tick);
    }
    startProgressbar();
    $('.progressBarContainer div').click(function () {
        clearInterval(tick);
        var goToThisIndex = $(this).find("span").data("slickIndex");
        $('.single-item').slick('slickGoTo', goToThisIndex, false);
        $('.progressBarMenu').removeClass('active');
        $(this).parents('.progressBarMenu').addClass('active');
        startProgressbar();
    });

    $('.slider-linkp').click(function(){    
       $('#openpopupsliderform').addClass('open');
       var $datatitle = $(this).data('title');
       var $headerh1 = $('#headerh1').data('title');
       jQuery(".slideitemhead").html($datatitle);
       jQuery(".text-window").val($datatitle);
       jQuery(".text-header").val($headerh1);
       return false; 
    });
});

