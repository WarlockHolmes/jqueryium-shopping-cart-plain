var changeText = function (element, string) {
  $(element).text(string);
}

$(document).ready(function(){
  var target = $('td').first();
  changeText(target, 'test');
});
