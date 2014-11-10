(function () {

  App.Routers.AppRouter = Parse.Router.extend({

    initialize: function () {
      // Light the Fire
      Parse.history.start();
    },

    routes: {
      '' : 'home',
      'edit/:id' : 'editFilm',
      'add' : 'addMovie',
      'sort/:sortItem' : 'home'
    },

    home: function (sortItem) {
      new App.Views.ListMovie({
        collection: App.movies,
        sort: sortItem
      });

    },

    editFilm: function (id) {

      var m = App.movies.get(id);

      new App.Views.EditMovie({ movie: m });
    },

    addMovie: function () {

      new App.Views.AddMovie();
    }

  });

}());
