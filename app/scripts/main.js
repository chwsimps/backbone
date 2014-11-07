(function () {

  // Create instance of Collection
  App.movies = new App.Collections.Movies();

  // Fetch server-side movies
  App.movies.fetch().done( function () {

    App.router = new App.Routers.AppRouter();

  });


}());
