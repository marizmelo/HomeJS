$(function(){
    
    /* PROFILE BUTTON */
    var selected = 0;
    $( "#user" ).delay(500).fadeIn("slow").draggable({ revert: true });
    $( "#user" ).on("click", function(){
      if (!selected) {
        selected = 1;
          $(".menu").fadeIn("fast");
          $("#messages").animate({"marginLeft" : "-65px"}, 100);
            $("#last").animate({ "marginLeft" : "80px"}, 100);
              $("#apps").animate({ "marginTop" : "-70px"}, 100);
        
      } else {
        selected = 0;
          $(".menu").fadeOut("fast");
          $("#last").animate({ "marginLeft" : "0"}, 100);
            $("#apps").animate({ "marginTop" : "0"}, 100);
              $("#messages").animate({"marginLeft" : "0"}, 100);
      }
    });
    
    /* CLOCK */
    var startTime = function ()
    {
      var today=new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      h = checkTime(h);
      m = checkTime(m);
      $('#time h1 thin').text(h + ":" + m);
      t = setTimeout(function(){startTime();},500);
    };

    checkTime = function (i)
    {
      if (i < 10)
        i = "0" + i;
      return i;
    };
  
    startTime();

    /* SLIDESHOW */
    $(".version").text($.swipeshow.version);
    $(".slideshow").swipeshow({ autostart: false, mouse: true, interval: 6000 });
});