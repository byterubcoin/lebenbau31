$(document).ready(function() {
    $(document).on("click", ".catalogue-itemPriceWrap", function() {
        var dataSust = $(this).find('.CPTLinf_PriceDesc').data('sust');
        var dataSamoust = $(this).find('.CPTLinf_PriceDesc').data('samoust');
        if ($(this).find('.CPTLinf_PriceDesc').hasClass("dataSamoust")) {
            $(this).find('.CPTLinf_PriceDesc').removeClass("dataSamoust");
            $(this).find('.catalogue-itemPriceDig').html(dataSust);
            $(this).find('.CPTLinf_PriceDesc').html("С установкой «под ключ»");
            $(this).find('.CPTLinf_samoust').removeClass("active");
            $(this).find('.CPTLinf_ust').addClass("active");
        }else{
            $(this).find('.CPTLinf_PriceDesc').addClass("dataSamoust");
            $(this).find('.catalogue-itemPriceDig').html(dataSamoust);
            $(this).find('.CPTLinf_PriceDesc').html("Под самоустановку");
            $(this).find('.CPTLinf_ust').removeClass("active");
            $(this).find('.CPTLinf_samoust').addClass("active");
        }
    });
});