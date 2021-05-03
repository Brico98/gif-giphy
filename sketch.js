// ricerca randomid
var apiR = 'https://api.giphy.com/v1/randomid?';

// ricerca categoria
var apiG = 'https://api.giphy.com/v1/gifs/search?';

// apikey
var apiKey = '&api_key=R0JQHUXuv0Cmrshma64Ao9kilP5uLjrf';

// categorie
var clap = '&q=clap';
var wow = '&q=wow';
var dicaprio = '&q=dicaprio';

//setup
function setup() {
  noCanvas();
  readApiG();
  readApiR();
}

//lettura categoria
function readApiG(){
  var urlG = apiG + apiKey + clap;
  loadJSON(urlG);
  console.log(urlG);
}

// lettura randomid
function readApiR(){
  var urlR = apiR + apiKey;
  loadJSON(urlR);
  console.log(urlR);
}
