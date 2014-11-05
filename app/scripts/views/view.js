(function () {

App.Views.MovieView = Backbone.View.extend({
  tagName: 'ul',
  className: 'film',

  events: {
    'click li button' : 'deleteMovie'
  },

initialize: function () {
  this.render();

  App.fav_movie.on('sync', this.render, this);
  App.fav_movie.on('destroy', this.render, this);

  $('#moviecntr').html(this.el);

  },

render: function (){
  var self = this;

  var template = $('#film').html();
  var rendered = _.template(template);

  this.$el.empty();

  _.each(App.fav_movie.models, function (m) {
    self.$el.append(rendered(m.attributes));
  });

  return this;

  },

  deleteMovie: function (e) {
    e.preventDefault();

    var id = $(e.target).attr('id');

    var gone = App.fav_movie.get(id);

    gone.destroy();

  }

});

}());
