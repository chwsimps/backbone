(function () {

  App.Views.AddMovie = Parse.View.extend({

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
        rating: $('input[name="rating"]:checked').val(),
        comments: $('#movie_comments').val()
      });

      m.save(null, {
        success: function () {
          App.movies.add(m);
          App.router.navigate('', { trigger: true });
        }
      });


      $('#addMovie')[0].reset();

    }

  });

}());
