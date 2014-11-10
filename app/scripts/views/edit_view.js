(function () {

  App.Views.EditMovie = Parse.View.extend({

    tagName: 'ul',
    className: 'movieEdit',

    events: {
      'click #save' : 'editMovie',
      'click #view_trailer' : 'viewTrailer',
      'click #delete' : 'deleteFilm'
    },

    template: _.template($('#edit_film').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      $('#movieForm').empty();

      // Get el on page
      $('#movieList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.movie.toJSON()));

    },

    editMovie: function (e) {
      e.preventDefault();

      // Updates Model Instance
      this.options.movie.set({
        title: $('#update_title').val(),
        genre: $('#update_genre').val(),
        trailer: $('#update_trailer').val(),
        rating: $('input[name="rating"]:checked').val(),
        comments: $('#update_comments').val()
      });

      this.options.movie.save();

      // Go back to home page
      App.router.navigate('', {trigger: true});

    },

    viewTrailer: function (e) {
      e.preventDefault();

      App.router.navigate(trailer);
    },

    deleteFilm: function (e) {
      e.preventDefault();

      this.options.movie.destroy();

      // Back to home page
      App.router.navigate('', {trigger: true});

    }

  });

}());
