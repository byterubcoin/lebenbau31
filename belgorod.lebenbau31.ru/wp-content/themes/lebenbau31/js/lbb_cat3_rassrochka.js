$(document).ready(function() {
    //$(".contacts-scroll").mCustomScrollbar({});
    $('.contacts-region-title').click(function(){
    $(this).parents('.contacts-region').toggleClass('visible');
    return false;
    });
    $('.marker-center').click(function(){
    $('.contacts--map').addClass('visible');
    return false;
    });
    $('.closemap').click(function(){
    $('.contacts--map').removeClass('visible');
    return false;
    });

    var str = $( ".dadays" ).text();
        if ($('.dadays').html() == 'день') {
        $('.ost').html('остался')
    }
    
    $(".rascalc-tabheaderitem").click(function(){
        $(".rascalc-tabheaderitem, .rascalc-tabcontentitem").removeClass("active");
        var actel = $(this).attr('data-class');
        $('#' + actel).addClass('active');
        $(this).addClass('active');
        return false;
    });


    $(".rassrochka_a, .rascalc-cbank_ropen-a, .lscbl-currprice_a, .lascalc-cbank_topbotr-a").click(function(){
     jQuery("#rassrochkaform").addClass("open");
     var $datatitle = $(this).data('title');
     jQuery(".windowfield").val($datatitle);

     if ( $(this).hasClass('rascalc-cbank_ropen-a') ) {
     $('.popupform h3').html('Заказать окна в кредит');
     }
     if ( $(this).hasClass('rascalc-cbank_ropen-a') ) {
     $('.popupform h3').html('Заказать окна в рассрочку от завода');
     }
     if ( $(this).hasClass('rassrochka_a') ) {
     $('.popupform h3').html('Заказать окна в рассрочку от завода');
     }
     if ( $(this).hasClass('lscbl-currprice_a') ) {
     $('.popupform h3').html('Заказать замер');
     }
     return false;
    });
});