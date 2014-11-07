(function () {

  App.Views.ListMovie = Backbone.View.extend({

    tagName: 'ul',
    className: 'filmList',

    events: {},

    template: _.template($('#film_list').html()),

    initialize: function (options) {
      this.options = options;

      this.render();

      this.collection.off();
      this.collection.on('sync', this.render, this);

      // Get el on page
      $('#movieList').html(this.$el);

    },

    render: function () {
      var self = this;

      this.$el.empty();

      if(this.options.sort != undefined) {
        var local_collection = this.collection.sortBy( function (model) {
          return model.get(self.options.sort);
        })
      _.each(local_collection, function (m) {
        self.$el.append(self.template(m.toJSON()));
        });
      } else {
        this.collection.sort();
        this.collection.each( function (m) {
          self.$el.append(self.template(m.toJSON()));
        });
      }

      // this.collection.each(function (m) {
      //   self.$el.append(self.template(m.toJSON()));
      // });

      return this;
    }

  });

}());
