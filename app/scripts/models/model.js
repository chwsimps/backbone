(function () {

  App.Models.Movie = Backbone.Model.extend({

    idAttribute: '_id',

    defaults: {
      title: '',
      genre: '',
      trailer: '',
      comments: '',
      rating: ''
    },

    initialize: function () {}

  });

}());
