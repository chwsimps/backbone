(function () {

App.Views.MovieAdd = Backbone.View.extend ({

  // el: '#movieform',

  events: {
    'submit #movie-click' : 'addMovie'
  },

  initialize: function () {
    this.render();
    $('#movieform').html(this.$el);
  },

  render: function () {
    this.$el.html($('#filmForm').html());
  },

  addMovie: function(e) {
    e.preventDefault();

    var movie_title = $('#title').val();
    var movie_dir = $('#director').val();
    var movie_trailer = $('#trailer').val();

    // var movie = new App.Models.Movie ({
    //   title: movie_title,
    //   director: movie_dir,
    //   trailer: movie_trailer,
    // });

    App.fav_movie.add(movie).save();

    // $('#movie-click')[0].reset();

  }


});

}());
