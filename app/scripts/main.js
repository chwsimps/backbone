var Chase = Backbone.Model.extend({

  defaults: {
    name: '',
    location: 'Atlanta',
    awesome: true
  },

  initialize: function () {
    var n = this.get('name');
    console.log(n + ' has been added!');
  }

});

var Students = Backbone.Collection.extend({
  model: Student,
  url: 'http://tiy-atl-fe-server.herokuapp.com/collections/bbchase'
});

var all_students = new Students();

//Normally Collections will be plural version of Model (ex: Student & Students)

$('#studentForm').on('submit', function (e) {

  // Prevent the default action of our form submission
  e.preventDefault();

  // Grab the name from the input
  var student_name = $('#name').val();

  // Create the new instance of out Student constructor (Backbone.Model)
  var s = new Student({
    name: student_name
  });

  // Access our Collection and add our new instance (Student) to our collection
  all_students.add(s);

  // Save our student - this looks for a URL field or a URL field in our collection
  // and saves it to that URL using a simple POST method
  s.save();

  // Clear my form
  $(this)[0].reset();

});
