(function () {

  App.Views.EditMovie = Backbone.View.extend({

    tagName: 'ul',
    className: 'movieEdit',

    events: {
      'submit #editMovie' : 'editMovie',
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
        director: $('#update_director').val(),
        trailer: $('#update_trailer').val(),
        comments: $('#update_comments').val()
      });

      this.options.movie.save();

      // Go back to home page
      App.router.navigate('', {trigger: true});

    },

    deleteFilm: function (e) {
      e.preventDefault();

      this.options.movie.destroy();

      // Back to home page
      App.router.navigate('', {trigger: true});

    }

  });

}());
