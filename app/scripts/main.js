(function () {

App.fav_movie = new App.Collections.Movies();

App.fav_movie.fetch().done(function () {
  App.movieview = new App.Views.MovieView({
    collection: App.fav_movie
  });
});

new App.Views.MovieAdd();

// $('#good').on('click', function (){
//   $('#moviecntr').html($('#good:checked')).val();
//
// });

})();
