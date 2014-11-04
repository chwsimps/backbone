var fav_movie = new Movies();

$('#movie-click').on('submit', function (event) {
  event.preventDefault();
  var film = new Movie({
    title: $('#title').val(),
    director: $('#director').val(),
    good: $('#good').val(),
    bad: $('#bad').val()
  });
  console.log(film);
  fav_movie.add(film);
  film.save();
  $(this)[0].reset();
});

fav_movie.fetch().done(function () {
  var movieview = new MovieView({
    collection: fav_movie
  });
});
