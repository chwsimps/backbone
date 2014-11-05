(function () {

App.Views.MovieAdd = Backbone.View.extend ({

  el: '#movieform',

  events: {
    'submit #movie-click' : 'addMovie'
  },

  initialize: function () {
    this.render();
  },

  render: function () {
    var form_html = $('#film_form').html();
    this.$el.html(form_html);
  },

  addMovie: function(e) {
    e.preventDefault();

    var movie_title = $('#title').val();
    var movie_dir = $('#director').val();
    var movie_trailer = $('#trailer').val();
    var movie_good = $('#good').val();

    var movie = new App.Models.Movie ({
      title: movie_title,
      director: movie_dir,
      trailer: movie_trailer,
      good: movie_good
    });

    App.fav_movie.add(movie).save();

    $('#movie-click')[0].reset();

  }


});

})();
