(function () {

  App.Views.ListMovie = Backbone.View.extend({

    tagName: 'ul',
    className: 'filmList',

    events: {},

    template: _.template($('#film_list').html()),

    initialize: function () {
      this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get el on page
      $('#movieList').html(this.$el);

    },

    render: function () {
      var self = this;

      this.$el.empty();

      this.collection.each(function (m) {
        self.$el.append(self.template(m.toJSON()));
      });

      return this;
    }

  });

}());
