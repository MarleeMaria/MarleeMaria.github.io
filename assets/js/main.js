!(function($) {
  "use strict";





  $(document).ready(function(){

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("mainNav");
    var transitionPoint = document.getElementById("transition");


    var transition = transitionPoint.offsetTop;
    var sticky = navbar.offsetTop;

    // var main = document.getElementById("me");
    // var mainWidth = main.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky + transition) {
        navbar.classList.remove("mobile-visable")
      } else {
        navbar.classList.add("mobile-visable");
      }
    }


  // Cache selectors
  var lastId,
      topMenu = $("#top-menu"),
      topMenuHeight = topMenu.outerHeight()+15,
      // All list items
      menuItems = topMenu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function(){
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
      });



  // Bind to scroll
  $(window).scroll(function(){
     // Get container scroll position
     var fromTop = $(this).scrollTop()+topMenuHeight;

     // Get id of current scroll item
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     // Get the id of the current element
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active")
           .end().filter("[href='#"+id+"']").parent().addClass("active");
     }
  });

  $( '#top-menu' ).on("click", function(){
    $('.navbar-collapse').removeClass("show");
  });

  });


















  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });



})(jQuery);
