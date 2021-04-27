
var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=R0JQHUXuv0Cmrshma64Ao9kilP5uLjrf';

var clap = '&q=dick';
var wow = '&q=vagina';
var dicaprio = '&q=fuck';

  function setup() {
    noCanvas();
    let risultati = [clap, wow, dicaprio];
    var query = 'risultato' ;
    let risultato = random(risultati);
    var url = api + apiKey + risultato;
    loadJSON(url, gif);
  }

  function gif(giphy) {
    let numbers = ['1','2','3','4','5'];
    let number = random(numbers);
    createImg(giphy.data[number].images.original.url);
  }
