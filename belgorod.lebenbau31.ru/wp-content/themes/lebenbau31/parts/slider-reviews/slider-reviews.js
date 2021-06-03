jQuery('#addreviewbutton').click(function() {
	$('#openpopupwindowform').addClass('open');
	return false;
});

$('.CardProduct_ReviewsSlider').slick({
	infinite: true,
	autoplay: true,
	autoplaySpeed: 4000,
	slidesToShow: 1,
	slidesToScroll: 1
});