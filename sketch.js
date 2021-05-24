
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
  createCanvas(windowWidth, windowHeight);
  ricerca =


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

    }
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

}
