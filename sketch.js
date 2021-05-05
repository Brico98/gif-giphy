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
  timestamp();
}


//lettura categoria
function readApiC(){
  var urlC = apiC + apiKey + clap;
  loadJSON(urlC, timestamp);
  console.log(urlC);
}

// lettura randomid
function readApiR(){
  var urlR = apiR + apiKey;
  loadJSON(urlR, timestamp);
  console.log(urlR);
}

// lettura data presa
// function readDataImport(dataImport){
//   console.log(dataImport.data[2].import_datetime);
// }

function timestamp(dataImport){
  for (let i = 0; i < 9; i++) {
    var myDate = new Date(dataImport.data[i].import_datetime);
    var offset = myDate.getTimezoneOffset() * 60 * 1000;

    var timestamp = myDate.getTime();

    console.log(timestamp);
}

}
