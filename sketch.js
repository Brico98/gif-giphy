// ricerca randomid
var apiR = 'https://api.giphy.com/v1/randomid?';

// ricerca categoria
var apiC = 'https://api.giphy.com/v1/gifs/search?';

// apikey
var apiKey = '&api_key=R0JQHUXuv0Cmrshma64Ao9kilP5uLjrf';

// categorie
var clap = '&q=clap';
var wow = '&q=wow';
var dicaprio = '&q=dicaprio';


//setup
function setup() {
  noCanvas();
  readApiR();
  readApiC();
}

//lettura categoria
function readApiC(){
  var urlC = apiC + apiKey + clap;
  loadJSON(urlC, readDataImport);
  console.log(urlC);
}

// lettura randomid
function readApiR(){
  var urlR = apiR + apiKey;
  loadJSON(urlR, );
  console.log(urlR);
}

function readDataImport(dataImport){
  console.log(dataImport.data[0].import_datetime);
}
