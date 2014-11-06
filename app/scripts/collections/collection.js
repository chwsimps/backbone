(function () {

  App.Collections.Movies = Backbone.Collection.extend({
    model: App.Models.Movie,
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/bbfilm2'
  });

}());
