// new_lebenbau
document.addEventListener('wpcf7submit', function(event) {
    if ('4116' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('konsultaciya-header');
        ga('send', 'event', 'konsultaciya-header', 'submit');
    }
    if ('4119' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('raschet-header');
        ga('send', 'event', 'raschet-header', 'submit');
    }
    if ('4122' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zamer-header');
        ga('send', 'event', 'zamer-header', 'submit');
    }

    // внизу на всех страницах
    if ('3316' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zayavka-glavnaya');
        ga('send', 'event', 'zayavka-glavnaya', 'submit');
    }


    if ('5969' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zakazat-razmer-catalog');
        ga('send', 'event', 'zakazat-razmer-catalog', 'submit');
    }


    //https://lebenbau.ru/oknavkvartiru/
    if ('4329' == event.detail.contactFormId) {
        if (location.href.indexOf('cottages') > 1) yaCounter25154291.reachGoal('raschet-okna-dlya-kottedzhej');
        ga('send', 'event', 'raschet-okna-dlya-kottedzhej', 'submit');
        if (location.href.indexOf('oknavkvartiru') > 1) yaCounter25154291.reachGoal('raschet-okna-dlya-kvartiry');
        ga('send', 'event', 'raschet-okna-dlya-kvartiry', 'submit');
        if (location.href.indexOf('balkons') > 1) yaCounter25154291.reachGoal('zayavka-raschet-osteklenie-balkonov');
        ga('send', 'event', 'zayavka-raschet-osteklenie-balkonov', 'submit');
    }


    if ('5101' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zakaz-razmer-osteklenie-balkonov');
        ga('send', 'event', 'zakaz-razmer-osteklenie-balkonov', 'submit');
    }
    if ('5099' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('podskazat-osteklenie-balkonov');
        ga('send', 'event', 'podskazat-osteklenie-balkonov', 'submit');
    }

    if ('4054' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zakaz-laminaciya');
        ga('send', 'event', 'zakaz-laminaciya', 'submit');
    }

    if ('3992' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zayavka-besplatnyj-zamer');
        ga('send', 'event', 'zayavka-besplatnyj-zamer', 'submit');
    }

    if ('3991' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zayavka-zakaz-so-skidkoj');
        ga('send', 'event', 'zayavka-zakaz-so-skidkoj', 'submit');
    }

    if ('3993' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zayavka-oplata');
        ga('send', 'event', 'zayavka-oplata', 'submit');
    }

    if ('3990' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zayavka-proizvodstvo');
        ga('send', 'event', 'zayavka-proizvodstvo', 'submit');
    }

    if ('4010' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zayavka-dostavka');
        ga('send', 'event', 'zayavka-dostavka', 'submit');
    }

    if ('3941' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('zayavka-ustanovka');
        ga('send', 'event', 'zayavka-ustanovka', 'submit');
    }

    if ('5970' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('uznat-stoimost-razmera-okna-simple');
        ga('send', 'event', 'uznat-stoimost-razmera-okna-simple', 'submit');
    }

    if ('5810' == event.detail.contactFormId) {
        yaCounter25154291.reachGoal('uznat-stoimost-razmera-okna-simple1');
        ga('send', 'event', 'uznat-stoimost-razmera-okna-simple1', 'submit');
    }



}, false);



// HEADER JS //
$(document).ready(function() {
    $('.citi-fake').click(function() {
        $("#siteregion").click();
    });

    if (window.matchMedia('(max-width: 600px)').matches) {
        $("[data-fancybox]").fancybox({
            preload: true,
            attr: {
                scrolling: "auto"
            },
            iframe: {
                css: {
                    width: '320px',
                    height: '300px'
                }
            }
        });
    } else {
        $("[data-fancybox]").fancybox({
            preload: true,
            attr: {
                scrolling: "auto"
            },
            iframe: {
                css: {
                    width: '300px',
                    height: '300px'
                }
            }
        });
    }



    $('.side-menu-toggle').click(function() {
        $('.site-menu').addClass('showing');
        $('body').css('position', 'fixed');
    });

    $('.menu-close a').click(function() {
        $('.site-menu').removeClass('showing');
        $('body').css('position', 'relative');
    });

    $('#seo-header-mobile').click(function() {
        $('#seo').toggleClass('showing');
    });

    $('#all-site-toggle').click(function() {
        $('.all-site-container').toggleClass('showing');
        $('body').css('position', 'fixed');
    });

    $('#all-site-close-btn').click(function() {
        $('body').css('position', 'relative');
        window.scrollTo(0, document.body.scrollHeight);
        $('.all-site-container').toggleClass('showing');
    });

    $('.CardProduct_Galery').hover(function() {
        $('.CardProduct_Galery #worksVideo')[0].play();
    });


    $('.why-us').hover(function() {
        $('.why-us #whyUsVideo')[0].play();
    });


    $('.toparea-link, #siteregion').click(function() {
        $("#form-toparea").removeClass("closed");
        $("#form-toparea").addClass("open");
        $("html").addClass("noscroll");
        $('.toparea').addClass('hide');
        $('.determine-region').addClass('hidden');
        $('.check-region').removeClass('hidden');
        return false
    });

    $('.popup-form__btn-close, .popup-formback, .close-link').click(function() {
        $(".open").addClass("closed");
        $(".popup-form").removeClass("open");
        $("html").removeClass("noscroll");
        $('.toparea').removeClass('hide');
        setTimeout(function() {
            $('.popup-form').removeClass("open");
        }, 300);
        setTimeout(function() {
            $('.popup-form').removeClass("closed");
        }, 1000);
        return false
    });

    $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
        delta = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
        if (delta >= 0) {
            $('.toparea').removeClass('hidearea');

        } else {
            $('.toparea').addClass('hidearea');

        }
    });

    //
    var $header = $('header');
    if ($header.length > 0) {
        var headerTopPos = 50; //$header.offset().top;

        $(window).scroll(function() {
            if ($(window).scrollTop() > headerTopPos) {
                $header.addClass('fixed-now');

            } else {
                $header.removeClass('fixed-now');

            };
        });
    };

    $('.determine-y').click(function() {
        $(".open").addClass("closed");
        $(".popup-form").removeClass("open");
        $("html").removeClass("noscroll");
        $('.toparea').removeClass('hide');
        $.cookie("confirmed1", "yes", {
            expires: 1,
            path: '/'
        });
        $.cookie("confirmed2", "yes", {
            expires: 1,
            path: '/'
        });
        $.cookie("confirm1", "yes", {
            expires: 1,
            path: '/'
        });
        setTimeout(function() {
            $('.popup-form').removeClass("open");
        }, 300);
        setTimeout(function() {
            $('.popup-form').removeClass("closed");
        }, 1000);
        return false
    });


    $('.determine-y').click(function() {
        $.cookie("confirm1", "yes", {
            expires: 1,
            path: '/'
        });
        var url = window.location.href;
        var url = url.split('?')[0];
        //window.location.href = url; //location.reload();
    });

    $('.determine-n').click(function() {
        $(".check-region").removeClass("hidden");
        $(".determine-region").addClass("dark");
        return false
    });

    $('.tabcontents > div').hide();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $('.tabcontents').children('.tabcontent').hide();
        $(target).show();
    });

    $('a.scrolledregion[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('.overflowform').animate({
                    scrollTop: target.offset().top - 150
                }, 1000);
                return false;
            }
        }
    });

    $('a.scrolledtolink[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') ||
            location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });
    //$('.tel').mask("+7 999 999-99-99", { placeholder: "+7 (___) ___-__-__" });

    $(".tel").mask("+7(999) 999-9999");

    // Slider на Главной //
    $('#main-carousel .carousel-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
    });

    if ($('div').hasClass('promo-post')) {} else {
        $(".promo-wrap").hide();
    }


    $('.tab').click(function() {
        $('.tab, .products').removeClass('active');
        var dataClass = $(this).data('class');
        $('div.' + dataClass).addClass('active');
        return false;
    });


    $('.openpopupwindow').click(function() {
        $('#openpopupwindowform').addClass('open');
        var $datatitle = $(this).data('window');
        var $dataseries = $(this).data('series');
        $(".text-window").val($datatitle);
        $("#windowmodel").html($dataseries);
        return false;
    });


    // Reviews
    $('#rews-carousel .carousel-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 7000,
    });

    // Reviews
    $('.slider_block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
    });

});

//  END HEADER JS  //


//  FOOTER JS  //
$(document).ready(function() {
    $("#attachfield").change(function() {
        $("#uploadFile").val(this.value);
        $("#uploadFile").addClass("uploaded");
    });

    $('#open-needconsultform, #open-needconsultform1, #open-needconsultform2, #open-needconsultform3, .open-needconsultform ').click(function() {
        $('#needconsultform').addClass('open');
        return false;
    });
    $('#open-needmeteringform, #open-needmeteringform1, #open-needmeteringform2, #open-needmeteringform3').click(function() {
        $('#needmeteringform').addClass('open');
        return false;
    });
    $('#open-meteringform, #open-meteringform1, #open-meteringform2, .open-meteringform, #open-meteringform3').click(function() {
        $('#meteringform').addClass('open');
        return false;
    });

    $('.open-meteringform').click(function() {
        var $btndata = $(this).data('btndata');
        $(".btndata").val($btndata);
        return false;
    });

});
//  END FOOTER JS  //




// Change City //
$(document).ready(function() {
    var url = window.location.href;
    var url = url.split('?')[0];
    //console.log(url);
    $('.cookie-link').click(function() {
        parentBlock = $(this).parents('.tabcontent').html();
        var region = $(parentBlock + ' .regiontitle').html();
        var locate = $(this).attr('data-locate');
        var locatep = $(this).attr('data-locatep');
        var locates = $(this).attr('data-locate');
        var phone = $(this).attr('data-item1phone');
        var mail = $(this).attr('data-item1mail');
        var lat = $(this).attr('data-item1lat');
        var lng = $(this).attr('data-item1lng');
        var zoom = $(this).attr('data-item1zoom');
        var zoom = $(this).attr('data-item1zoom');
        var mailform = $(this).attr('data-mailform');
        var adress1 = $(this).attr('data-item1adres');
        var adress2 = $(this).attr('data-item2adres');
        var adress3 = $(this).attr('data-item3adres');
        if ($(this).attr('data-item2adres') == undefined) {
            adress2 = '';
        }
        var adress3 = $(this).attr('data-item3adres');
        if ($(this).attr('data-item3adres') == undefined) {
            adress3 = '';
        }
        var locatepath = $(this).attr('data-locatepath');
        $.cookie("phoneGET", "", { expires: 1, path: '/' });
        $.cookie("confirm1", "yes", { expires: 1, path: '/' });
        $.cookie("confirmed1", "yes", { expires: 1, path: '/' });
        $.cookie("confirmed2", "yes", { expires: 1, path: '/' });
        $.cookie("locate", locate, { expires: 1, path: '/' });
        $.cookie("locatep", locatep, { expires: 1, path: '/' });
        $.cookie("locates", locates, { expires: 1, path: '/' });
        $.cookie("region", region, { expires: 1, path: '/' });
        $.cookie("phone1", phone, { expires: 1, path: '/' });
        $.cookie("mail", mail, { expires: 1, path: '/' });
        $.cookie("lat", lat, { expires: 1, path: '/' });
        $.cookie("lng", lng, { expires: 1, path: '/' });
        $.cookie("zoom", zoom, { expires: 1, path: '/' });
        $.cookie("mailform", mailform, { expires: 1, path: '/' });
        $.cookie("adress1", adress1, { expires: 1, path: '/' });
        $.cookie("adress2", adress2, { expires: 1, path: '/' });
        $.cookie("adress3", adress3, { expires: 1, path: '/' });

        window.params = {
            _url: $(this).attr('data-reload'),
        };
        setTimeout(window.location.href = params._url, 1000);
        /*
        $.ajax({
            url: '/wp-content/themes/lebenbau/parts/header-php.php',
            data: {
                confirm1: 'yes',
            },
            success: function(data){
               console.log(params._url);
               setTimeout(window.location.href = params._url, 1000);
            },
            error: function(xhr, ajaxOptions, thrownError) {
                if (xhr.status == 404 || xhr.status == 301) {
                   console.log('error');
                }
            }
        });
        */
        s

        // $.ajax({
        //     cache: false,
        //     url: $(this).attr('data-reload'),
        //     success: function(data) {
        //         setTimeout(window.location.href = $(this).attr('data-reload'), 1000);
        //     },
        //     error: function(xhr, ajaxOptions, thrownError) {
        //         if (xhr.status == 404 || xhr.status == 301) {
        //             setTimeout(location.href = location.href.split('#')[0], 1000);
        //             console.log('');
        //         }
        //     }
        // });
        /*
        if ($('#pagecityVar').hasClass('true') || $('#pagecityVar').hasClass('reload')) {
            var urls = window.location.href.split('/');
            var go = '';
            if (urls.length > 5) go = '/' + urls[urls.length - 2];
            var adrUrl = $(this).attr('href');
            window.location.href = adrUrl + go;
            return true;
        }
        if ($('#pagecityVar').hasClass('gohome')) {
            window.location.href = 'https://lebenbau.ru/';
            return true;
        }
        */
        /*
        if ( $('#pagecityVar').hasClass('reload') ) {
        //window.location.href = url;
        var urls = window.location.href.split('/');
        var adrUrl = $(this).attr('href');
        window.location.href = adrUrl+'/'+urls[urls.length-2];
        return true;
        }
        */

    });
});

// $('.close-link.cookie-link').each(function() {
//     $(this).attr('data-hreflink', $(this).attr('href'));
//     $(this).attr('href', '#');
// });


var list_citys = '';
$('.popupform.checklocate .tabcontents ul li').each(function() {
    list_citys += $(this).html();
})
$('.popupform.checklocate .tabs').html(list_citys);
$('.popupform .tabs a').css({ 'margin-right': '30px', 'line-height': '31px' });
$('.popupform .tabs').css({ 'margin-top': '20px', 'border-top': '1px solid #ddd', 'padding-top': '30px', 'border-bottom': '0px' });
$('.popupform.checklocate .tabs a.close-link').click(function() {
    $('.popupform.checklocate .tabcontents ul li a[data-locate="' + $(this).attr('data-locate') + '"]').click();
});
// End Change City //

// UTM in CRM
function init() {
    var date = new Date(new Date().getTime() + 6000 * 1000);

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    };
    var utm_medium = getUrlVars()["utm_medium"];
    var utm_campaign = getUrlVars()["utm_campaign"];
    var utm_term = getUrlVars()["utm_term"];
    var utm_content = getUrlVars()["utm_content"];
    var utm_source = getUrlVars()["utm_source"];
    if (utm_medium != undefined) { document.cookie = "utm_medium=" + utm_medium + "; path=/; expires=" + date.toUTCString(); }
    if (utm_campaign != undefined) { document.cookie = "utm_campaign=" + utm_campaign + "; path=/; expires=" + date.toUTCString(); }
    if (utm_term != undefined) { document.cookie = "utm_term=" + utm_term + "; path=/; expires=" + date.toUTCString(); }
    if (utm_content != undefined) { document.cookie = "utm_content=" + utm_content + "; path=/; expires=" + date.toUTCString(); }
    if (utm_source != undefined) { document.cookie = "utm_source=" + utm_source + "; path=/; expires=" + date.toUTCString(); }
};
window.onload = init;

// Send in CRM, AFter form success go, 

// Send in CRM

// var busy = false;
// $(function() {
//     $('form').submit(function() {
//         if (busy) return false;
//         busy = true;
//         var $form = $(this);
//         $.ajax({
//             type: "POST",
//             url: 'https://lebenbau.ru/crm_ramex/gog.php',
//             data: $form.serialize()
//         }).done(function() {
//             console.log('success');
//         }).fail(function() {
//             console.log('fail');
//         });
//     });
// });


// AFter form success go to thanks page
document.addEventListener('wpcf7mailsent', function(event) {
    location = 'https://lebenbau.ru/thanks_page/';
}, false);

// insert SMS text, insert EmailJS
$(document).ready(function() {
    var smstext = $('.smsval').data('val');
    $('.smstext').val(smstext);
    $('.email-js').val('belgorod@lebenbau.ru');
});

// insert region to FORM FiELD - siteregion 
$(document).ready(function() {
    var siteregion = $('#siteregion').find('option').html();
    $('.regionfield').val(siteregion);

    var pageurl = window.location.href;
    $('.urlfield').val(pageurl);
});


// Page Balcons 
$(function($) {
    var max_col_height = 0; // максимальная высота, первоначально 0
    $('.oc-ostvars-desc').each(function() { // цикл "для каждой из колонок"
        if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
            max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
        }
    });
    $('.oc-ostvars-desc').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
});
$('.vars-link').click(function() {
    $('#vars-linkform').addClass('open');
    var $datatitle = $(this).data('title');
    var $dataseries = $(this).data('header');
    var $headerh1 = $('#headerh1').data('title');
    $(".text-window").val($datatitle);
    $(".text-header").val($headerh1);
    $(".slideitemhead").html($datatitle);
    return false;
});


// Page FAQ
$('.panel-heading').click(function() {
    $('.collapse').removeClass("in");
    var par = $(this).parents('.panel');
    par.find('.collapse').show("slow");
    par.find('.collapse').addClass("in");
    $('.collapse:not(.in)').hide("slow");
    return false
});


// Proizvodstvo
$(document).ready(function() {
    jQuery('.nav-tab a').click(function() {
        var tab = $(this).attr('data-tab');
        console.log(tab);
        $('.nav-tab, .tab-pane').removeClass('active');
        $(this).parents('li').addClass('active');
        $(tab).addClass('active');
        return false
    });
});


// Load Comagic
/*! loadJS: load a JS file asynchronously. [c]2014 @scottjehl, Filament Group, Inc. (Based on http://goo.gl/REQGQ by Paul Irish). Licensed MIT */
/*
(function( w ){
  var loadJS = function( src, cb, ordered ){
    "use strict";
    var tmp;
    var ref = w.document.getElementsByTagName( "script" )[ 0 ];
    var script = w.document.createElement( "script" );

    if (typeof(cb) === 'boolean') {
      tmp = ordered;
      ordered = cb;
      cb = tmp;
    }

    script.src = src;
    script.async = !ordered;
    ref.parentNode.insertBefore( script, ref );

    if (cb && typeof(cb) === "function") {
      script.onload = cb;
    }
    return script;
  };
  // commonjs
  if( typeof module !== "undefined" ){
    module.exports = loadJS;
  }
  else {
    w.loadJS = loadJS;
  }
}( typeof global !== "undefined" ? global : this ));
setTimeout(function () {
    loadJS( "//app.comagic.ru/static/cs.min.js" );
}, 4000);
 */


/*
(function( w ){
  var loadJS = function( src, cb, ordered ){
    "use strict";
    var tmp;
    var ref = w.document.getElementsByTagName( "script" )[ 0 ];
    var script = w.document.createElement( "script" );

    if (typeof(cb) === 'boolean') {
      tmp = ordered;
      ordered = cb;
      cb = tmp;
    }

    script.src = src;
    script.async = !ordered;
    ref.parentNode.insertBefore( script, ref );

    if (cb && typeof(cb) === "function") {
      script.onload = cb;
    }
    return script;
  };
  // commonjs
  if( typeof module !== "undefined" ){
    module.exports = loadJS;
  }
  else {
    w.loadJS = loadJS;
  }
}( typeof global !== "undefined" ? global : this ));
setTimeout(function () {

    loadJS( "//code.jivosite.com/script/widget/mwOwPjzUrC " );
}, 4000);
*/





















function removeHtmlStorage(name) {
    localStorage.removeItem(name);
    localStorage.removeItem(name + '_time');
}

function setHtmlStorage(name, value, expires) {
    if (expires == undefined || expires == 'null') { var expires = 3600; }
    var date = new Date();
    var schedule = Math.round((date.setSeconds(date.getSeconds() + expires)) / 1000);
    localStorage.setItem(name, value);
    localStorage.setItem(name + '_time', schedule);
}

function statusHtmlStorage(name) {
    var date = new Date();
    var current = Math.round(+date / 1000);
    var stored_time = localStorage.getItem(name + '_time');
    if (stored_time == undefined || stored_time == 'null') { var stored_time = 0; }
    if (stored_time < current) {
        removeHtmlStorage(name);
        return 0;
    } else {
        return 1;
    }
}


if ($('.citi-fake').text().includes('Воронеж')) {
    console.log('Воронеж');
    var cache_status = statusHtmlStorage('phone_utm');
    console.log(cache_status);
    if (cache_status == 1) {
        var data = localStorage.getItem('phone_utm');
        console.log(data);
        var data_clean = 'tel:' + data.replace(/ /g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/-/g, '');
        console.log(data);
        $('.phone-conainer a').text(data);
        $('.address-row span[itemprop="telephone"]').text(data);
        $('.phone-conainer a').attr('href', data_clean);
        $('.address-row span[itemprop="telephone"]').parent().attr('href', data_clean);
    } else {
        //var data = '+7 (473) 200-61-94';
        var data = '+7 (473) 205-20-41';
        if (location.href.includes('utm_source=yandex.direct')) {
            var data_clean = 'tel:' + data.replace(/ /g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/-/g, '');
            $('.phone-conainer a').text(data);
            $('.address-row span[itemprop="telephone"]').text(data);
            $('.phone-conainer a').attr('href', data_clean);
            $('.address-row span[itemprop="telephone"]').parent().attr('href', data_clean);
            setHtmlStorage('phone_utm', data, 864000);
            console.log('set');
        }
    }
} else {
    console.log('не');
}