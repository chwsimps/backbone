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

(function () {

  App.Collections.Movies = Backbone.Collection.extend({
    model: App.Models.Movie,
    comparator: function (model) {
      return -parseInt(model.get('rating'));
    },
    url: 'https://tiy-atl-fe-server.herokuapp.com/collections/bbfilm2'
  });

}());

(function () {

  App.Views.AddMovie = Backbone.View.extend({

    events: {
      'submit #addMovie' : 'addMovie'
    },

    initialize: function () {
      this.render();
      $('#movieForm').html(this.$el);
    },

    render: function () {
      this.$el.html($('#film_form').html());
    },

    addMovie: function (e) {
      e.preventDefault();

      var m = new App.Models.Movie({
        title: $('#movie_title').val(),
        genre: $('#movie_genre').val(),
        trailer: $('#movie_trailer').val(),
        rating: $('input[name="rating"]:checked').val(),
        comments: $('#movie_comments').val()
      });

      App.movies.add(m).save(null, {
        success: function () {
          App.router.navigate('', { trigger: true });
        }
      });

      // App.movies.add(m).save();
      //
      $('#addMovie')[0].reset();

    }

  });

}());

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

(function () {

  App.Views.EditMovie = Backbone.View.extend({

    tagName: 'ul',
    className: 'movieEdit',

    events: {
      'click #save' : 'editMovie',
      'click #view_trailer' : 'viewTrailer',
      'click #delete' : 'deleteFilm'
    },

    template: _.template($('#edit_film').html()),

    initialize: function (options) {
      this.options = options;
      this.render();

      $('#movieForm').empty();

      // Get el on page
      $('#movieList').html(this.$el);
    },

    render: function () {

      this.$el.empty();

      this.$el.html(this.template(this.options.movie.toJSON()));

    },

    editMovie: function (e) {
      e.preventDefault();

      // Updates Model Instance
      this.options.movie.set({
        title: $('#update_title').val(),
        genre: $('#update_genre').val(),
        trailer: $('#update_trailer').val(),
        rating: $('input[name="rating"]:checked').val(),
        comments: $('#update_comments').val()
      });

      this.options.movie.save();

      // Go back to home page
      App.router.navigate('', {trigger: true});

    },

    viewTrailer: function (e) {
      e.preventDefault();

      App.router.navigate(trailer);
    },

    deleteFilm: function (e) {
      e.preventDefault();

      this.options.movie.destroy();

      // Back to home page
      App.router.navigate('', {trigger: true});

    }

  });

}());

(function () {

  App.Routers.AppRouter = Backbone.Router.extend({

    initialize: function () {
      // Light the Fire
      Backbone.history.start();
    },

    routes: {
      '' : 'home',
      'edit/:id' : 'editFilm',
      'add' : 'addMovie',
      'sort/:sortItem' : 'home'
    },

    home: function (sortItem) {
      new App.Views.ListMovie({
        collection: App.movies,
        sort: sortItem
      });

    },

    editFilm: function (id) {

      var m = App.movies.get(id);

      new App.Views.EditMovie({ movie: m });
    },

    addMovie: function () {

      new App.Views.AddMovie();
    }

  });

}());

(function () {

  // Create instance of Collection
  App.movies = new App.Collections.Movies();

  // Fetch server-side movies
  App.movies.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });

  $(document).ready(function(){
    $("#rating-sort").click( function() {
      $(this).css("color", "white");
      $(this).css("text-shadow", "0 0 1px HSLA(215, 55%, 54%, 1)");
      $('#genre-sort').css("color", "HSLA(215, 55%, 54%, 1)");
      $('#title-sort').css("color", "HSLA(215, 55%, 54%, 1)");
    });
  });

  $(document).ready(function(){
    $("#genre-sort").click( function() {
      $(this).css("color", "white");
      $(this).css("text-shadow", "0 0 1px HSLA(215, 55%, 54%, 1)");
      $('#rating-sort').css("color", "HSLA(215, 55%, 54%, 1)");
      $('#title-sort').css("color", "HSLA(215, 55%, 54%, 1)");
    });
  });

  $(document).ready(function(){
    $("#title-sort").click( function() {
      $(this).css("color", "white");
      $(this).css("text-shadow", "0 0 1px HSLA(215, 55%, 54%, 1)");
      $('#rating-sort').css("color", "HSLA(215, 55%, 54%, 1)");
      $('#genre-sort').css("color", "HSLA(215, 55%, 54%, 1)");
    });
  });

}());
