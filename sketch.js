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
var gifSort = [];

//setup
function setup() {
  noCanvas();

  var urlC = apiC + apiKey + clap;
  loadJSON(urlC, timestamp);
  console.log(urlC);

}


function draw() {
}


function timestamp(dataImport){
  //Array per scegliere randomicamente una tra le prime 6 gif del risultato
//   let numbers = ['1','2','3','4','5','6'];
//   let number = random(numbers);
//   img = createImg(dataImport.data[number].images.original.url);
//   console.log(giphy);
//
// }


 for (let dataGif = 0; dataGif <= 49; dataGif++) {

   //letturaJSON da isolare
    let letturaJSON = dataImport.data[dataGif].import_datetime;
    var myDate = new Date(letturaJSON);
    var offset = myDate.getTimezoneOffset() * 60 * 1000;

    let imgsJSON = dataImport.data[dataGif].images.original.url;
    var timestamp = myDate.getTime();
    // push nell'array
      oldNew.push(timestamp);
      gifSort.push(imgsJSON);
    }

    oldNew.forEach(function(item, index, array) {
      console.log(item, index);
    })


    var minimo = oldNew.sort(function(a, b){return a-b});  // 1
    console.log(minimo);

    // itemsArray.sort(function(a, b){
    //   return sortingArr.indexOf(gifSort) - sortingArr.indexOf(oldNew);
    // });

    // immagini loadJSON
    // let imgsJSON = dataImport.data[dataImport].images.original.url;
    // Gifs.push(imgsJSON);

  //  console.log(imgsJSON);






}
