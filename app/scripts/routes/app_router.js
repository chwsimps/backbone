(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'edit/:id' : 'editFilm'
    },

    home: function () {
      new App.Views.AddMovie();
      new App.Views.ListMovie({ collection: App.movies });
    },

    editFilm: function (id) {

      var c = App.movies.get(id);

      new App.Views.EditMovie({ movie: c });
    }

  });

}());
