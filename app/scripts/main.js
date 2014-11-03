var Band = Backbone.Model.extend({

  defaults: {
    name: '',
    band_location: 'Atlanta',
    rocks: true
  },

  initialize: function () {
    var n = this.get('name');
    console.log(n + ' is my favorite Band!');
  }

});

var Bands = Backbone.Collection.extend({
  model: Band,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bbchase'
});

var fav_band = new Bands();

$('#form').on('submit', function (event) {
  event.preventDefault();

  var band_name = $('#name').val();

  var b = new Band({
    name: band_name
  });

  fav_band.add(b);

  b.save();

  $(this)[0].reset();

});
