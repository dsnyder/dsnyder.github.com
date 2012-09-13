(function() {

  $(document).ready(function() {
    $('#github').mouseover(function() {
      return $('.icon-text').text("GitHub");
    });
    $('#github').mouseout(function() {
      return $('.icon-text').html("&nbsp;");
    });
    $('#twitter').mouseover(function() {
      return $('.icon-text').text("Twitter");
    });
    $('#twitter').mouseout(function() {
      return $('.icon-text').html("&nbsp;");
    });
    $('#rss').mouseover(function() {
      return $('.icon-text').text("RSS");
    });
    $('#rss').mouseout(function() {
      return $('.icon-text').html("&nbsp;");
    });
    $('#linkedin').mouseover(function() {
      return $('.icon-text').text("LinkedIn");
    });
    $('#linkedin').mouseout(function() {
      return $('.icon-text').html("&nbsp;");
    });

    $('#about').mouseover(function() {
      return $('.section-text').text("Dee Snider?");
    });

    $('#about').mouseout(function() {
      return $('.section-text').html("&nbsp;");
    });

    $('#projects').mouseover(function() {
      return $('.section-text').text("check em'");
    });

    $('#projects').mouseout(function() {
      return $('.section-text').html("&nbsp;");
    });
  });
}).call(this);
