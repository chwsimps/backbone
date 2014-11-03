var Movie = Backbone.Model.extend({

  defaults: {
    title: '',
    director: '',
    good: true
  },

  idAttribute: '_id',

  initialize: function () {}

});
