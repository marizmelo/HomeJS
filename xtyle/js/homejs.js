$(function(){
    $( "#user" ).draggable({ revert: true });
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


    $(".version").text($.swipeshow.version);
    $(".slideshow").swipeshow({ autostart: false, mouse: true, interval: 6000 });
});