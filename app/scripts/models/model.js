(function () {

  App.Models.Movie = Parse.Object.extend({

    className: 'Movie',

    idAttribute: 'objectId',

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
