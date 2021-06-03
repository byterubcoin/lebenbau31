$('.slider-linkp').click(function(){	
    $('#openpopupsliderform').addClass('open');
   var $datatitle = $(this).data('title');
   var $headerh1 = $('#headerh1').data('title');
   jQuery("#slideitemhead").html($datatitle);
   jQuery(".text-window").val($datatitle);
   jQuery(".text-header").val($headerh1);
   return false; 
});


$('.CardProduct_PricesWindowOpen').click(function(){	
    $('#form-wnd').addClass('open');
   var $datatitle = $(this).data('title');
   $("#windowmodel").html($datatitle);
   return false; 
});	


$(document).ready(function() {

	
		function calcwindow() {
			var calcwindowHeight = $('.calc-profile').outerHeight(),
				calcwindowBotprice = $('.calcwindow-botprice').outerHeight(),
				calcwindowResultHeight = calcwindowHeight + calcwindowBotprice;
			$('.calcwindow').css( "height", calcwindowResultHeight + 'px' );
		};
		$('.calcwindow').imagesLoaded( function() {
			calcwindow();
		});
	

	$(window).resize(function() {
	    calcwindow();
	});

	function calcEls() {

		//if ($('.useful-features').hasClass('visible')) {

			$('.useful-features-item').on( "mouseover", function() {
				var calcEl = $(this).data('calc');
				$('.calcwindow img').removeClass('hover');
				$('.calcwindow').find('.'+calcEl).addClass('hover');
			});


			$('.ufi-action-value').on( "click", function() {

				if ($(this).hasClass('canadded') ) {
					var calcEl = $(this).parents('.useful-features-item').attr('data-calc');
					$('.calcwindow').find('.'+calcEl).addClass('added');
					$(this).parents('.useful-features-item').addClass('added');
					$(this).addClass('delete');
					$(this).removeClass('added');
					$(this).removeClass('canadded');
					$(this).html('<img src="/wp-content/uploads/remove.png" alt="">Убрать');

					var addprice = $(this).attr('data-addprice'),
						curprice = $('#CPTLinf_PriceDesc').attr('data-sust'),
						curpricecl = curprice.replace(/\s+/g, ''),
						newcurprice = parseInt(addprice) + parseInt(curpricecl);

					var	cursamoustprice = $('#CPTLinf_PriceDesc').attr('data-samoust'),
						cursamoustpricecl = cursamoustprice.replace(/\s+/g, ''),
						newsamoustprice = parseInt(addprice) + parseInt(cursamoustpricecl);

					$('#CPTLinf_PriceDesc').attr('data-sust', newcurprice);
					$('#CPTLinf_PriceDesc').attr('data-samoust', newsamoustprice);


			       if ( $('#CPTLinf_PriceDesc').hasClass('dataSamoust') ) {
						var cval = $('#CPTLinf_PriceDesc').attr('data-samoust');
						$('#catalogue-itemPriceDig').html(cval.toLocaleString('ru-RU'));
					}else{
						var cval = $('#CPTLinf_PriceDesc').attr('data-sust');
						$('#catalogue-itemPriceDig').html(cval.toLocaleString('ru-RU'));
					}

					if( $(this).parents('.useful-features-item').attr('data-calc') ===  'calc-furn-pk' ) {
						$('.calc-furn-hoppe').removeClass('added');
						$('.calc-furn-maco').addClass('added');
					}

					if( $(this).parents('.useful-features-item').attr('data-calc') ===  'spaket-2k' ) {
						$('.calc-profile-basic1').removeClass('added');
						$('.calc-profile-basic2').addClass('added');
					} 
					if( $(this).parents('.useful-features-item').attr('data-calc') ===  'calc-rato' ) {
						$('.calc-hoppe').removeClass('added');
					}  
					if( $(this).parents('.useful-features-item').attr('data-calc') ===  'calc-antizhara-ultra' ) {
						$('.calc-antizhara').removeClass('added');
					}  

				} else {
					if ($(this).hasClass('delete') ) {
						var calcEl = $(this).parents('.useful-features-item').attr('data-calc');
						$('.calcwindow').find('.'+calcEl).removeClass('added');
						$(this).parents('.useful-features-item').removeClass('added');
						$(this).addClass('canadded');
						$(this).removeClass('delete');
						$(this).html('<img src="/wp-content/uploads/add.png" alt="">Добавить');

						var addprice = $(this).attr('data-addprice'),
						curprice = $('#CPTLinf_PriceDesc').attr('data-sust'),
						curpricecl = curprice.replace(/\s+/g, ''),
						newcurprice = parseInt(curpricecl) - parseInt(addprice);

						var	cursamoustprice = $('#CPTLinf_PriceDesc').attr('data-samoust'),
							cursamoustpricecl = cursamoustprice.replace(/\s+/g, ''),
							newsamoustprice = parseInt(cursamoustpricecl) - parseInt(addprice);

						$('#CPTLinf_PriceDesc').attr('data-sust', newcurprice);
						$('#CPTLinf_PriceDesc').attr('data-samoust', newsamoustprice);
						
						if ( $('#CPTLinf_PriceDesc').hasClass('dataSamoust') ) {
							var cval = $('#CPTLinf_PriceDesc').attr('data-samoust');
							$('#catalogue-itemPriceDig').html(cval.toLocaleString('ru-RU'));
						}else{
							var cval = $('#CPTLinf_PriceDesc').attr('data-sust');
							$('#catalogue-itemPriceDig').html(cval.toLocaleString('ru-RU'));
						}

						if( $(this).parents('.useful-features-item').attr('data-calc') ===  'calc-furn-pk' ) {
							$('.calc-furn-maco').removeClass('added');
							$('.calc-furn-hoppe').addClass('added');
						}

						if( $(this).parents('.useful-features-item').attr('data-calc') ===  'spaket-2k' ) {
							$('.calc-profile-basic2').removeClass('added');
							$('.calc-profile-basic1').addClass('added');
						} 
						if( $(this).parents('.useful-features-item').attr('data-calc') ===  'calc-rato' ) {
							$('.calc-hoppe').addClass('added');
						}
						if( $(this).parents('.useful-features-item').attr('data-calc') ===  'calc-antizhara-ultra' ) {
							$('.calc-antizhara').addClass('added');
						}  


					}
				}
			});
		//}
};

calcEls()

$( ".calcwindow-botprice" ).bind( "click", function() {
  var dataSust = $(this).find('#CPTLinf_PriceDesc').attr('data-sust');
  var dataSamoust = $(this).find('#CPTLinf_PriceDesc').attr('data-samoust');
  if ($(this).find('#CPTLinf_PriceDesc').hasClass("dataSamoust")) {
      $(this).find('#CPTLinf_PriceDesc').removeClass("dataSamoust");
      $(this).find('#catalogue-itemPriceDig').html(dataSust.toLocaleString('ru'));
      $(this).find('#CPTLinf_PriceDesc').html("С установкой «под ключ»");
      $(this).find('.CPTLinf_samoust').removeClass("active");
		  $(this).find('.CPTLinf_ust').addClass("active");
  }else{
      $(this).find('#CPTLinf_PriceDesc').addClass("dataSamoust");
      $(this).find('#catalogue-itemPriceDig').html(dataSamoust.toLocaleString('ru'));
      $(this).find('#CPTLinf_PriceDesc').html("Под самоустановку");
      $(this).find('.CPTLinf_ust').removeClass("active");
		  $(this).find('.CPTLinf_samoust').addClass("active");
  }
});



	var controller = new ScrollMagic.Controller();

	//1
	var cpp = $('.CardProductProplex_Top').outerHeight() + $('.window-is').outerHeight();

	new ScrollMagic.Scene({triggerElement: "#trigger0", duration: cpp })
	.addTo(controller)
	//.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.profile-and-paket, .calcwindow-botprice').addClass('visible');
		} else {
			$('.calcwindow-block').removeClass('visible');
		}
	});

	//2
	var pp = $('.proplex-profile').outerHeight();
	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: pp + 40 })
	.addTo(controller)
	//.addIndicators()
	.on("enter leave", function (e) {
		$('.calcwindow-block').removeClass('visible');
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.profile-only, .calcwindow-botprice').addClass('visible');
		} else {
			$('.calcwindow-block').removeClass('visible');
		}
	});

	//3
	var pg = $('.proplex-glazing').outerHeight();
	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: pg })
	.addTo(controller)
	//.addIndicators()
	.on("enter leave", function (e) {
		$('.calcwindow-block').removeClass('visible');

		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.paket-only, .calcwindow-steklopaket, .calcwindow-botprice').addClass('visible');

			$('.useful-features-item').each(function() {
			 if ($(this).hasClass('added') ) {
			 	var calcEl = $(this).data('calc');
			 	$('.calcwindow-steklopaket').find('.'+calcEl).addClass('added');
			 }
			});
			$('.calcwindow-botprice').addClass('movetop');
			//calcEls()
		} else {
			$('.calcwindow-block').removeClass('visible');
			$('.calcwindow-botprice').removeClass('movetop');
		}
	});

	//4
	var pa = $('.proplex-fittings-advances').outerHeight();
	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: pa + 80 })
	.addTo(controller)
	//.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.calcwindow-furnitura, .calcwindow-botprice').addClass('visible');
		} else {
			$('.calcwindow-block').removeClass('visible');
		}
	});

	//5
	if ($('div').hasClass('proplex-fittings-options') ) {
		var po = $('.proplex-fittings-options').outerHeight();
		new ScrollMagic.Scene({triggerElement: "#trigger4", duration: po + 80 })
		.addTo(controller)
		//.addIndicators()
		.on("enter leave", function (e) {
			var stat = (e.type == "enter" ? "inside" : "outside");
			if (stat === 'inside' ) {
				$('.profile-and-paket, .calcwindow-furnitura-options, .calcwindow-botprice').addClass('visible');
				$('.useful-features-item').each(function() {
				 if ($(this).hasClass('added') ) {
				 	var calcEl = $(this).data('calc');
				 	$('.calcwindow-furnitura-options').find('.'+calcEl).addClass('added');
				 }
				});
			} else {
				$('.calcwindow-block').removeClass('visible');
			}
		});
	}

	//6
	var po = $('.their-measure-cotent').outerHeight() - $('.calcwindow').outerHeight()/2 ;
	new ScrollMagic.Scene({triggerElement: "#trigger5", duration: po })
	.addTo(controller)
	//.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.profile-and-paket, .calcwindow-botprice').addClass('visible');
		} else {
			$('.calcwindow-block, .calcwindow-botprice').removeClass('visible');
		}
	});

	//7
	$('.calcwindow-botprice').addClass('visible');
	var pm = $('body').outerHeight();
	new ScrollMagic.Scene({triggerElement: "#trigger6", duration: pm })
	.addTo(controller)
	//.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.calcwindow-block, .calcwindow-botprice').removeClass('visible');
		} else {
			$('.calcwindow-botprice').addClass('visible');
		}
	});

/*
	//1
	var dr = $('.useful-features').outerHeight();
	new ScrollMagic.Scene({triggerElement: "#trigger1", duration: dr })
	.addTo(controller)
	////.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.useful-features').addClass('visible');
			$('.useful-features-item').each(function() {
			 if ($(this).hasClass('added') ) {
			 	var calcEl = $(this).data('calc');
			 	$('.calcwindow').find('.'+calcEl).addClass('added');
			 }
			});
			calcEls()
		} else {
			$('.calcwindow').find('img').removeClass('added');
			$('.useful-features').removeClass('visible');
			calcEls()
		}
	});

	//2
	var pp = $('.proplex-profile').outerHeight();
	new ScrollMagic.Scene({triggerElement: "#trigger2", duration: pp })
	.addTo(controller)
	////.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.calc-podsvetka').addClass('added');
		} else {
			$('.calc-podsvetka').removeClass('added');
		}
	});

	//3
	var pg = $('.proplex-glazing').outerHeight() - 200;
	new ScrollMagic.Scene({triggerElement: "#trigger3", duration: pg })
	.addTo(controller)
	////.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.calc-podsvetkastekla').addClass('added');
		} else {
			$('.calc-podsvetkastekla').removeClass('added');
		}
	})

	//4
	var bd = $('body').outerHeight();
	new ScrollMagic.Scene({triggerElement: "#trigger4", duration: bd })
	.addTo(controller)
	////.addIndicators()
	.on("enter leave", function (e) {
		var stat = (e.type == "enter" ? "inside" : "outside");
		if (stat === 'inside' ) {
			$('.calcwindow').addClass('hidden');
		} else {
			$('.calcwindow').removeClass('hidden');
		}
	})
*/


	$('img').error(function(){
	    var src = this.src;
	    this.src = src.substr(0, src.indexOf('?')) + '?t=' + new Date().getTime()
	});
				
});