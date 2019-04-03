var map;
var markerArray = [];
var interval;
var time = 0;
var isPlaying = false;
var playButton = document.getElementById("play-button");
var innerSlider = document.getElementById("inner-slider");

function hideMarker(marker) {
  marker.setMap(null);
}

function showMarker(marker) {
  marker.setMap(map);
}

function createPath(cordinatesArray, color) {
  const flightPath = new google.maps.Polyline({
    path: cordinatesArray,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 0.7,
    strokeWeight: 4
  });

  flightPath.setMap(map);
}

function createMarker(lat, lng, name, description, eventId, sign) {
  var marker = {
    marker: null,
    infoWindow: null,
    isOpen: false,
    eventId: -1
  };

  marker.marker = new google.maps.Marker({
    position: { lat: lat, lng: lng },
    map: null,
    label: sign
  });

  marker.infoWindow = new google.maps.InfoWindow({
    content: "<div><h4>" + name + "</h4><p>" + description + "</p></div>"
  });

  marker.marker.addListener("click", function() {
    if (!marker.isOpen) {
      marker.infoWindow.open(map, marker.marker);
    } else {
      marker.infoWindow.close(map, marker.marker);
    }

    marker.isOpen = !marker.isOpen;
  });

  marker.eventId = eventId;

  return marker;
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.812666, lng: 6.473413 },
    zoom: 6,
    mapTypeControl: false
  });

  eventsLine.map((data, i) => {
    const newMarker = createMarker(
      data.lat,
      data.lng,
      characters[data.characterId].name,
      data.description,
      data.id,
      characters[data.characterId].sign
    );
    markerArray.push(newMarker);
  });

  characters.forEach(character => {
    let coordinates = [];

    for (let i = 0; i < character.events.length; i++) {
      coordinates.push({
        lat: eventsLine[character.events[i]].lat,
        lng: eventsLine[character.events[i]].lng
      });
    }

    createPath(coordinates, character.color);
  });
}

function play() {
  if (!isPlaying) {
    interval = setInterval(render, 20);
    isPlaying = true;
    playButton.innerText = "pause";
  } else {
    pause();
  }
}

function pause() {
  clearInterval(interval);
  isPlaying = false;
  playButton.innerText = "play";
}

function reset() {
  time = 0;
  isPlaying = false;
  clearInterval(interval);
  innerSlider.style.width = time.toString().concat("px");
  playButton.innerText = "play";
  markerArray.forEach(marker => hideMarker(marker.marker));
}

function render() {
  if (time < 250) {
    time += 1;

    eventsLine.forEach(event => {
      if (event.step === time) {
        if (!markerArray[event.id].marker.getMap()) {
          showMarker(markerArray[event.id].marker);
        }
      }
    });

    innerSlider.style.width = (time * 2).toString().concat("px");
  } else {
    pause();
  }
}
