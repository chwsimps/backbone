var Movie = Backbone.Model.extend({

  defaults: {
    title: '',
    director: '',
    good: '',
    bad: ''
  },

  idAttribute: '_id',

  initialize: function () {}

});
