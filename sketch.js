
var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=R0JQHUXuv0Cmrshma64Ao9kilP5uLjrf';

var clap = '&q=dick';
var wow = '&q=wow';
var dicaprio = '&q=dicaprio';

var img;

  function setup() {
    noCanvas();
    var button = createButton('reset');
    button.mousePressed(resetSketch);
    resetSketch();
  }

function resetSketch(){
  let risultati = [clap, wow, dicaprio];
  var query = 'risultato' ;
  let risultato = random(risultati);
  var url = api + apiKey + risultato;
  loadJSON(url, gif);
  img.remove();
}

  function gif(giphy) {
    let numbers = ['1','2','3','4','5','6'];
    let number = random(numbers);
    img = createImg(giphy.data[number].images.original.url);
  }
