(function () {

App.Models.Movie = Backbone.Model.extend({

  defaults: {
    title: '',
    director: '',
    trailer: ''
  },

  idAttribute: '_id',

  initialize: function () {}

});


})();
