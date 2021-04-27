
var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=R0JQHUXuv0Cmrshma64Ao9kilP5uLjrf';

var clap = '&q=clap';
var wow = '&q=wow';
var dicaprio = '&q=dicaprio';

var queryValue;

function setup() {
  noCanvas();
  slider = createSlider(0,100,20);
  var url = api + apiKey + queryValue;
  loadJSON(url, gif);
}

function gif(giphy) {
  createImg(giphy.data[0].images.original.url);
}

function draw() {
  var valoreSlider = slider.value();


  if (valoreSlider < 33) {
    queryValue = dicaprio;
    gif();
  }

}
