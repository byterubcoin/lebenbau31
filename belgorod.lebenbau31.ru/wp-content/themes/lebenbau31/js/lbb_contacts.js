

$(document).ready(function() {
  $(".contacts-scroll").mCustomScrollbar({});


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


  $('.phone.hidd').click(function(){
     $(this).removeClass('hidd');
     yaCounter25154291.reachGoal('openphone');
     return false;
  });

});