var locations;
var slider;
var infowindow;
var map;
var visibleFalse = { visible: false };
var visibleTrue = { visible: true};
var currLocations;
var slider_is_running = "false";
var slider = document.getElementById('slider');
var currChapter = 1;
var jsonData;




function mymap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 47.36667, lng: 8.55},
        streetViewControl: false,
        mapTypeControl: false
    });

    infowindow = new google.maps.InfoWindow();


    // For each chapter we create a new jsonData
    var jsonData1 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 1, "Mood": "N", "Chapter": 1, "Description": "Pfaeffikon Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.786677, 47.366167]}
            }, {
                "type": "Feature",
                "properties": {"ID": 2, "Mood": "N", "Chapter": 1, "Description": "Dietlikon Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.619393, 47.420082]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 1,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 4,
                    "Mood": "B",
                    "Chapter": 1,
                    "Description": "Archie's home at Niederdorf district"
                },
                "geometry": {"type": "Point", "coordinates": [8.543825, 47.374536]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 5,
                    "Mood": "N",
                    "Chapter": 1,
                    "Description": "Victors primary school in Dietlikon"
                },
                "geometry": {"type": "Point", "coordinates": [8.617131, 47.42526]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 1,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }


        ]
    };
    var jsonData2 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 4,
                    "Mood": "G",
                    "Chapter": 2,
                    "Description": "Archie's home at Niederdorf district"
                },
                "geometry": {"type": "Point", "coordinates": [8.543825, 47.374536]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 2,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 2,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 2,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 2,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "N",
                    "Chapter": 2,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {"ID": 9, "Mood": "N", "Chapter": 2, "Description": "Migros Klubschule in Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.542587, 47.4105]}
            }, {
                "type": "Feature",
                "properties": {"ID": 10, "Mood": "N", "Chapter": 2, "Description": "Tramhaltestelle Sternen Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.546194, 47.40984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 11, "Mood": "N", "Chapter": 2, "Description": "Zuerich Central"},
                "geometry": {"type": "Point", "coordinates": [8.543911, 47.377007]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "N",
                    "Chapter": 2,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }

        ]
    };
    var jsonData3 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 3,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "N",
                    "Chapter": 3,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 3,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 3,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 3,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 3,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 3,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 12,
                    "Mood": "G",
                    "Chapter": 3,
                    "Description": "Coop Dietlikon at Industriestrasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.618608, 47.413024]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 3,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData4 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 9, "Mood": "B", "Chapter": 4, "Description": "Migros Klubschule in Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.542587, 47.4105]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 4,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 13, "Mood": "N", "Chapter": 4, "Description": "Stadelhofen Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.548439, 47.366588]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "N",
                    "Chapter": 4,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 4,
                    "Mood": "N",
                    "Chapter": 4,
                    "Description": "Archie's home at Niederdorf district"
                },
                "geometry": {"type": "Point", "coordinates": [8.543825, 47.374536]}
            }
        ]
    };
    var jsonData5 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 15, "Mood": "G", "Chapter": 5, "Description": "Home of Gilbert's"},
                "geometry": {"type": "Point", "coordinates": [8.717874, 47.348275]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 5,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 9, "Mood": "N", "Chapter": 5, "Description": "Migros Klubschule in Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.542587, 47.4105]}
            }, {
                "type": "Feature",
                "properties": {"ID": 13, "Mood": "B", "Chapter": 5, "Description": "Stadelhofen Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.548439, 47.366588]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 4,
                    "Mood": "B",
                    "Chapter": 5,
                    "Description": "Archie's home at Niederdorf district"
                },
                "geometry": {"type": "Point", "coordinates": [8.543825, 47.374536]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 5,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 15, "Mood": "B", "Chapter": 5, "Description": "Home of Gilbert's"},
                "geometry": {"type": "Point", "coordinates": [8.717874, 47.348275]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 5,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {"ID": 7, "Mood": "B", "Chapter": 5, "Description": "Ursula's home at Klotenerstrasse"},
                "geometry": {"type": "Point", "coordinates": [8.616412, 47.428717]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 5,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData6 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 2, "Mood": "G", "Chapter": 6, "Description": "Dietlikon Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.619393, 47.420082]}
            }, {
                "type": "Feature",
                "properties": {"ID": 16, "Mood": "G", "Chapter": 6, "Description": "Home of Brunos sister Daniela"},
                "geometry": {"type": "Point", "coordinates": [7.919628, 47.546132]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 6,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData7 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 16, "Mood": "G", "Chapter": 7, "Description": "Home of Brunos sister Daniela"},
                "geometry": {"type": "Point", "coordinates": [7.919628, 47.546132]}
            }, {
                "type": "Feature",
                "properties": {"ID": 2, "Mood": "G", "Chapter": 7, "Description": "Dietlikon Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.619393, 47.420082]}
            }
        ]
    };
    var jsonData8 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 18, "Mood": "G", "Chapter": 8, "Description": "Kinderkrippe of Charles"},
                "geometry": {"type": "Point", "coordinates": [8.623014, 47.415192]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 8,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 8,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }
        ]
    };
    var jsonData9 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 9,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 4,
                    "Mood": "B",
                    "Chapter": 9,
                    "Description": "Archie's home at Niederdorf district"
                },
                "geometry": {"type": "Point", "coordinates": [8.543825, 47.374536]}
            }, {
                "type": "Feature",
                "properties": {"ID": 7, "Mood": "B", "Chapter": 9, "Description": "Ursula's home at Klotenerstrasse"},
                "geometry": {"type": "Point", "coordinates": [8.616412, 47.428717]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 9,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 5,
                    "Mood": "B",
                    "Chapter": 9,
                    "Description": "Victors primary school in Dietlikon"
                },
                "geometry": {"type": "Point", "coordinates": [8.617131, 47.42526]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 9,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }
        ]
    };
    var jsonData10 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 10,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 20,
                    "Mood": "B",
                    "Chapter": 10,
                    "Description": "Edithand Otto Hammer's home in Erlenbach"
                },
                "geometry": {"type": "Point", "coordinates": [8.597147, 47.305299]}
            }
        ]
    };
    var jsonData11 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 20,
                    "Mood": "B",
                    "Chapter": 11,
                    "Description": "Edithand Otto Hammer's home in Erlenbach"
                },
                "geometry": {"type": "Point", "coordinates": [8.597147, 47.305299]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "G",
                    "Chapter": 11,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }
        ]
    };
    var jsonData12 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 12,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 9, "Mood": "N", "Chapter": 12, "Description": "Migros Klubschule in Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.542587, 47.4105]}
            }
        ]
    };
    var jsonData13 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "G",
                    "Chapter": 13,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {"ID": 9, "Mood": "B", "Chapter": 13, "Description": "Migros Klubschule in Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.542587, 47.4105]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "N",
                    "Chapter": 13,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 21, "Mood": "G", "Chapter": 13, "Description": "Buerkliplatz"},
                "geometry": {"type": "Point", "coordinates": [8.541016, 47.366348]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "G",
                    "Chapter": 13,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }
        ]
    };
    var jsonData14 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 14,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 14,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData15 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "G",
                    "Chapter": 15,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {"ID": 22, "Mood": "G", "Chapter": 15, "Description": "Restaurant Altes Kloesterli"},
                "geometry": {"type": "Point", "coordinates": [8.575487, 47.387084]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 15,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 9, "Mood": "N", "Chapter": 15, "Description": "Migros Klubschule in Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.542587, 47.4105]}
            }, {
                "type": "Feature",
                "properties": {"ID": 23, "Mood": "N", "Chapter": 15, "Description": "Zoo Zuerich"},
                "geometry": {"type": "Point", "coordinates": [8.574531, 47.387023]}
            }
        ]
    };
    var jsonData16 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 13, "Mood": "B", "Chapter": 16, "Description": "Stadelhofen Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.548439, 47.366588]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 16,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }
        ]
    };
    var jsonData17 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "B",
                    "Chapter": 17,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {"ID": 9, "Mood": "B", "Chapter": 17, "Description": "Migros Klubschule in Oerlikon"},
                "geometry": {"type": "Point", "coordinates": [8.542587, 47.4105]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 4,
                    "Mood": "N",
                    "Chapter": 17,
                    "Description": "Archie's home at Niederdorf district"
                },
                "geometry": {"type": "Point", "coordinates": [8.543825, 47.374536]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 8,
                    "Mood": "N",
                    "Chapter": 17,
                    "Description": "Home of the family Benz at Rosenweg"
                },
                "geometry": {"type": "Point", "coordinates": [8.615954, 47.426658]}
            }, {
                "type": "Feature",
                "properties": {"ID": 24, "Mood": "N", "Chapter": 17, "Description": "Cafe Muenz at Bahnhofsstrasse"},
                "geometry": {"type": "Point", "coordinates": [8.5398, 47.368316]}
            }, {
                "type": "Feature",
                "properties": {"ID": 25, "Mood": "N", "Chapter": 17, "Description": "Hotel Allegra in Kloten"},
                "geometry": {"type": "Point", "coordinates": [8.584806, 47.448578]}
            }
        ]
    };
    var jsonData18 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 18,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData19 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 19,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData20 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 20,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData21 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {"ID": 7, "Mood": "B", "Chapter": 21, "Description": "Ursula's home at Klotenerstrasse"},
                "geometry": {"type": "Point", "coordinates": [8.616412, 47.428717]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 21,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData22 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 22,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData23 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 23,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }
        ]
    };
    var jsonData24 = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 24,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {"ID": 26, "Mood": "B", "Chapter": 24, "Description": "Bahnhofsstrasse"},
                "geometry": {"type": "Point", "coordinates": [8.539438, 47.37605]}
            }, {
                "type": "Feature",
                "properties": {"ID": 27, "Mood": "B", "Chapter": 24, "Description": "Paradeplatz"},
                "geometry": {"type": "Point", "coordinates": [8.538923, 47.369717]}
            }, {
                "type": "Feature",
                "properties": {"ID": 28, "Mood": "B", "Chapter": 24, "Description": "Zuerichhorn"},
                "geometry": {"type": "Point", "coordinates": [8.551878, 47.353509]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 3,
                    "Mood": "B",
                    "Chapter": 24,
                    "Description": "Doktor Messerli's Office at Trittligasse"
                },
                "geometry": {"type": "Point", "coordinates": [8.546402, 47.36984]}
            }, {
                "type": "Feature",
                "properties": {
                    "ID": 4,
                    "Mood": "B",
                    "Chapter": 24,
                    "Description": "Archie's home at Niederdorf district"
                },
                "geometry": {"type": "Point", "coordinates": [8.543825, 47.374536]}
            }, {
                "type": "Feature",
                "properties": {"ID": 29, "Mood": "B", "Chapter": 24, "Description": "St. Andrew's church"},
                "geometry": {"type": "Point", "coordinates": [8.549477, 47.368671]}
            }, {
                "type": "Feature",
                "properties": {"ID": 30, "Mood": "B", "Chapter": 24, "Description": "Quaibruecke"},
                "geometry": {"type": "Point", "coordinates": [8.543078, 47.366825]}
            }, {
                "type": "Feature",
                "properties": {"ID": 31, "Mood": "B", "Chapter": 24, "Description": "Wipkingen Bahnhof"},
                "geometry": {"type": "Point", "coordinates": [8.529332, 47.393077]}
            }
        ]
    };



    // Put all json files to one array
    jsonData = [jsonData1, jsonData2, jsonData3, jsonData4, jsonData5, jsonData6, jsonData7, jsonData8, jsonData9, jsonData10, jsonData11, jsonData12, jsonData13, jsonData14, jsonData15, jsonData16, jsonData17, jsonData18, jsonData19, jsonData20, jsonData21, jsonData22, jsonData23, jsonData24];

    // Enable first chapter in the beginning
    showChapter(currChapter);


}


function showChapter(chapter) {

    if (currLocations) {
        currLocations.setMap(null);
    }
    currLocations = new google.maps.Data();
    currLocations.addGeoJson(jsonData[chapter - 1]);

    // set style and map of locations and add geojson data
    currLocations.setStyle({
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 30,
            strokeWeight: 4,
            strokeColor: 'blue',
            fillColor: 'blue',
            fillOpacity: 0.4,


            visible: true
        }
    });
    currLocations.setMap(map);


    currLocations.forEach(function (feature) {


        if (feature.getProperty('Mood') == 'B'){
            currLocations.overrideStyle(feature, {icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 30,
                    strokeWeight: 4,
                    strokeColor: 'red',
                    fillColor: 'red',
                    fillOpacity: 0.4,
                    visible: true
                }});
        } else if (feature.getProperty('Mood') == 'G'){
            currLocations.overrideStyle(feature, {icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 30,
                    strokeWeight: 4,
                    strokeColor: 'green',
                    fillColor: 'green',
                    fillOpacity: 0.4,
                    visible: true
                }});
        }

    });

    // Infowindow pops up with a short description when location is clicked.
    currLocations.addListener('click', function (event) {
        infowindow.setContent('<h4>' + event.feature.getProperty('Description') + '</h4>');
        infowindow.setPosition(event.feature.getGeometry().get());
        infowindow.open(map);


    });



}

//Slider
function play_function(){
    /*this function starts by pressing the play button*/

    if (slider_is_running == "false")
    {
        var background = document.querySelector(".playbutton");
        background.style.backgroundImage = "url('../_images/paused-button.png')";

        intervalID = setInterval(changeValue, 1000);
        //Change here the intervall of change in the slider in millisec (1000ms = 1s).

        slider_is_running = "true";

    }else {

        var background = document.querySelector(".playbutton");
        background.style.backgroundImage = "url('../_images/play-icon-white-png-8.png')";

        clearInterval(intervalID);

        slider_is_running = "false";
    }
}

//Slider
function changeValue() {
    let value = document.getElementById("slider").value;
    if (value == document.getElementById("slider").max) {
        document.querySelector(".playbutton").style.backgroundImage = "url('../_images/play-icon-white-png-8.png')";
        clearInterval(intervalID);
    } else {
        document.getElementById("slider").value = value - (-1)
        currChapter = value;

        showChapter(currChapter)
    }



}

