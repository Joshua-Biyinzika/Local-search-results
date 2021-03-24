let apiKey = 'AIzaSyDmXd1te6S3NH_SxXtWW3b8CGT_r5RAySk';
let searches = 0;

function genGeoCode(latitude, longitude) {
    var lat = Math.round(1E7 * latitude);
    var lng = Math.round(1E7 * longitude);
    var now = (new Date).getTime();
    var a = 150 * 620;
    var c = String(1E3 * Number(now));
    var d = ["role:"];
    d.push(1);
    d.push("\nproducer:");
    d.push(12);
    d.push("\nprovenance:");
    d.push(6);
    d.push("\ntimestamp:");
    d.push(c);
    d.push("\nlatlng{\nlatitude_e7:");
    d.push(lat);
    d.push("\nlongitude_e7:");
    d.push(lng);
    d.push("\n}\nradius:");
    d.push(a);
  
    var b = d.join("");
    var uule = 'a '+window.btoa(b).replace(/\+/g, "-").replace(/\//g, "_");
    
    return uule;
  }


function updateLatLng(lat, lng) {
    lat = Math.floor(lat*1e7)/1e7;
    lng = Math.floor(lng*1e7)/1e7;
    var geocode = genGeoCode(lat, lng);
    document.getElementById('uule').value = geocode;
    
    
  }


document.getElementById('button-search').addEventListener( "click", function(e) {

    e.preventDefault()

   let lat = parseFloat(document.getElementById('lat').value);
   let long = parseFloat(document.getElementById('long').value);

    updateLatLng(lat, long);
    

    
    if (ga) {
        
      
      var q = document.getElementById('search-input').value;
      var hl = document.getElementById('hl').value;
      var gl = document.getElementById('gl').value;
      var place = document.getElementById('place');
      searches++;
      ga('send', {
        hitType: 'event',
        eventCategory: hl+'-'+gl,
        eventAction: q,
        eventLabel: place,
        eventValue: searches || 1
      });
    }

    document.getElementById('searchForm').submit()
    
  });

// function convertDegreesToMeters(degree){
//       const approximateDegreeInMeter = 111000;
     
//       let degreeInMeters = (approximateDegreeInMeter * degree);
//       console.log('Meters:'+degreeInMeters)
//       return degreeInMeters
      
//       }

// function convertMetersToDegrees(Meter){
//     const approximateDegreeInMeter = 111000;
//     let metersInDegree = Meter/approximateDegreeInMeter;
//     console.log('Degrees:'+metersInDegree)
//     return metersInDegree;
    
// }





// Create the script tag, set the appropriate attributes






















// Google maps

// let script = document.createElement('script');
// script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
// script.async = true;

// let map;


// // Attach your callback function to the `window` object
// window.initMap = function() {



//     let place = { lat: 38.8977, lng: -77.0365 };

//     map = new google.maps.Map(document.getElementById("map"), {
//         center: place,
//         zoom: 16,
//       });

//     let marker = new google.maps.Marker({
//         position: place,
//         map: map,
//         title:'This is place DC'
//     });

    
// };

// // Append the 'script' element to 'head'
// document.head.appendChild(script);
      