// positon finder
$(document).ready(function() {
  $('#world_map').click(function(e) {
    var offset = $(this).offset();
    console.log(e.pageX - offset.left);
    console.log(e.pageY - offset.top);
  });
});
