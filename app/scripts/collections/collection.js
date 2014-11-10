(function () {

  App.Collections.Movies = Parse.Collection.extend({
    model: App.Models.Movie,
    comparator: function (model) {
      return -parseInt(model.get('rating'));
    },
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/bbfilm2'
  });

}());
