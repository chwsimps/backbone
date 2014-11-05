(function () {

App.Models.Movie = Backbone.Model.extend({

  defaults: {
    title: '',
    director: '',
    trailer: '',
    good: ''
  },

  idAttribute: '_id',

  initialize: function () {}

});


})();
