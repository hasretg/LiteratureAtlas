//initialize the map
var map = L.map('map', {
    center: [46.2120906,  6.1309204],
    zoom: 13,
    zoomControl: true
});

map.zoomControl.setPosition('topright');

//set timeslider to invisible (default)
var div_slider = document.getElementById("slider-main");
div_slider.style.visibility = 'hidden';


//initialize base map
var baseLayer = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
  opacity: 0.9,
	maxZoom: 19,
  minZoom: 13
}).addTo(map);


//textbox popup
var text_content ="<b>THE FEAR INDEX</b>" +"<hr>"+ "<p>by Robert Harris</p>"+ "<p>&nbsp;</p>"+ "<p>Mouseover red elements...</p>";


var popup = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.24609817, 6.16957796])
.setContent(text_content)
.openOn(map);


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//geojson
//style of the features
var myStyle = {
    "color": "#ff0000",
    "weight": 2,
    "fillOpacity": 0.1
};


//polygon features
var polygonGroup = L.layerGroup();


//add les eaux-vives
var eauxVivesLayer = L.geoJSON(eauxVives, {
  style: myStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
    this.setStyle({
      "color": "#e60000",
      "weight": 2,
      "fillOpacity": 0.5
      });
    });
  layer.on('mouseout', function () {
    popup.setContent(text_content)
    this.setStyle({
      "color": "#ff0000",
      "weight": 2,
      "fillOpacity": 0.1
      });
    });
  }

}).on('click', clickToZoomEauxVives).addTo(polygonGroup);

//add vernier
var vernierLayer = L.geoJSON(vernier, {
  style: myStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
    this.setStyle({
      "color": "#e60000",
      "weight": 2,
      "fillOpacity": 0.5
      });
    });
  layer.on('mouseout', function () {
    popup.setContent(text_content)
    this.setStyle({
      "color": "#ff0000",
      "weight": 2,
      "fillOpacity": 0.1
      });
    });
  }

}).on('click', clickToZoomVernier).addTo(polygonGroup);

//add ZIMEYSA
var zimeysaLayer = L.geoJSON(zimeysa, {
  style: myStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
    this.setStyle({
      "color": "#e60000",
      "weight": 2,
      "fillOpacity": 0.5
      });
    });
  layer.on('mouseout', function () {
    popup.setContent(text_content)
    this.setStyle({
      "color": "#ff0000",
      "weight": 2,
      "fillOpacity": 0.1
      });
    });
  }

}).on('click', clickToZoomZimeysa).addTo(polygonGroup);

//add cern
var cernLayer = L.geoJSON(cern, {
  style: myStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
    this.setStyle({
      "color": "#e60000",
      "weight": 2,
      "fillOpacity": 0.5
      });
    });
  layer.on('mouseout', function () {
    popup.setContent(text_content)
    this.setStyle({
      "color": "#ff0000",
      "weight": 2,
      "fillOpacity": 0.1
      });
    });
  }

}).on('click', clickToZoomCern).addTo(polygonGroup);



polygonGroup.addTo(map);


//point features
var geojsonMarkerOptions = {
    radius: 10,
    "color": "#ff0000",
    "weight": 1,
    "fillOpacity": 0.75
};

var pointsLayer = L.geoJSON(pointFeatures, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: function (feature, layer) {
    layer.on('mouseover', function () {
      popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
      this.setStyle({
        "color": "#e60000",
        "weight": 5,
        "fillOpacity": 1
        });
      });
    layer.on('mouseout', function () {
      popup.setContent(text_content)
      this.setStyle({
        "color": "#ff0000",
        "weight": 1,
        "fillOpacity": 0.75
        });
      });
    }
}).on('click', clickToZoomPoints).addTo(map);

var policePointLayer = L.geoJSON(policePoint, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: function (feature, layer) {
    layer.on('mouseover', function () {
      popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
      this.setStyle({
        "color": "#e60000",
        "weight": 5,
        "fillOpacity": 1
        });
      });
    layer.on('mouseout', function () {
      popup.setContent(text_content)
      this.setStyle({
        "color": "#ff0000",
        "weight": 1,
        "fillOpacity": 0.75
        });
      });
    }
}).on('click', clickToZoomPolice).addTo(map);

var mamcoPointLayer = L.geoJSON(mamcoPoint, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: function (feature, layer) {
    layer.on('mouseover', function () {
      popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
      this.setStyle({
        "color": "#e60000",
        "weight": 5,
        "fillOpacity": 1
        });
      });
    layer.on('mouseout', function () {
      popup.setContent(text_content)
      this.setStyle({
        "color": "#ff0000",
        "weight": 1,
        "fillOpacity": 0.75
        });
      });
    }
}).on('click', clickToZoomMamco).addTo(map);

var hospitalPointLayer = L.geoJSON(hospitalPoint, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: function (feature, layer) {
    layer.on('mouseover', function () {
      popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
      this.setStyle({
        "color": "#e60000",
        "weight": 5,
        "fillOpacity": 1
        });
      });
    layer.on('mouseout', function () {
      popup.setContent(text_content)
      this.setStyle({
        "color": "#ff0000",
        "weight": 1,
        "fillOpacity": 0.75
        });
      });
    }
}).on('click', clickToZoomHospital).addTo(map);

var beauRivagePointLayer = L.geoJSON(beauRivagePoint, {
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, geojsonMarkerOptions);
    },
    onEachFeature: function (feature, layer) {
    layer.on('mouseover', function () {
      popup.setContent('<b>'+feature.properties.name+'</b>' + '<hr>' + feature.properties.text)
      this.setStyle({
        "color": "#e60000",
        "weight": 5,
        "fillOpacity": 1
        });
      });
    layer.on('mouseout', function () {
      popup.setContent(text_content)
      this.setStyle({
        "color": "#ff0000",
        "weight": 1,
        "fillOpacity": 0.75
        });
      });
    }
}).on('click', clickToZoomBeauRivage).addTo(map);


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//add protagonists to the map

//create layergroups for all protagonists
var hoffmannGroup = L.layerGroup();
var quarryGroup = L.layerGroup();
var leclercGroup = L.layerGroup();
var gabrielleGroup = L.layerGroup();


//hoffmann
var hoffmannIcon = L.icon({
    iconUrl: 'Hoffmann.png',
    iconSize: [25, 40],// size of the icon
    /*iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location*/
    popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor*/
});

//quarry
var quarryIcon = L.icon({
    iconUrl: 'Quarry.png',
    iconSize: [25, 40],// size of the icon
    /*iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location*/
    popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor*/
});

//leclerc
var leclercIcon = L.icon({
    iconUrl: 'Leclerc.png',
    iconSize: [25, 40],// size of the icon
    /*iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location*/
    popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor*/
});

//gabrielle
var gabrielleIcon = L.icon({
    iconUrl: 'Gabrielle.png',
    iconSize: [25, 40],// size of the icon
    /*iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location*/
    popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor*/
});


//declare the locations of the book
var position1 = ([46.228337, 6.192394]); //Villa Clairmont
var position2 = ([46.193878, 6.148803]); //Hospital
var position3 = ([46.204232, 6.161013]); //Hoffmann Investment Technologies
var position4 = ([46.198983, 6.138020]); //MAMCO
var position5 = ([46.209116, 6.149577]); //Hotel Beau Rivage
var position6 = ([46.213564, 6.148132]); //Hotel Diodati
var position7 = ([46.216615, 6.082769]); //Vernier
var position8 = ([46.202294, 6.077266]); //Passarelle de chevres
var position9 = ([46.221427, 6.061576]); //ZIMEYSA
var position10 = ([46.234933, 6.047707]); //CERN
var position11 = ([46.200143, 6.132439]); //Police Department


///
var hoffmann = L.marker(position1, {icon: hoffmannIcon}).addTo(hoffmannGroup);
///
hoffmann.bindPopup("There is an intruder in my house...");

///
var quarry = L.marker([50.228337, 1.192394], {icon: quarryIcon}).addTo(quarryGroup);
///
///
var leclerc = L.marker(position11, {icon: leclercIcon}).bindPopup("I am in the middle of my night shift. I hope it will be quiet...").addTo(leclercGroup);
///
///
var gabrielle = L.marker(position1, {icon: gabrielleIcon}).addTo(gabrielleGroup);

gabrielle.bindPopup("Zzzz...");



//Evenlisteners for slider
var slider = document.getElementById("slider");


//function for displaying the routes of the hoffmann (polylines)
function displayRoutes1(x){

  //Define hoffmannLines
  var hoffmannLines = L.polyline([
    [46.228337, 6.192394],
    [46.193878, 6.148803]
  ])

  //set style for hoffmannLines
  var hoffmannStyle = {
    color: "#ffe866",
    "weight": 5,
    //"dashArray": "30 10",
    "opacity": 0.5
  };

  hoffmannLines.setStyle(hoffmannStyle);



  if (x == 2)
  {
    hoffmannLines.addTo(hoffmannGroup);
  }

  if (x == 3)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 4)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 5)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 6)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 7)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 8)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 9)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577],
      [46.213564, 6.148132]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 10)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577],
      [46.213564, 6.148132],
      [46.216615, 6.082769]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 11)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577],
      [46.213564, 6.148132],
      [46.216615, 6.082769],
      [46.202294, 6.077266]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 12)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577],
      [46.213564, 6.148132],
      [46.216615, 6.082769],
      [46.202294, 6.077266],
      [46.204232, 6.161013]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 13)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577],
      [46.213564, 6.148132],
      [46.216615, 6.082769],
      [46.202294, 6.077266],
      [46.204232, 6.161013],
      [46.221427, 6.061576]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 14)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577],
      [46.213564, 6.148132],
      [46.216615, 6.082769],
      [46.202294, 6.077266],
      [46.204232, 6.161013],
      [46.221427, 6.061576]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }

  if (x == 15)
  {
    hoffmannLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.198983, 6.138020],
      [46.209116, 6.149577],
      [46.213564, 6.148132],
      [46.216615, 6.082769],
      [46.202294, 6.077266],
      [46.204232, 6.161013],
      [46.221427, 6.061576],
      [46.193878, 6.148803]
    ]).addTo(hoffmannGroup);
    hoffmannLines.setStyle(hoffmannStyle);
  }
}

//function for displaying the routes of the quarry (polylines)
function displayRoutes2(x){

  //Define quarryLines
  var quarryLines = L.polyline([
    [46.228337, 6.192394],
    [46.193878, 6.148803]
  ])

  //set style for hoffmannLines
  var quarryStyle = {
    color: "#00cc00",
    "weight": 5,
  //  "dashArray": "30 10",
    "opacity": 0.5
  };

  quarryLines.setStyle(quarryStyle);

  if (x == 3)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 4)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 5)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 6)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 7)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 8)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 9)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 10)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 11)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 12)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 13)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 14)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577],
      [46.204232, 6.161013],
      [46.221427, 6.061576]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }

  if (x == 15)
  {
    quarryLines = L.polyline([
      [46.193878, 6.148803],
      [46.204232, 6.161013],
      [46.209116, 6.149577],
      [46.204232, 6.161013],
      [46.221427, 6.061576],
      [46.204232, 6.161013]
    ]).addTo(quarryGroup);
    quarryLines.setStyle(quarryStyle);
  }
}

//function for displaying the routes of leclerc (polylines)
function displayRoutes3(x){

  //Define leclercLines
  var leclercLines = L.polyline([
    [46.228337, 6.192394],
    [46.193878, 6.148803]
  ])

  //set style for hoffmannLines
  var leclercStyle = {
    color: "#1a53ff",
    "weight": 5,
    //"dashArray": "30 10",
    "opacity": 0.5
  };

  leclercLines.setStyle(leclercStyle);

  if (x == 1)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 2)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 3)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 4)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 5)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 6)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 7)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 8)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 9)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 10)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439],
      [46.204232, 6.161013]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 11)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439],
      [46.204232, 6.161013]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 12)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439],
      [46.204232, 6.161013],
      [46.200143, 6.132439]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 13)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439],
      [46.204232, 6.161013],
      [46.200143, 6.132439],
      [46.204232, 6.161013]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 14)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439],
      [46.204232, 6.161013],
      [46.200143, 6.132439],
      [46.221427, 6.061576]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }

  if (x == 15)
  {
    leclercLines = L.polyline([
      [46.200143, 6.132439],
      [46.228337, 6.192394],
      [46.200143, 6.132439],
      [46.234933, 6.047707],
      [46.198983, 6.138020],
      [46.200143, 6.132439],
      [46.204232, 6.161013],
      [46.200143, 6.132439],
      [46.204232, 6.161013]
    ]).addTo(leclercGroup);
    leclercLines.setStyle(leclercStyle);
  }
}

//function for displaying the routes of gabrielle (polylines)
function displayRoutes4(x){

  //Define gabrielleLines
  var gabrielleLines = L.polyline([
    [46.228337, 6.192394],
    [46.193878, 6.148803]
  ])

  //set style for hoffmannLines
  var gabrielleStyle = {
    color: "#ff9900",
    "weight": 5,
    //"dashArray": "30 10",
    "opacity": 0.5
  };

  gabrielleLines.setStyle(gabrielleStyle);

  if (x == 2)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 3)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 4)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 5)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 6)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 7)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 8)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 9)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020],
      [46.228337, 6.192394]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 10)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020],
      [46.228337, 6.192394],
      [46.234933, 6.047707]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
  }

  if (x == 11)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020],
      [46.228337, 6.192394],
      [46.234933, 6.047707],
      [46.228337, 6.192394]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
    }

  if (x == 12)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020],
      [46.228337, 6.192394],
      [46.234933, 6.047707],
      [46.228337, 6.192394]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
    }


  if (x == 13)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020],
      [46.228337, 6.192394],
      [46.234933, 6.047707],
      [46.228337, 6.192394],
      [46.204232, 6.161013]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
    }


  if (x == 14)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020],
      [46.228337, 6.192394],
      [46.234933, 6.047707],
      [46.228337, 6.192394],
      [46.204232, 6.161013],
      [46.221427, 6.061576]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
    }


  if (x == 15)
  {
    gabrielleLines = L.polyline([
      [46.228337, 6.192394],
      [46.193878, 6.148803],
      [46.228337, 6.192394],
      [46.198983, 6.138020],
      [46.228337, 6.192394],
      [46.234933, 6.047707],
      [46.228337, 6.192394],
      [46.204232, 6.161013],
      [46.221427, 6.061576],
      [46.193878, 6.148803]
    ]).addTo(gabrielleGroup);
    gabrielleLines.setStyle(gabrielleStyle);
    }

}


//function for displaying the current position of hoffmann
function displayPosition1(x)
  {




    if (x == 0)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position1);
      hoffmann.bindPopup("There is an intruder in my house... I have to warn my sleeping wife!");

      //reset popup content in the lake
      popup.setContent('<b>'+"3.59 AM"+'</b>' + '<hr>');
    }

    if (x == 1)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position1);
      hoffmann.bindPopup("What happened...? Where is the intruder? He must have knocked me out...");

      //reset popup content in the lake
      popup.setContent('<b>'+"3.59 - 5.27 AM"+'</b>' + '<hr>' + "???");
    }

    if (x == 2)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position2);
      hoffmann.bindPopup("I do not want to stay in this hospital... I am all right and have to go to work!");




      popup.setContent('<b>'+"5.27 AM"+'</b>' + '<hr>' + "???");
    }

    if (x == 3)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position3);
      hoffmann.bindPopup("I have to prepare the presentation of our project VIXAL-4. It is very important to convince our investors.");




      popup.setContent('<b>'+"7.00 AM"+'</b>' + '<hr>' + "???");
    }

    if (x == 4)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position3);
      hoffmann.bindPopup("I am very nervous... I do not like to make presentations... I just hope the investors are going to be convinced.");

      popup.setContent('<b>'+"9.00 AM"+'</b>' + '<hr>' + "???");
    }

    if (x == 5)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position3);
      hoffmann.bindPopup("Thanks to the developped autonomous machine-learning algorithm, VIXAL-4 can provide sufficient data from the markets to generate successful trades in the financial markets and making billions of profit...");

      popup.setContent('<b>'+"after 9.00 AM"+'</b>' + '<hr>' + "???");
    }

    if (x == 6)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position3);
      hoffmann.bindPopup("The presentation is over... now I have to get to the exhibition of my wife.");

      popup.setContent('<b>'+"11.00 AM"+'</b>' + '<hr>' + "???");
    }

    if (x == 7)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position4);
      hoffmann.bindPopup("...an anonymous collector has bought Gabrielle's artwork. My wife is blaming me, but I did not do it... Someone is playing with me and my money!");

      popup.setContent('<b>'+"12.00 AM"+'</b>' + '<hr>' + "???");
    }

    if (x == 8)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position5);
      hoffmann.bindPopup("We have convinced our investors and got the investment for VIXAL-4... but who is this suspicious person outside of the window? ...it is the intruder from last night! I have to confront him!");

      popup.setContent('<b>'+"1.00 PM"+'</b>' + '<hr>' + "???");
    }

    if (x == 9)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position6);
      hoffmann.bindPopup("I killed the intruder... but is he telling the truth? Did I hire him to break into my own house? All this is not making any sense at all!");

      popup.setContent('<b>'+"1.00 - 4.00 PM"+'</b>' + '<hr>' + "???");
    }

    if (x == 10)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position7);
      hoffmann.bindPopup("What if I have really done all these things? Instucted someone to break into my house... buy all the artwork of my wife... I need to see my psychiatrist.");

      popup.setContent('<b>'+"4.00 PM"+'</b>' + '<hr>' + "???");
    }

    if (x == 11)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position8);
      hoffmann.bindPopup("I feel tempted to jump now... to end it all now... there is a mass of DNA and fingerprint evidence in the hotel room linking me to the killing... but I am not mad! ");

      popup.setContent('<b>'+"4.00 - 6.00 PM"+'</b>' + '<hr>' + "???");
    }

    if (x == 12)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position3);
      hoffmann.bindPopup("There are cameras everywhere in my office... the security is telling me, that I have instructed to install them. I can not remember! Additionally, VIXAL-4 must have rented a warehouse in the industrial district... VIXAL's AI has become hostile.");

      popup.setContent('<b>'+"6.00 PM"+'</b>' + '<hr>' + "???");
    }

    if (x == 13)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position9);
      hoffmann.bindPopup("VIXAL-4 is becoming autonomous... it is much more powerful now than I could have ever imagined. I have bought enough fuel to burn this warehouse down. I have to shut it down now once and for all...");

      popup.setContent('<b>'+"around 8.30 PM"+'</b>' + '<hr>' + "???");
    }

    if (x == 14)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position9);
      hoffmann.bindPopup("I take this whole system down with me now!");

      popup.setContent('<b>'+"8.45.28 PM"+'</b>' + '<hr>' + "???");
    }

    if (x == 15)
    {
      displayRoutes1(x);
      hoffmann.setLatLng(position2);
      hoffmann.bindPopup("Zzzz...");

      popup.setContent('<b>'+"0.00 AM"+'</b>' + '<hr>' + "???");
    }


  }

//function for displaying the current position of quarry
function displayPosition2(x)
  {
    if (x == 0)
    {


    //reset popup content in the lake
      popup.setContent('<b>'+"3.59 AM"+'</b>' + '<hr>');
    }

    if (x == 1)
    {



      //reset popup content in the lake
      popup.setContent('<b>'+"3.59 - 5.27 AM"+'</b>' + '<hr>');
    }

    if (x == 2)
    {
      displayRoutes2(x);
      quarry.setLatLng(position2);
      quarry.bindPopup("I just got a call from Alex. He has been attacked and is now at the hospital.");



      popup.setContent('<b>'+"5.27 AM"+'</b>' + '<hr>');
    }

    if (x == 3)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("Alex needs some time to prepare for the big presentation this morning...");




      popup.setContent('<b>'+"7.00 AM"+'</b>' + '<hr>');
    }

    if (x == 4)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("Today is a very big day for us... We need this investment for our project VIXAL-4.");

      popup.setContent('<b>'+"9.00 AM"+'</b>' + '<hr>');
    }

    if (x == 5)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("Alex is a genius and will get us the needed investment.");

      popup.setContent('<b>'+"after 9.00 AM"+'</b>' + '<hr>');
    }

    if (x == 6)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("The presentation was a success... now I am spending some time with the investors, while Alex is driving to the art exhibition of his wife.");

      popup.setContent('<b>'+"11.00 AM"+'</b>' + '<hr>');
    }

    if (x == 7)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("I am heading with the investors to the Hotel Beau Rivage for lunch. I hope Alex is also going to make it on time...");

      popup.setContent('<b>'+"12.00 AM"+'</b>' + '<hr>');
    }

    if (x == 8)
    {
      displayRoutes2(x);
      quarry.setLatLng(position5);
      quarry.bindPopup("We have the investment! What a relief! Anyways... very strange how Alex just fleed the lunch... ");

      popup.setContent('<b>'+"1.00 PM"+'</b>' + '<hr>');
    }

    if (x == 9)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("Back at the office... have not heard anything from Alex so far...");

      popup.setContent('<b>'+"1.00 - 4.00 PM"+'</b>' + '<hr>');
    }

    if (x == 10)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("VIXAL-4 is taking more and more risk in its trades... this is very unusual.");

      popup.setContent('<b>'+"4.00 PM"+'</b>' + '<hr>');
    }

    if (x == 11)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("VIXAL-4 is now making trades with a level of risk very unsustainable... my staff is getting nervous. Where is Alex?");

      popup.setContent('<b>'+"4.00 - 6.00 PM"+'</b>' + '<hr>');
    }

    if (x == 12)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("Alex is back. He is telling me that there are cameras everywhere in our offices. Furthermore, VIXAL-4 must have rented a warehouse with unauthorised hardware. Alex wants to burn that warehouse down...");

      popup.setContent('<b>'+"6.00 PM"+'</b>' + '<hr>');
    }

    if (x == 13)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("Together with Gabrielle and the police, we need to rescue Alex.");

      popup.setContent('<b>'+"around 8.30 PM"+'</b>' + '<hr>');
    }

    if (x == 14)
    {
      displayRoutes2(x);
      quarry.setLatLng(position9);
      quarry.bindPopup("Oh my god! The warehouse is burning down. I hope Alex is all right...");

      popup.setContent('<b>'+"8.45.28 PM"+'</b>' + '<hr>');
    }

    if (x == 15)
    {
      displayRoutes2(x);
      quarry.setLatLng(position3);
      quarry.bindPopup("Inspector Leclerc just drove me to the office. Though the warehouse with the hardware has been burned down, VIXAL-4 is still trading and making a huge profit...");

      popup.setContent('<b>'+"0.00 AM"+'</b>' + '<hr>');
    }

  }

//function for displaying the current position of leclerc
function displayPosition3(x)
    {
    if (x == 0)
    {
      leclerc.setLatLng(position11);
      leclerc.bindPopup("I am in the middle of my night shift. I hope it will be quiet...");


    //reset popup content in the lake
      popup.setContent('<b>'+"3.59 AM"+'</b>' + '<hr>');
    }

    if (x == 1)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position1);
      leclerc.bindPopup("I just arrived at the crime scene. Dr. Hoffmann has been attacked in his own home... ");


      //reset popup content in the lake
      popup.setContent('<b>'+"3.59 - 5.27 AM"+'</b>' + '<hr>');
    }

    if (x == 2)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position1);
      leclerc.bindPopup("I am searching for some evidence...");



      popup.setContent('<b>'+"5.27 AM"+'</b>' + '<hr>');
    }

    if (x == 3)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position1);
      leclerc.bindPopup("...bizarre. This house is a fortress, but the intruder somehow just wandered in.");



      popup.setContent('<b>'+"7.00 AM"+'</b>' + '<hr>');
    }

    if (x == 4)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position11);
      leclerc.bindPopup("I highly doubt Hoffmann's story of an intruder...");

      popup.setContent('<b>'+"9.00 AM"+'</b>' + '<hr>');
    }

    if (x == 5)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position10);
      leclerc.bindPopup("I know a former inspector, who works here at CERN. Maybe he can tell me something about the work Hoffmann did here.");

      popup.setContent('<b>'+"after 9.00 AM"+'</b>' + '<hr>');
    }

    if (x == 6)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position4);
      leclerc.bindPopup("Hoffmann had a mental breakdown at CERN. Now I have some questions for Mrs Hoffmann.");

      popup.setContent('<b>'+"11.00 AM"+'</b>' + '<hr>');
    }

    if (x == 7)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position4);
      leclerc.bindPopup("Why would Dr. Hoffmann buy the artwork of his wife? ...this does not make any sense at all.");

      popup.setContent('<b>'+"12.00 AM"+'</b>' + '<hr>');
    }

    if (x == 8)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position11);
      leclerc.bindPopup("I am back at my office... this case is getting more and more complicated.");

      popup.setContent('<b>'+"1.00 PM"+'</b>' + '<hr>');
    }

    if (x == 9)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position11);
      leclerc.bindPopup("...Hoffmann's partner Hugo Quarry might be worth a visit as well...");

      popup.setContent('<b>'+"1.00 - 4.00 PM"+'</b>' + '<hr>');
    }

    if (x == 10)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position3);
      leclerc.bindPopup("I am meeting up with Hugo Quarry now.");

      popup.setContent('<b>'+"4.00 PM"+'</b>' + '<hr>');
    }

    if (x == 11)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position3);
      leclerc.bindPopup("Hugo Quarry is telling me about how he and Dr. Hoffmann met for the first time.");

      popup.setContent('<b>'+"4.00 - 6.00 PM"+'</b>' + '<hr>');
    }

    if (x == 12)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position11);
      leclerc.bindPopup("I just got a call that a dead body has been discovered in the Hotel Diodati... And Hoffmann has been seen in his company. I have to get there...");

      popup.setContent('<b>'+"6.00 PM"+'</b>' + '<hr>');
    }

    if (x == 13)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position3);
      leclerc.bindPopup("Hoffmann has been gone to the industrial district of Geneva... He wants to destroy a facility full with computer hardware...");

      popup.setContent('<b>'+"around 8.30 PM"+'</b>' + '<hr>');
    }

    if (x == 14)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position9);
      leclerc.bindPopup("There is a giant explosion of the warehouse... I hope Hoffmann did not manage to commit suicide...");

      popup.setContent('<b>'+"8.45.28 PM"+'</b>' + '<hr>');
    }

    if (x == 15)
    {
      displayRoutes3(x);
      leclerc.setLatLng(position3);
      leclerc.bindPopup("I just brought Quarry back to his office and this case is now done for me... tomorrow another young officer will deal with it. I am going home now...");

      popup.setContent('<b>'+"0.00 AM"+'</b>' + '<hr>');
    }

  }

//function for displaying the current position of gabrielle
function displayPosition4(x)
  {
    if (x == 0)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("Zzzz...");

      //reset popup content in the lake
      popup.setContent('<b>'+"3.59 AM"+'</b>' + '<hr>');
    }

    if (x == 1)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("Someone attacked my husband! He needs to go to the hospital!");

      //reset popup content in the lake
      popup.setContent('<b>'+"3.59 - 5.27 AM"+'</b>' + '<hr>');
    }

    if (x == 2)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position2);
      gabrielle.bindPopup("Alex has to stay in the hospital and do all the medical checks. I do not want him to go to work today.");




      popup.setContent('<b>'+"5.27 AM"+'</b>' + '<hr>');
    }

    if (x == 3)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("I worry about my husband. I hope he will be alright today.");




      popup.setContent('<b>'+"7.00 AM"+'</b>' + '<hr>');
    }

    if (x == 4)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("I have to make some preparations for my exhibition.");

      popup.setContent('<b>'+"9.00 AM"+'</b>' + '<hr>');
    }

    if (x == 5)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("...still doing some preparations. It will be the first exhibition of my artwork. Hopefully, some people will show up...");

      popup.setContent('<b>'+"after 9.00 AM"+'</b>' + '<hr>');
    }

    if (x == 6)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position4);
      gabrielle.bindPopup("I just arrived at my exhibition. Wow! I did not expect that many people!");

      popup.setContent('<b>'+"11.00 AM"+'</b>' + '<hr>');
    }

    if (x == 7)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position4);
      gabrielle.bindPopup("Leclerc just told me that my husband had a mental breakdown at CERN and an anonymous collector has bought all my artwork. This must have been my husband... he is the only one, who is capable of this. I am so angry!");

      popup.setContent('<b>'+"12.00 AM"+'</b>' + '<hr>');
    }

    if (x == 8)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position4);
      gabrielle.bindPopup("I need some fresh air and go for a walk... why would my husband sabotage my own exhibition? Such a humiliation... ");

      popup.setContent('<b>'+"1.00 PM"+'</b>' + '<hr>');
    }

    if (x == 9)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("I am packing my things now... I want to leave this country.");

      popup.setContent('<b>'+"1.00 - 4.00 PM"+'</b>' + '<hr>');
    }

    if (x == 10)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position10);
      gabrielle.bindPopup("I am meeting here with Professor Walton. He used to work with my husband...");

      popup.setContent('<b>'+"4.00 PM"+'</b>' + '<hr>');
    }

    if (x == 11)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("I am shocked... my husband had a mental breakdown at CERN and has been going for psychological treatment afterwards. I feel sorry for him...");

      popup.setContent('<b>'+"4.00 - 6.00 PM"+'</b>' + '<hr>');
    }

    if (x == 12)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position1);
      gabrielle.bindPopup("I have packed my suitcase and want to take the last plane to London tonight... Oh! The police is here. Why are they here?");

      popup.setContent('<b>'+"6.00 PM"+'</b>' + '<hr>');
    }

    if (x == 13)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position3);
      gabrielle.bindPopup("We are on our way to Alex... I hope he is well...");

      popup.setContent('<b>'+"around 8.30 PM"+'</b>' + '<hr>');
    }

    if (x == 14)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position9);
      gabrielle.bindPopup("What is my husband doing in this warehouse? I hope he got out in time before the explosion...");

      popup.setContent('<b>'+"8.45.28 PM"+'</b>' + '<hr>');
    }

    if (x == 15)
    {
      displayRoutes4(x);
      gabrielle.setLatLng(position2);
      gabrielle.bindPopup("I am standing by my hasband now... He needs me. He has multiple fractures and second-degree burns... It is all right, darling. Everything is going to be all right now.");

      popup.setContent('<b>'+"0.00 AM"+'</b>' + '<hr>');
    }


  }


//eventlistener for slider
slider.addEventListener("input", function() {

    displayPosition1(slider.value);
    displayPosition2(slider.value);
    displayPosition3(slider.value);
    displayPosition4(slider.value);

    }, false);


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////
//create buildingsGroup
var buildingsGroup = L.layerGroup();
var buildingsGroupVernier = L.layerGroup();
var buildingsGroupZimeysa = L.layerGroup();
var buildingsGroupEauxVives = L.layerGroup();
var buildingsGroupPolice = L.layerGroup();
var buildingsGroupMamco = L.layerGroup();
var buildingsGroupHospital = L.layerGroup();
var buildingsGroupBeauRivage = L.layerGroup();




//Style buildingsGroup
var buildingsGroupStyle = {
    "color": "#ff0000",
    "weight": 1,
    "fillOpacity": 0.75
};

//load geoJSON buildings
var cernBuild = L.geoJSON(cernBuildings, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomCern);

var beauRivage =  L.geoJSON(beau_Rivage, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomBeauRivage);

var hospital =  L.geoJSON(university_hospital, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomHospital);

var villaClairemont = L.geoJSON(villa_clairemont, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoom);

var policeDepartmentGeneva = L.geoJSON(policeDepartment, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomPolice);

var mamcoGeneva = L.geoJSON(mamco, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomMamco);

var hotelDiodati = L.geoJSON(diodati, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoom);

var passarelle = L.geoJSON(bridge, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoom);

var eauxVivesBuild = L.geoJSON(eauxVivesBuildings, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomEauxVives);

var vernierBuild = L.geoJSON(vernierCentre, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomVernier);

var zimeysaBuild = L.geoJSON(zimeysaBuildings, {
  style: buildingsGroupStyle,
  onEachFeature: function (feature, layer) {
  layer.on('mouseover', function () {
    this.setStyle({
      "color": "#e60000",
      "weight": 5,
      "fillOpacity": 1
      });
    });
  layer.on('mouseout', function () {
    this.setStyle({
      "color": "#ff0000",
      "weight": 1,
      "fillOpacity": 0.75
      });
    });
  }
}).on('click', clickToZoomZimeysa);


//add features to buildingsGroup
beauRivage.addTo(buildingsGroupBeauRivage);
cernBuild.addTo(buildingsGroup);
hospital.addTo(buildingsGroupHospital);
villaClairemont.addTo(buildingsGroup);
policeDepartmentGeneva.addTo(buildingsGroupPolice);
mamcoGeneva.addTo(buildingsGroupMamco);
hotelDiodati.addTo(buildingsGroup);
passarelle.addTo(buildingsGroup);
eauxVivesBuild.addTo(buildingsGroupEauxVives);
vernierBuild.addTo(buildingsGroupVernier);
zimeysaBuild.addTo(buildingsGroupZimeysa);

////////////////////////////////////////////////////////////////////////////////////////////////////////
//text for popups of builidngsGroup
var text_cern ="<b>CERN</b>" +"<hr>"+ "<p>CERN, derived from the French name <i>Conseil européen pour la recherche nucléaire</i>, is a European research organization that operates the largest particle physics laboratory in the world.</p>"+ "<p>&nbsp;</p>"+ "<p>Before joining Hugo Quarry and founding Hoffmann Investment Technologies, Dr. Alex Hoffmann worked for CERN on the Large Hadron Collider in the nineties.</p>";
var text_beauRivage ="<b>Hotel Beau Rivage</b>" +"<hr>"+ "<p>Located right at Quai du Mont-Blanc, this hotel has remained independent since its creation and is still a family-owned business.</p>"+ "<p>&nbsp;</p>"+ "<p>Hoffmann and Quarry have here an important lunch with the investors of their VIXAL-4-project.</p>";
var text_hospital ="<b>Geneva University Hospitals</b>" +"<hr>"+ "<p>Being one of the five university hospitals of Switzerland, it is part of a tradition of excellence in medicine and science dating back hundreds of years.</p>"+ "<p>&nbsp;</p>"+ "<p>Right after being attacked in his home, Dr. Hoffmann is brought to this hospital for a medical examination.</p>";
var text_villa ="<b>Villa Clairmont</b>" +"<hr>"+ "<p>'Villa Clairmont, 79 Chemin de Ruth, 1223 Cologny, Geneva, Switzerland.'</p>"+ "<p>&nbsp;</p>"+ "<p>Home of the Hoffmann's. </p>";
var text_police ="<b>Geneva's Police Department</b>" +"<hr>"+ "<p>Situated on the Boulevard Carl-Vogt, this place is a district office of Geneva's Cantonal Police.</p>"+ "<p>&nbsp;</p>"+ "<p>It is the office of Inspector Jean-Philippe Lercler.</p>";
var text_mamco ="<b>MAMCO, Geneva</b>" +"<hr>"+ "<p>Opened in 1994 in a factory building, with 3000 m2 of exhibition space, it is the largest contemporary art museum of Switzerland</p>"+ "<p>&nbsp;</p>"+ "<p> Gabrielle Hoffmann is presenting her first exhibition about her arts in this muesum.</p>";
var text_diodati ="<b>Hotel Diodati</b>" +"<hr>"+ "<p>There is no real prove of the existence of this hotel.</p>"+ "<p>&nbsp;</p>"+ "<p>This is the place, where Hoffmann tracks down the intruder, gets into a fight with him and eventually kills him...</p>";
var text_passarelle ="<b>Passerelle de Chèvre</b>" +"<hr>"+ "<p>Passerelle de chèvres is a footbridge upstream of the Rhône after leaving Lake Geneva.</p>"+ "<p>&nbsp;</p>"+ "<p>While having a mass of evidence against him in this point of the story, Dr. Hoffmann feels tempted to jump and drop the five or six metres into the slow-moving Rhône and let himself be borne away.</p>";
var text_eauxVives ="<b>Les Eaux-Vives</b>" +"<hr>"+ "<p>Being integrated into the city of Geneva in 1930, it used to be an independent municipality before.</p>"+ "<p>&nbsp;</p>"+ "<p>It is the district, where Hoffmann Investment Technologies is situated. Unfortunately, the exact location of the organization is not mentioned.</p>";
var text_vernier ="<b>Vernier</b>" +"<hr>"+ "<p>Standing on hilly ground above the right bank of the Rhône, Vernier is a  municipality in the Canton of Geneva.</p>"+ "<p>&nbsp;</p>"+ "<p>Here in the centre of Vernier, Dr. Hoffmann used to see a psychriatrist, after his mental breakdown at CERN.</p>";
var text_zimeysa ="<b>ZIMEYSA</b>" +"<hr>"+ "<p>ZIMEYSA is a nowhere land – no history, no geography, no inhabitants; even its name is an acronym of other places: Zone Industrielle de Meyrin-Satigny.</i>"+ "<p>&nbsp;</p>"+ "<p>Deep in this industrial sector, VIXAL-4 has autonomously rented a warehouse with unauthorized hardware.</p>";


//creating popupGroup
var popupGroup = L.layerGroup();
var popupZimeysa = L.layerGroup();
var popupPolice = L.layerGroup();
var popupMamco = L.layerGroup();
var popupHospital = L.layerGroup();
var popupEauxVives = L.layerGroup();
var popupBeauRivage = L.layerGroup();


//creating popups
var popup_cern = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.240548, 6.066508])
.setContent(text_cern)
.addTo(popupGroup);

var popup_beauRivage = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.209398, 6.154000])
.setContent(text_beauRivage)
.addTo(popupBeauRivage);

var popup_hospital = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.194000, 6.155000])
.setContent(text_hospital)
.addTo(popupHospital);

var popup_villa = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.228502, 6.194523])
.setContent(text_villa)
.addTo(popupGroup);

var popup_policeDepartment = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.200500, 6.12800])
.setContent(text_police)
.addTo(popupPolice);

var popup_mamco = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.202000, 6.143004])
.setContent(text_mamco)
.addTo(popupMamco);

var popup_diodati = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.214694, 6.150253])
.setContent(text_diodati)
.addTo(popupGroup);

var popup_passarelle = L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.203556, 6.079502])
.setContent(text_passarelle)
.addTo(popupGroup);

var popup_eauxVives= L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.206509, 6.169915])
.setContent(text_eauxVives)
.addTo(popupEauxVives);

var popup_vernier= L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.218286, 6.075053])
.setContent(text_vernier)
.addTo(popupGroup);

var popup_zimeysa= L.popup({
  closeButton: false,
  autoClose: false,
  className: "custom-popup2",
  closeOnClick: false,
  autoPan:false
})
.setLatLng([46.225183, 6.082536])
.setContent(text_zimeysa)
.addTo(popupZimeysa);




////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoom

var zoomed_in = "false";

function clickToZoom(e){

  if (zoomed_in == "false")
  {
    map.setView([e.latlng.lat, e.latlng.lng], 16);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(polygonGroup);
    map.removeLayer(beauRivagePointLayer);

    //add buildingsLayer
    buildingsGroup.addTo(map);

    popupGroup.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupGroup);

    map.removeLayer(buildingsGroup);

    //add layers
    pointsLayer.addTo(map);
    policePointLayer.addTo(map);
    polygonGroup.addTo(map);
    beauRivagePointLayer.addTo(map);


    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomPolice

function clickToZoomPolice(){

  if (zoomed_in == "false")
  {
    map.setView([46.198009, 6.132331], 16);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(policePointLayer);
    map.removeLayer(polygonGroup);
    map.removeLayer(mamcoPointLayer);
    map.removeLayer(hospitalPointLayer);

    //add buildingsLayer
    buildingsGroupPolice.addTo(map);

    popupPolice.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupPolice);

    map.removeLayer(buildingsGroupPolice);

    //add layers
    pointsLayer.addTo(map);
    policePointLayer.addTo(map);
    mamcoPointLayer.addTo(map);
    polygonGroup.addTo(map);
    hospitalPointLayer.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();


    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomBeauRivage

function clickToZoomBeauRivage(){

  if (zoomed_in == "false")
  {
    map.setView([46.206265, 6.149731], 16);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(policePointLayer);
    map.removeLayer(polygonGroup);
    map.removeLayer(mamcoPointLayer);
    map.removeLayer(hospitalPointLayer);
    map.removeLayer(beauRivagePointLayer);

    //add buildingsLayer
    buildingsGroupBeauRivage.addTo(map);

    popupBeauRivage.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupBeauRivage);

    map.removeLayer(buildingsGroupBeauRivage);

    //add layers
    pointsLayer.addTo(map);
    policePointLayer.addTo(map);
    mamcoPointLayer.addTo(map);
    polygonGroup.addTo(map);
    hospitalPointLayer.addTo(map);
    beauRivagePointLayer.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomMamco

function clickToZoomMamco(){

  if (zoomed_in == "false")
  {
    map.setView([46.198984, 6.137943], 16);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(policePointLayer);
    map.removeLayer(mamcoPointLayer);
    map.removeLayer(polygonGroup);
    map.removeLayer(hospitalPointLayer);

    //add buildingsLayer
    buildingsGroupMamco.addTo(map);

    popupMamco.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupMamco);

    map.removeLayer(buildingsGroupPolice);
    map.removeLayer(buildingsGroupMamco);

    //add layers
    pointsLayer.addTo(map);
    policePointLayer.addTo(map);
    mamcoPointLayer.addTo(map);
    polygonGroup.addTo(map);
    hospitalPointLayer.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomHospital

function clickToZoomHospital(){

  if (zoomed_in == "false")
  {
    map.setView([46.190070, 6.148444], 16);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(policePointLayer);
    map.removeLayer(polygonGroup);
    map.removeLayer(mamcoPointLayer);
    map.removeLayer(hospitalPointLayer);

    //add buildingsLayer
    buildingsGroupHospital.addTo(map);

    popupHospital.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupHospital);

    map.removeLayer(buildingsGroupPolice);
    map.removeLayer(buildingsGroupHospital);

    //add layers
    pointsLayer.addTo(map);
    policePointLayer.addTo(map);
    mamcoPointLayer.addTo(map);
    polygonGroup.addTo(map);
    hospitalPointLayer.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomPoints for all point features

function clickToZoomPoints(e){

  if (zoomed_in == "false")
  {
    map.setView([e.latlng.lat, e.latlng.lng], 17);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(polygonGroup);

    //add buildingsLayer
    buildingsGroup.addTo(map);

    popupGroup.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();






    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupGroup);

    map.removeLayer(buildingsGroup);

    //add layers
    pointsLayer.addTo(map);
    polygonGroup.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();



    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomZimeysa

function clickToZoomZimeysa() {

  if (zoomed_in == "false")
  {
    map.setView([46.220043, 6.070107], 15);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(polygonGroup);

    //add buildingsLayer
    buildingsGroupZimeysa.addTo(map);

    popupZimeysa.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupZimeysa);

    map.removeLayer(buildingsGroupZimeysa);

    //add layers
    pointsLayer.addTo(map);
    polygonGroup.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomZimeysa

function clickToZoomVernier() {

  if (zoomed_in == "false")
  {
    map.setView([46.215593, 6.079824], 16);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(polygonGroup);

    //add buildingsLayer
    buildingsGroupVernier.addTo(map);

    popupGroup.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupGroup);

    map.removeLayer(buildingsGroupVernier);

    //add layers
    pointsLayer.addTo(map);
    polygonGroup.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomCern

function clickToZoomCern() {

  if (zoomed_in == "false")
  {
    map.setView([46.233527, 6.055679], 15);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(polygonGroup);

    //add buildingsLayer
    buildingsGroup.addTo(map);

    popupGroup.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupGroup);

    map.removeLayer(buildingsGroup);

    //add layers
    pointsLayer.addTo(map);
    polygonGroup.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
//function clickToZoomEauxVives

function clickToZoomEauxVives() {

  if (zoomed_in == "false")
  {
    map.setView([46.204362, 6.162428], 16);

    //remove Layers
    map.removeLayer(pointsLayer);
    map.removeLayer(polygonGroup);
    map.removeLayer(beauRivagePointLayer);

    //add buildingsLayer
    buildingsGroupEauxVives.addTo(map);

    popupEauxVives.addTo(map);

    //disable some options
    map.dragging.disable();
    map.keyboard.disable();

    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.zoomControl.disable();


    baseLayer.setOpacity(0.9);



    zoomed_in = "true";



  }else{

    map.setView([46.2120906, 6.1309204], 13);

    map.removeLayer(popupEauxVives);

    map.removeLayer(buildingsGroupEauxVives);

    //add layers
    pointsLayer.addTo(map);
    polygonGroup.addTo(map);
    beauRivagePointLayer.addTo(map);

    //enable some options again
    map.dragging.enable();
    map.keyboard.enable();

    map.doubleClickZoom.enable();
    map.scrollWheelZoom.enable();
    map.zoomControl.enable();

    baseLayer.setOpacity(0.9);

    zoomed_in = "false";

  }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////



//Slider
var slider_is_running = "false";
var IntervalID;
//var value = document.getElementById("slider").value;

function play_function(){
  /*this function starts by pressing the play button*/

  if (slider_is_running == "false")
    {
      var background = document.querySelector(".playbutton");
      background.style.backgroundImage = "url('../_images/paused-button.png')";

      intervalID = setInterval(myMethod, 500);
      //Change here the intervall of change in the slider in millisec (1000ms = 1s).

      slider_is_running = "true";

    }else {

      var background = document.querySelector(".playbutton");
      background.style.backgroundImage = "url('../_images/play-icon-white-png-8.png')";

      clearInterval(intervalID);

      slider_is_running = "false";
    }
  }


function myMethod(){

  var value = document.getElementById("slider").value;

    document.getElementById("slider").value = value - (-1);
    //Change here the step of the slider.

    //display current position of the protagonists when using play-button
    displayPosition1(document.getElementById("slider").value);
    displayPosition2(document.getElementById("slider").value);
    displayPosition3(document.getElementById("slider").value);
    displayPosition4(document.getElementById("slider").value);

    //receive data event


  }



////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

//functions for map and character choice (receiver functions)
window.addEventListener("message", receiveData, false);

function receiveData(evt) {

  var div_slider = document.getElementById("slider-main");

  if (evt.data.map.name === "Main") {

    popup.setContent(text_content);


    map.removeLayer(hoffmannGroup);
    map.removeLayer(quarryGroup);
    map.removeLayer(gabrielleGroup);
    map.removeLayer(leclercGroup);


    div_slider.style.visibility = 'hidden';

  }

  else {

    div_slider.style.visibility = 'visible';

    popup.setContent('<b>'+"3.59 AM"+'</b>' + '<hr>');


    //declare array
    var array = [ ];

    array = evt.data.char;

    if (array.length == 0) {

      map.removeLayer(hoffmannGroup);
      map.removeLayer(quarryGroup);
      map.removeLayer(gabrielleGroup);
      map.removeLayer(leclercGroup);

    }

    else if (array.length == 1) {

      if (array[0].name == "Dr. Alexander Hoffmann"){

        map.removeLayer(quarryGroup);
        map.removeLayer(gabrielleGroup);
        map.removeLayer(leclercGroup);

        map.addLayer(hoffmannGroup);
      }

      if (array[0].name == "Gabrielle Hoffmann"){

        map.removeLayer(hoffmannGroup);
        map.removeLayer(quarryGroup);
        map.removeLayer(leclercGroup);

        map.addLayer(gabrielleGroup);
      }

      if (array[0].name == "Hugo Quarry"){

        map.removeLayer(hoffmannGroup);
        map.removeLayer(gabrielleGroup);
        map.removeLayer(leclercGroup);

        map.addLayer(quarryGroup);
      }

      if (array[0].name == "Inspector Leclerc"){

        map.removeLayer(hoffmannGroup);
        map.removeLayer(gabrielleGroup);
        map.removeLayer(quarryGroup);

        map.addLayer(leclercGroup);
      }

    }

    else if (array.length == 2) {

      if (array[0].name == "Dr. Alexander Hoffmann" || array[1].name == "Dr. Alexander Hoffmann"){

        if (array[0].name != "Inspector Leclerc" && array[1].name != "Inspector Leclerc") {

          map.removeLayer(leclercGroup);
        }

        if (array[0].name != "Gabrielle Hoffmann" && array[1].name != "Gabrielle Hoffmann") {

          map.removeLayer(gabrielleGroup);
        }

        if (array[0].name != "Hugo Quarry" && array[1].name != "Hugo Quarry") {

          map.removeLayer(quarryGroup);
        }

        map.addLayer(hoffmannGroup);
      }

      if (array[0].name == "Gabrielle Hoffmann" || array[1].name == "Gabrielle Hoffmann"){

        if (array[0].name != "Inspector Leclerc" && array[1].name != "Inspector Leclerc") {

          map.removeLayer(leclercGroup);
        }

        if (array[0].name != "Dr. Alexander Hoffmann" && array[1].name != "Dr. Alexander Hoffmann") {

          map.removeLayer(hoffmannGroup);

        }

        if (array[0].name != "Hugo Quarry" && array[1].name != "Hugo Quarry") {

          map.removeLayer(quarryGroup);

        }

        map.addLayer(gabrielleGroup);
      }

      if (array[0].name == "Hugo Quarry" || array[1].name == "Hugo Quarry"){

        if (array[0].name != "Inspector Leclerc" && array[1].name != "Inspector Leclerc") {

          map.removeLayer(leclercGroup);
        }

        if (array[0].name != "Dr. Alexander Hoffmann" && array[1].name != "Dr. Alexander Hoffmann") {

          map.removeLayer(hoffmannGroup);
        }

        if (array[0].name != "Gabrielle Hoffmann" && array[1].name != "Gabrielle Hoffmann") {

          map.removeLayer(gabrielleGroup);
        }

        map.addLayer(quarryGroup);
      }

      if (array[0].name == "Inspector Leclerc" || array[1].name == "Inspector Leclerc"){

        if (array[0].name != "Hugo Quarry" && array[1].name != "Hugo Quarry") {

          map.removeLayer(quarryGroup);
        }

        if (array[0].name != "Dr. Alexander Hoffmann" && array[1].name != "Dr. Alexander Hoffmann") {

          map.removeLayer(hoffmannGroup);
        }

        if (array[0].name != "Gabrielle Hoffmann" && array[1].name != "Gabrielle Hoffmann") {

          map.removeLayer(gabrielleGroup);
        }

        map.addLayer(leclercGroup);
      }
    }

    else if (array.length == 3) {

      if (array[0].name == "Dr. Alexander Hoffmann" || array[1].name == "Dr. Alexander Hoffmann" || array[2].name == "Dr. Alexander Hoffmann"){

        if (array[0].name != "Inspector Leclerc" && array[1].name != "Inspector Leclerc" && array[2].name != "Inspector Leclerc") {
          map.removeLayer(leclercGroup);
        }

        if (array[0].name != "Hugo Quarry" && array[1].name != "Hugo Quarry" && array[2].name != "Hugo Quarry") {
          map.removeLayer(quarryGroup);
        }

        if (array[0].name != "Gabrielle Hoffmann" && array[1].name != "Gabrielle Hoffmann" && array[2].name != "Gabrielle Hoffmann") {
          map.removeLayer(gabrielleGroup);
        }

        map.addLayer(hoffmannGroup);
      }

      if (array[0].name == "Gabrielle Hoffmann" || array[1].name == "Gabrielle Hoffmann" || array[2].name == "Gabrielle Hoffmann"){

        if (array[0].name != "Inspector Leclerc" && array[1].name != "Inspector Leclerc" && array[2].name != "Inspector Leclerc") {
          map.removeLayer(leclercGroup);
        }

        if (array[0].name != "Hugo Quarry" && array[1].name != "Hugo Quarry" && array[2].name != "Hugo Quarry") {
          map.removeLayer(quarryGroup);
        }

        if (array[0].name != "Dr. Alexander Hoffmann" && array[1].name != "Dr. Alexander Hoffmann"  && array[2].name != "Dr. Alexander Hoffmann") {
          map.removeLayer(hoffmannGroup);
        }

        map.addLayer(gabrielleGroup);
      }

      if (array[0].name == "Hugo Quarry" || array[1].name == "Hugo Quarry" || array[2].name == "Hugo Quarry"){

        if (array[0].name != "Inspector Leclerc" && array[1].name != "Inspector Leclerc" && array[2].name != "Inspector Leclerc") {
          map.removeLayer(leclercGroup);
        }

        if (array[0].name != "Gabrielle Hoffmann" && array[1].name != "Gabrielle Hoffmann" && array[2].name != "Gabrielle Hoffmann") {
          map.removeLayer(gabrielleGroup);
        }

        if (array[0].name != "Dr. Alexander Hoffmann" && array[1].name != "Dr. Alexander Hoffmann"  && array[2].name != "Dr. Alexander Hoffmann") {
          map.removeLayer(hoffmannGroup);
        }

        map.addLayer(quarryGroup);
      }

      if (array[0].name == "Inspector Leclerc" || array[1].name == "Inspector Leclerc" || array[2].name == "Inspector Leclerc") {

        if (array[0].name != "Hugo Quarry" && array[1].name != "Hugo Quarry" && array[2].name != "Hugo Quarry") {
          map.removeLayer(quarryGroup);
        }

        if (array[0].name != "Gabrielle Hoffmann" && array[1].name != "Gabrielle Hoffmann" && array[2].name != "Gabrielle Hoffmann") {
          map.removeLayer(gabrielleGroup);
        }

        if (array[0].name != "Dr. Alexander Hoffmann" && array[1].name != "Dr. Alexander Hoffmann"  && array[2].name != "Dr. Alexander Hoffmann") {
          map.removeLayer(hoffmannGroup);
        }

        map.addLayer(leclercGroup);
      }
    }

    else if (array.length == 4) {

      if (array[0].name == "Dr. Alexander Hoffmann" || array[1].name == "Dr. Alexander Hoffmann" || array[2].name == "Dr. Alexander Hoffmann" || array[3].name == "Dr. Alexander Hoffmann"){

        map.addLayer(hoffmannGroup);
      }

      if (array[0].name == "Gabrielle Hoffmann" || array[1].name == "Gabrielle Hoffmann" || array[2].name == "Gabrielle Hoffmann" || array[3].name == "Gabrielle Hoffmann"){

        map.addLayer(gabrielleGroup);
      }

      if (array[0].name == "Hugo Quarry" || array[1].name == "Hugo Quarry" || array[2].name == "Hugo Quarry" || array[3].name == "Hugo Quarry"){

        map.addLayer(quarryGroup);
      }

      if (array[0].name == "Inspector Leclerc" || array[1].name == "Inspector Leclerc" || array[2].name == "Inspector Leclerc" || array[3].name == "Inspector Leclerc"){

        map.addLayer(leclercGroup);

      }
    }

  }
}
