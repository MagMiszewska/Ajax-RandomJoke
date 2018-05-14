var url = 'http://api.icndb.com/jokes/random';
getJoke();

var button = document.getElementById('get-joke');
button.addEventListener('click', function () {
  getJoke();
});
var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function () {
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}

/* Użycie jQuery
var url = 'http://api.icndb.com/jokes/random';
getJoke();
var $button = $('#get-joke').click(function(){
  getJoke();
});
var $paragraph = $('#joke');
function getJoke() {
  $.ajax ({
    url: url,
    method: 'GET',
    success: function(res){
      $paragraph.text(res.value.joke);
    }
  });
}
*/