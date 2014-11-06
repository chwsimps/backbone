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
        director: $('#movie_director').val(),
        trailer: $('#movie_trailer').val()
      });

      App.movies.add(m).save();

      $('#addMovie')[0].reset();

    }

  });

}());
