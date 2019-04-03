var accessToken =
  "pk.eyJ1IjoiZHB5em8wbyIsImEiOiJjamZiZ2Zpd3YwMnN6Mnlwa2VsODIydHlyIn0.3scIUef-Qqgy7LSFYUinfg";
var attribution =
  'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';

var map = L.map("map").setView([41.3, 18.5], 5);
map.zoomControl.setPosition("bottomright");

var baseMap = L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: attribution,
    id: "mapbox.light",
    accessToken: accessToken
  }
).addTo(map);

var minimap = L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    maxZoom: 10,
    id: "mapbox.light",
    accessToken: accessToken
  }
);

var miniMap = new L.Control.MiniMap(minimap, {
  toggleDisplay: true,
  position: "topright"
}).addTo(map);

var home = L.control({
  position: "bottomright"
});

home.onAdd = function () {
  var div = L.DomUtil.create("div", "homebtn");
  div.innerHTML = `<i class="fa fa-home"></i>`;
  div.addEventListener("click", () => {
    map.setView([41.3, 18.5], 5);
    info.addTo(map);
    cairoMarker.remove();
    zurichMarker.remove();
    UKMarker.remove();
  });
  return div;
};

home.addTo(map);

var info = L.control({
  position: "topleft"
});

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (props) {
  this._div.innerHTML =
    (props ?
      "<h3>" +
      props.name +
      "</h3>" +
      props.desc +
      "<br><br>Click for more details..." :
      "<b>Hover over a place<b>");
};

// info.addTo(map);

var sceneMarkerOptions = {
  radius: 10,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

var sceneGeojson = L.geoJson(scenes, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, sceneMarkerOptions);
  },
  onEachFeature: function (feature, layer) {
    layer.on({
      mouseover: function (e) {
        var layer = e.target;
        info.update(layer.feature.properties);
      },
      mouseout: function () {
        info.update();
      },
      click: function (e) {
        map.setView(e.target.getLatLng(), 16);
        e.target.bindPopup(feature.properties.name, {
          closeButton: false,
          autoClose: false,
          offset: [0, -10]
        }).openPopup();
        info.remove();
        switch (feature.id) {
          case "1":
            cairoMarker.addTo(map);
            break;
          case "2":
            zurichMarker.addTo(map);
          case "3":
            UKMarker.addTo(map);
          default:
            break;
        }
      }
    });
  }
});


var personIcon = L.Icon.extend({
  options: {
    iconSize: [80, 80],
    popupAnchor: [0, -50]
  }
});

var pineIcon = new personIcon({
    iconUrl: "./img/pine.png"
  }),
  sophieIcon = new personIcon({
    iconUrl: "./img/sophie.png"
  }),
  hamidIcon = new personIcon({
    iconUrl: "./img/hamid.png"
  }),
  roperIcon = new personIcon({
    iconUrl: "./img/roper.png"
  }),
  burrIcon = new personIcon({
    iconUrl: "./img/burr.png"
  }),
  jedIcon = new personIcon({
    iconUrl: "./img/jed.png"
  }),
  corkoranIcon = new personIcon({
    iconUrl: "./img/corkoran.png"
  });

var pineMarker = L.marker([30.0539, 31.2252], {
  icon: pineIcon
});

var sophieMarker = L.marker([30.0479, 31.2251], {
  icon: sophieIcon
});

var hamidMarker = L.marker([30.0478, 31.2376], {
  icon: hamidIcon
});

var roperMarker = L.marker([30.0538, 31.2374], {
  icon: roperIcon
});

var pineContent = "Hello, I'm Jonathan Pine!<br><br>I'm the night manager of this hotel. Sophie told me about Roper's secret but I betrayed her. I sent the documents to British intelligence secretly. It's actually me who killed sophie! I must avenge for her!";

var sophieContent = "Hello, I'm Sophie!<br><br>I'm the mistress of Freddie Hamid, who is the owner of the hotel. Roper is the worst man in the world! I have the incriminating evidence of his business.";

var hamidContent = "Hello, I'm Freddie Hamid!<br><br>My mistress fell in love with my night manager but I don't even know. How stupid am I!";

var roperContent = "Hello, I'm the evil Roper!<br><br>I run business with arms and drugs. Hamid is my important partner. Sophie leaked my secret and I cannot let her alive."

var cairoMarkerGroup = {
  markers: [pineMarker, sophieMarker, hamidMarker, roperMarker],
  content: [pineContent, sophieContent, hamidContent, roperContent]
};

var cairoMarker = L.layerGroup(cairoMarkerGroup.markers);

cairoMarkerGroup.markers.forEach(function (elem, idx) {
  elem.on({
    mouseover: function (e) {
      e.target.bindPopup(cairoMarkerGroup.content[idx], {
        closeButton: false
      }).openPopup()
    },
    mouseout: function (e) {
      e.target.closePopup();
    }
  });
});

var pineMarkerZurich = L.marker([47.3765, 8.5319], {
  icon: pineIcon
});

var roperMarkerZurich = L.marker([47.3761, 8.5453], {
  icon: roperIcon
});

var jedMarkerZurich = L.marker([47.3732, 8.5312], {
  icon: jedIcon
});

var burrMarkerZurich = L.marker([47.3717, 8.5386], {
  icon: burrIcon
});

var corkoranMarkerZurich = L.marker([47.3727, 8.5464], {
  icon: corkoranIcon
});

var pineContentZurich = "Hi, I'm Pine, glad to see you again!<br><br>I joined a secret mission by Burr to infiltrate Roper's criminal empire. I won the trust of Roper by rescuing his son. However, due to the corruption inside British intelligence, the mission failed in the end. I was captured and tortured by Roper.";

var roperContentZurich = "Hi, I'm Roper, glad to see you again!<br><br>I should have noticed that Pine was a spy!";

var jedContentZurich = "Hello, I'm Jed, Roper's mistress. <br><br>I fell in love with Pine. I want to go with him!";

var burrContentZurich = "Hello, I'm Leonard Burr.<br><br>I'm an ex-SIS Chief. I and my servant set up a small counter arms proliferation office and are planning an elaborate sting operation against Roper. Unfortunately, the mission failed. I have to sacrifice my operation to save Pine.";

var corkoranContentZurich = "Hello, I'm Corkoran, Roper's front man.<br><br>I don't believe in Pine, he must be a spy!";

var zurichMarkerGroup = {
  markers: [pineMarkerZurich, roperMarkerZurich, jedMarkerZurich, burrMarkerZurich, corkoranMarkerZurich],
  content: [pineContentZurich, roperContentZurich, jedContentZurich, burrContentZurich, corkoranContentZurich]
};

var zurichMarker = L.layerGroup(zurichMarkerGroup.markers);

zurichMarkerGroup.markers.forEach(function (elem, idx) {
  elem.on({
    mouseover: function (e) {
      e.target.bindPopup(zurichMarkerGroup.content[idx], {
        closeButton: false
      }).openPopup()
    },
    mouseout: function (e) {
      e.target.closePopup();
    }
  });
});

var pineMarkerUK = L.marker([50.0650, -5.7245], {
  icon: pineIcon
});

var jedMarkerUK = L.marker([50.0650, -5.7204], {
  icon: jedIcon
});

var heartMarker = L.marker([50.0650, -5.7225], {
  icon: new personIcon({
    iconUrl: "./img/heart.png"
  })
});

heartMarker.on({
  mouseover: function () {
    this.bindPopup("Pine and Jed are rescued, and live a happy life in an isolated cottage near Land's End.", {
      closeButton: false
    }).openPopup()
  },
  mouseout: function () {
    this.closePopup();
  }
});

var pineContentUK = "";

var jedContentUK = "";

var UKMarkerGroup = {
  markers: [pineMarkerUK, jedMarkerUK],
  content: [pineContentUK, jedContentUK]
};

UKMarkerGroup.markers.push(heartMarker)

var UKMarker = L.layerGroup(UKMarkerGroup.markers);


window.addEventListener("message", receiveData, false);

function receiveData(evt) {
  if (evt.data.map.name === "Interactive Map") {
    info.addTo(map);
    sceneGeojson.addTo(map);
  } else {
    sceneGeojson.remove();
    cairoMarker.remove();
    zurichMarker.remove();
    UKMarker.remove();
    info.remove();
  }
}