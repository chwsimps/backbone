(function () {

  App.Models.Movie = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      title: '',
      director: '',
      trailer: '',
      comments: '',
      rating: ''
    },

    initialize: function () {}

  });

}());
