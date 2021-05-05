// ricerca categoria
var apiC = 'https://api.giphy.com/v1/gifs/search?';

// apikey
var apiKey = '&api_key=R0JQHUXuv0Cmrshma64Ao9kilP5uLjrf';

// categorie
var clap = '&q=clap';
var wow = '&q=wow';
var dicaprio = '&q=dicaprio';

// Array
var oldNew = [];


//setup
function setup() {
  noCanvas();

  var urlC = apiC + apiKey + clap;
  loadJSON(urlC, timestamp);
  console.log(urlC);

}

function draw() {
}


// lettura data presa
// function readDataImport(dataImport){
//   console.log(dataImport.data[2].import_datetime);
// }

function timestamp(dataImport){

 for (let dataGif = 0; dataGif <= 49; dataGif++) {
    let letturaJSON = dataImport.data[dataGif].import_datetime;
    var myDate = new Date(letturaJSON);
    var offset = myDate.getTimezoneOffset() * 60 * 1000;

    var timestamp = myDate.getTime();
    // push nell'array
    oldNew.push(timestamp);

    }
    oldNew.forEach(function(item, index, array) {
      console.log(item, index);
    })

    var minimo = Math.min(oldNew.length); // 1
    console.log(minimo);
}
