//= require "jquery"

(function($) {
  $(document).ready(function() {
    $(document).scroll(function(){
      var distance = 600;
      var currentPos = $(document).scrollTop();
      var iconInfoPos = $("#icon-info").offset().top - distance;
      var eventInfoPos = $("#events").offset().top - distance;
      
      // if (currentPos >= eventInfoPos) {
      //   $("#events .action").removeClass("hidden").addClass("fadeInNoBounce");
      // }
      
      if (currentPos >= iconInfoPos) {
        $("#icon-info .action").addClass("hatch"); 
      }
    });  
  });
})(jQuery);
