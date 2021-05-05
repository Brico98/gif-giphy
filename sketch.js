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

// Array
var oldNew = [0];


//setup
function setup() {
  noCanvas();
  readApiR();
  readApiC();
  timestamp();
  riordina();
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

  for (let dataGif = 0; dataGif < 49; dataGif++) {
    var myDate = new Date(dataImport.data[dataGif].import_datetime);
    var offset = myDate.getTimezoneOffset() * 60 * 1000;

    var timestamp = myDate.getTime();
    // push nell'array
    var newLength = oldNew.push(timestamp);



    // console.log(oldNew.lenght);
    }
    oldNew.forEach(function(item, index, array) {
      // console.log(item, index);
    })
}

function riordina(){
//  var minimo = Math.min(oldNew) // 1
 console.log("minimo");

}
