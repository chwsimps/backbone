var fav_movie = new Movies();

fav_movie.fetch().done(function () {
  var movieview = new MovieView({
    collection: fav_movie
  });
});

// $('#form').on('submit', function (event) {
//   event.preventDefault();
//
//   var movie_title = $('#name').val();
//
//   var film = new Movie({
//     name: movie_title
//   });
//
//   fav_movie.add(film);
//
//   film.save();
//
//   $(this)[0].reset();
//
// });
