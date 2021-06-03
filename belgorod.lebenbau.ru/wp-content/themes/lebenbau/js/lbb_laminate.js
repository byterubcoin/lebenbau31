
$(document).ready(function(){
	var $regionfield = $('#siteregion').text();
	$('.regionfield').val($regionfield);
	jQuery(".windowfield").val('Натуральный дуб');
	$('.urlfield').val(window.location.href);
});



 jQuery('.laminate-filter-colors-item-link').click(function() {
	$('.laminate-filter-colors-item-link').removeClass('active');
	$(this).addClass('active');
	$('.laminate-filter-insert-block-img').removeClass('visible');
	var $dataid = $(this).data('id');
	$("img#"+$dataid).addClass('visible');
	var $datatitl = $(this).data('title');
	jQuery(".windowfield").val($datatitl);
	return false;
});



$(".beautylam-popup").click(function(){
 jQuery("#form-lami").addClass("open");
 var $datatitle = $(this).data('title');
 jQuery(".windowfield").val($datatitle);
 return false;
});


$(".buy-this-div").click(function(){
 jQuery("#form-lami").addClass("open");
 return false;
});


jQuery('.popup-form__btn-close, .popup-formback').click(function() {
 jQuery(".popup-form").removeClass("open");
 return false;
});