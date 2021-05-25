<<<<<<< HEAD
// collegamento Arduino -> p5
var serial;
// dato potenziometro
var latestData;
=======

let serialPorts = ['/dev/tty.usbmodem143201','/dev/tty.Bluetooth-Incoming-Port'];
let serials = [];
let data = [];


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

function gotData(index) {
 let currentString = serial[index].readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 data[index] = currentString;
}

>>>>>>> fb617a6357e7f2c3e767bc0381d56a20b1594799

// ricerca categoria
var apiC = 'https://api.giphy.com/v1/gifs/search?';
// apikey
var apiKey = '&api_key=R0JQHUXuv0Cmrshma64Ao9kilP5uLjrf';
// categorie
var clap = '&q=clap';
var wow = '&q=wow';
var dicaprio = '&q=dicaprio';
var ricerca;
// Array
var oldNew = [];
var gifSort = [];
var myObj;

//setup
function setup() {
<<<<<<< HEAD
  createCanvas(windowWidth,windowHeight);

  /////////////////// Collegamento Arduino -> p5  ///////////////////
  serial = new p5.SerialPort();
  serial.list();
  serial.open('/dev/tty.usbmodem1434201');
  serial.on('connected', serverConnected);
  serial.on('list', gotList);
  serial.on('data', gotData);
  serial.on('error', gotError);
  serial.on('open', gotOpen);
  serial.on('close', gotClose);
  //////////////////////////////////////////////
=======
  createCanvas(windowWidth, windowHeight);
  ricerca =
>>>>>>> fb617a6357e7f2c3e767bc0381d56a20b1594799


  for(let i = 0; i < serialPorts.length; i++){
   let newPort = new p5.SerialPort();

   newPort.open(serialPorts[i]);

   newPort.on('connected', serverConnected);
   newPort.on('list', gotList);
   newPort.on('data', gotData.bind(this, i));
   newPort.on('error', gotError);
   newPort.on('open', gotOpen);
   newPort.on('gotClose', gotClose);

   serials.push(newPort);


  var urlC = apiC + apiKey + ricerca;
  loadJSON(urlC, timestamp);
  console.log(urlC);

<<<<<<< HEAD
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
}
=======
    }
  }
>>>>>>> fb617a6357e7f2c3e767bc0381d56a20b1594799

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
<<<<<<< HEAD
=======

>>>>>>> fb617a6357e7f2c3e767bc0381d56a20b1594799
    console.log(oldNew.sort(dynamicsort("timestamp")));

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

<<<<<<< HEAD
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
=======
>>>>>>> fb617a6357e7f2c3e767bc0381d56a20b1594799
}
//////////////////////////////////////////////
