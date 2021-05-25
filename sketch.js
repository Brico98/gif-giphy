// collegamento Arduino -> p5
var serial;
// dato potenziometro
var latestData;

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
var myObj;
//setup
function setup() {
  createCanvas(windowWidth,windowHeight);

  /////////////////// Collegamento Arduino -> p5  ///////////////////
  serial = new p5.SerialPort();
  serial.list();
  serial.open('/dev/tty.usbmodem141201');
  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
  //////////////////////////////////////////////

  var urlC = apiC + apiKey + clap;
  loadJSON(urlC, timestamp);
  console.log(urlC);

}

function draw() {
 background(255,255,255);
 fill(0,0,0);
  var pippo = round(map(latestData, 0, 1023, 0, 24));
  print(pippo);
  if (pippo>0 && pippo<5) {
    fill(255,0,0);
    ellipse(windowWidth/2, windowHeight/2,latestData,latestData);
  }

    if (pippo > 5 && pippo < 10) {
    fill(0,0,255);
    ellipse(windowWidth/2, windowHeight/2,latestData,latestData);
  }
    if (pippo>9) {
    fill(0,255,0);
    ellipse(windowWidth/2, windowHeight/2,latestData,latestData);
  }
  //Array per scegliere randomicamente una tra le prime 6 gif del risultato
  //   let numbers = ['1','2','3','4','5','6'];
  //   let number = random(numbers);
  //   img = createImg(dataImport.data[number].images.original.url);
  //   console.log(giphy);
  //
  // }
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

    myObj = {
      timestamp : [timestamp],
      url : imgsJSON

    }

    oldNew.push(myObj);

  //  gifSort.push(imgsJSON);

    }
    console.log(oldNew[0].url);

    function dynamicsort(property){
      var sortOrder = 1;
      if(property[0] === "-"){

        sortOrder = -1;
        property = property.substr(1);
      }
        return function (a,b){
          var result = (a[property] < b[property]) ? -1  : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
        }

    }



   //  oldNew.forEach(function(item, index, array) {
   //      gifObj = { [item] : gifSort[index] };
   //      console.log(gifObj);
   //  })
   //
   //
   //
   // var minimo = oldNew.sort(function(a, b){return a-b});  // 1
   // console.log(oldNew);



  //  console.log(imgsJSON);

}

/////////////////// Funzioni collegamento Arduino -> p5 ///////////////////
function serverConnected() {
  print("Connected to Server");
}
function gotList(thelist) {
  print("List of Serial Ports:");
  for (let i = 0; i < thelist.length; i++) {
    print(i + " " + thelist[i]);
  }
}
function gotOpen() {
  print("Serial Port is Open");
}
function gotClose(){
  print("Serial Port is Closed");
  latestData = "Serial Port is Closed";
}

function gotError(theerror) {
  print(theerror);
}
function gotData() {
  let currentString = serial.readLine();
  trim(currentString);
  if (!currentString) return;
  console.log(currentString);
  latestData = currentString;
}
//////////////////////////////////////////////
