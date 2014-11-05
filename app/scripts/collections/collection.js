(function () {

App.Collections.Movies = Backbone.Collection.extend({
  model: App.Models.Movie,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bbfilm'
});


})();
