(function () {

  App.Views.AddMovie = Backbone.View.extend({

    events: {
      'submit #addMovie' : 'addMovie'
    },

    initialize: function () {
      this.render();
      $('#movieForm').html(this.$el);
    },

    render: function () {
      this.$el.html($('#film_form').html());
    },

    addMovie: function (e) {
      e.preventDefault();

      var m = new App.Models.Movie({
        title: $('#movie_title').val(),
        genre: $('#movie_genre').val(),
        trailer: $('#movie_trailer').val(),
        comments: $('#movie_comments').val()
      });

      App.movies.add(m).save();

      $('#addMovie')[0].reset();

    }

  });

}());
