$(function() {
  $.get('http://human.odin.bz/location.json', function(data) {
    $('header h2 span').text('@ ' + data['name']);
    $('header h2 span').attr('title', data['source_created_at']);
  }).fail(function() {
    $('header h2 span').text('@ Earth');
  });
});
