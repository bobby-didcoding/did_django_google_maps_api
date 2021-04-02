function DirectionsToggle(){
  var el = $('#dir-toggle');
  var dir_table = $('#dir-table')
  if (dir_table.attr("hidden") == "hidden") {
    dir_table.fadeIn()
    dir_table.removeAttr("hidden")
    el.html('hide <a href="javascript:void(0)" onclick="DirectionsToggle()">here')
  } else {
    dir_table.fadeOut()
    dir_table.attr("hidden", "hidden")
    el.html('click <a href="javascript:void(0)" onclick="DirectionsToggle()">here')
  }
}

