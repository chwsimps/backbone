var MovieView = Backbone.View.extend({
  tagName: 'ul',
  className: 'film',

initialize: function (options) {
  this.render(options.collection);
  },

render: function (collection){
  var self = this;

  var template = $('#film').html();
  var rendered = _.template(template);

  _.each(collection.models, function (m) {
    self.$el.append(rendered(m.attributes));
  });

  $('#moviecntr').html(this.el);

  return this;

  }

});
