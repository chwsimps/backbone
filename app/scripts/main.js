(function () {

  // Create instance of Collection
  App.movies = new App.Collections.Movies();

  // Fetch server-side movies
  App.movies.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });

  $(document).ready(function(){
    $("#rating-sort").click( function() {
      $(this).css("color", "white");
      $(this).css("text-shadow", "0 0 1px HSLA(215, 55%, 54%, 1)");
      $('#genre-sort').css("color", "HSLA(215, 55%, 54%, 1)");
      $('#title-sort').css("color", "HSLA(215, 55%, 54%, 1)");
    });
  });

  $(document).ready(function(){
    $("#genre-sort").click( function() {
      $(this).css("color", "white");
      $(this).css("text-shadow", "0 0 1px HSLA(215, 55%, 54%, 1)");
      $('#rating-sort').css("color", "HSLA(215, 55%, 54%, 1)");
      $('#title-sort').css("color", "HSLA(215, 55%, 54%, 1)");
    });
  });

  $(document).ready(function(){
    $("#title-sort").click( function() {
      $(this).css("color", "white");
      $(this).css("text-shadow", "0 0 1px HSLA(215, 55%, 54%, 1)");
      $('#rating-sort').css("color", "HSLA(215, 55%, 54%, 1)");
      $('#genre-sort').css("color", "HSLA(215, 55%, 54%, 1)");
    });
  });

}());
