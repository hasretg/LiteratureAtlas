var map;
var locations;
var infowindow;
var styleHidden = { visible: false };
var slider = document.getElementById('slider');
var slider_is_running = "false";
var IntervalID;
var path;
var storyPath;


// map function
function map1() {

    // properties of the first map
    var mapProp1 = {
        center: new google.maps.LatLng(47.372135, 8.527377),
        zoom: 14, maxZoom: 20, minZoom: 3,
        disableDefaultUI: true,
        styles: [{ "elementType": "geometry", "stylers": [{ "color": "#ebe3cd" }] }, { "elementType": "labels.text.fill", "stylers": [{ "color": "#523735" }] }, { "elementType": "labels.text.stroke", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "administrative", "elementType": "geometry", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#c9b2a6" }] }, { "featureType": "administrative.land_parcel", "elementType": "geometry.stroke", "stylers": [{ "color": "#dcd2be" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative.land_parcel", "elementType": "labels.text.fill", "stylers": [{ "color": "#ae9e90" }] }, { "featureType": "landscape.natural", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "poi", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "poi", "elementType": "labels.text.fill", "stylers": [{ "color": "#93817c" }] }, { "featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{ "color": "#a5b076" }] }, { "featureType": "poi.park", "elementType": "labels.text.fill", "stylers": [{ "color": "#447530" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#f5f1e6" }] }, { "featureType": "road", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#fdfcf8" }] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [{ "color": "#f8c967" }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#e9bc62" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry", "stylers": [{ "color": "#e98d58" }] }, { "featureType": "road.highway.controlled_access", "elementType": "geometry.stroke", "stylers": [{ "color": "#db8555" }] }, { "featureType": "road.local", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road.local", "elementType": "labels.text.fill", "stylers": [{ "color": "#806b63" }] }, { "featureType": "transit", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "transit.line", "elementType": "labels.text.fill", "stylers": [{ "color": "#8f7d77" }] }, { "featureType": "transit.line", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ebe3cd" }] }, { "featureType": "transit.station", "elementType": "geometry", "stylers": [{ "color": "#dfd2ae" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#b9d3c2" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#92998d" }] }]
    };

    // setting up variables (map, infowindow, slider, locations, styles)
    map = new google.maps.Map(document.getElementById("w_map1"), mapProp1);
    infowindow = new google.maps.InfoWindow();
    locations = new google.maps.Data();
    var nextLocationButton = document.getElementById('nextLocation_hiddenButton');
    var currantLocationID;
    path = new google.maps.MVCArray;
    storyPath = new google.maps.Polyline({
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    // geojson data
    var locationsObjects = {
        "type": "FeatureCollection",
        "name": "data_original",
        "features": [
            { "type": "Feature", "properties": { "WordNumber": 1186, "Location": "Zürich", "TextExample": "Da Zürichs jüdische Gemeinden von überschaubarem Charakter sind", "Emotion": 3, "id": 1 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 1190, "Location": "Bern", "TextExample": "Sie schickte mich nach Bern, nach Basel, nach St. Gallen und nach Lugano", "id": 2 }, "geometry": { "type": "Point", "coordinates": [7.447447, 46.947974] } },
            { "type": "Feature", "properties": { "WordNumber": 1195, "Location": "Basel", "TextExample": "Sie schickte mich nach Bern, nach Basel, nach St. Gallen und nach Lugano", "id": 3 }, "geometry": { "type": "Point", "coordinates": [7.588576, 47.559599] } },
            { "type": "Feature", "properties": { "WordNumber": 1199, "Location": "St. Gallen", "TextExample": "Sie schickte mich nach Bern, nach Basel, nach St. Gallen und nach Lugano", "id": 4 }, "geometry": { "type": "Point", "coordinates": [9.376717, 47.424482] } },
            { "type": "Feature", "properties": { "WordNumber": 1473, "Location": "Lugano", "TextExample": "Sie schickte mich nach Bern, nach Basel, nach St. Gallen und nach Lugano", "id": 5 }, "geometry": { "type": "Point", "coordinates": [8.951052, 46.003678] } },
            { "type": "Feature", "properties": { "WordNumber": 1477, "Location": "Synagoge IRGZ, Freigutstrasse 37, Zürich", "TextExample": "»Kejn funk!«, rief die mame. »Was brauchst du a funk! Du brauchst a froj!«", "id": 6 }, "geometry": { "type": "Point", "coordinates": [8.529975, 47.368829] } },
            { "type": "Feature", "properties": { "WordNumber": 1583, "Location": "Freigutstrasse", "TextExample": "Wie sejer dem ihrem Dafürhalten nach so war, demons-trierte sie am darauffolgenden schabbes in unserer Synagoge an der Freigutstraße.", "id": 7 }, "geometry": { "type": "Point", "coordinates": [8.530952, 47.368338] } },
            { "type": "Feature", "properties": { "WordNumber": 2007, "Location": "Basel", "TextExample": "So brachte mich meine mame einige teg schpejter unter einem Vorwand mit dem ojto nach Basel.", "id": 8 }, "geometry": { "type": "Point", "coordinates": [7.588576, 47.559599] } },
            { "type": "Feature", "properties": { "WordNumber": 2060, "Location": "Polen", "TextExample": "»Von Mimi Eisengeist aus Polen«, antwortete ich brav.", "id": 9 }, "geometry": { "type": "Point", "coordinates": [19.145136, 51.919438] } },
            { "type": "Feature", "properties": { "WordNumber": 2091, "Location": "Rheinfelden", "TextExample": "Bis Rheinfelden redeten wir kein Wort.", "id": 10 }, "geometry": { "type": "Point", "coordinates": [7.768779, 47.589647] } },
            { "type": "Feature", "properties": { "WordNumber": 2116, "Location": "Stein-Säckingen", "TextExample": "Schweigen bis zur Ausfahrt Stein-Säckingen, dort von mir gebrochen: »Und überhaupt, ich kann das doch auch selbst organisieren.«", "id": 11 }, "geometry": { "type": "Point", "coordinates": [7.955177, 47.544055] } },
            { "type": "Feature", "properties": { "WordNumber": 2126, "Location": "Frick, Schweiz", "TextExample": "»Mame?«, probierte ich es nach der Ortschaft Frick wieder.  Blik steif geradeaus.", "id": 12 }, "geometry": { "type": "Point", "coordinates": [8.018673, 47.50852] } },
            { "type": "Feature", "properties": { "WordNumber": 2130, "Location": "Zürich", "TextExample": "Erst als wir in Zürich in die Hopfenstraße einbogen, sagte sie wieder etwas", "id": 13 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 2143, "Location": "Mottis Zuhause, Hopfenstrasse, Zürich", "TextExample": "Erst als wir in Zürich in die Hopfenstraße einbogen, sagte sie wieder etwas", "id": 14 }, "geometry": { "type": "Point", "coordinates": [8.520572, 47.365182] } },
            { "type": "Feature", "properties": { "WordNumber": 2335, "Location": "Basel", "TextExample": "»Übermorgen fahren wir noch amol nach Basel.«", "id": 15 }, "geometry": { "type": "Point", "coordinates": [7.588576, 47.559599] } },
            { "type": "Feature", "properties": { "WordNumber": 3473, "Location": "vermutlich Ma'adan Bakery, Schimmelstrasse 1, Zürich", "TextExample": "kugelrunder mentsch mit glänziger Glatze und schmutziger briln und hatte stets eine große Papiertüte vom Koscherbäcker mit dabei", "id": 16 }, "geometry": { "type": "Point", "coordinates": [8.525503, 47.369496] } },
            { "type": "Feature", "properties": { "WordNumber": 4872, "Location": "Israel", "TextExample": "von ihrer letzten Reise nach Israel und den Besuchen bei ihren vielen Verwandten", "id": 17 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 4975, "Location": "Berg Hermon, Israel", "TextExample": "Ich trank dazu ordentlich Wein vom Berg Hermon.", "id": 18 }, "geometry": { "type": "Point", "coordinates": [35.857026, 33.416162] } },
            { "type": "Feature", "properties": { "WordNumber": 5007, "Location": "Universität Zürich", "TextExample": "In keiner Weise ahnend, was mich dort erwarten würde, radelte ich morgens fröhlich zur uniwersitejt", "id": 19 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 6346, "Location": "Universität Zürich", "TextExample": "Es war ein wolkenloser, aber ausgesprochen kalter tog, und als ich die Uni betrat, beschlug meine briln sofort.", "id": 20 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 6582, "Location": "Israel", "TextExample": "und so ging mein tate, der einen wichtigen Anruf aus Israel erwartete, schon amol voraus.", "id": 21 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 6586, "Location": "Uetlibergstrasse", "TextExample": "Man grüßte sich, schwatzte und lachte,", "id": 22 }, "geometry": { "type": "Point", "coordinates": [8.514508, 47.357706] } },
            { "type": "Feature", "properties": { "WordNumber": 6590, "Location": "Schimmelstrasse", "TextExample": "und der fromme Strom von der Uetlibergstraße über die Schimmelstraße hin zur Freigutstraße wurde immer dichter.", "id": 23 }, "geometry": { "type": "Point", "coordinates": [8.524831, 47.370336] } },
            { "type": "Feature", "properties": { "WordNumber": 6804, "Location": "Freigutstrasse", "TextExample": "und der fromme Strom von der Uetlibergstraße über die Schimmelstraße hin zur Freigutstraße wurde immer dichter.", "id": 24 }, "geometry": { "type": "Point", "coordinates": [8.530952, 47.368338] } },
            { "type": "Feature", "properties": { "WordNumber": 6812, "Location": "Zürich", "TextExample": "wie alle jüdisch pilotierten Previas in Zürich", "id": 25 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 7316, "Location": "Wiedikon", "TextExample": "Er war weinrot, hatte Baujahr 2000 und stammte von der gleichen Garage in Wiedikon.", "id": 26 }, "geometry": { "type": "Point", "coordinates": [8.509246, 47.364101] } },
            { "type": "Feature", "properties": { "WordNumber": 7377, "Location": "Wiedikon", "TextExample": "ich hub a neues ojto, a Previa, der kremer in Wiedikon hat mir gemacht a gitn prajs", "id": 27 }, "geometry": { "type": "Point", "coordinates": [8.509246, 47.364101] } },
            { "type": "Feature", "properties": { "WordNumber": 7388, "Location": "Wiedikon", "TextExample": "kauften sie alle einen Previa; beim ojto-kremer in Wiedikon", "id": 28 }, "geometry": { "type": "Point", "coordinates": [8.509246, 47.364101] } },
            { "type": "Feature", "properties": { "WordNumber": 7797, "Location": "Zürich", "TextExample": "Asoj es ist gekumen, dass alle jidn in Zürich fahren a Previa.", "id": 29 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 9411, "Location": "Synagoge, Freigutstrasse 37, Zürich", "TextExample": "In der Synagoge feierte ein Junge seine bar-mizwe.", "id": 30 }, "geometry": { "type": "Point", "coordinates": [8.529975, 47.368829] } },
            { "type": "Feature", "properties": { "WordNumber": 9474, "Location": "Rieterpark", "TextExample": "»Treffen wir uns am unteren Eingang zum Rieterpark?«", "id": 31 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 9497, "Location": "Rieterpark", "TextExample": "»Wir treffen uns um draj«, sagte ich.  »Wo?«  »Im Rieterpark.«", "id": 32 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 9503, "Location": "Rieterpark", "TextExample": "»Um draj im Rieterpark, um draj im Rieterpark.«", "id": 33 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 9562, "Location": "Rieterpark", "TextExample": "»Um draj im Rieterpark, um draj im Rieterpark.«", "id": 34 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 9689, "Location": "Lindenhof, Zürich", "TextExample": "Wir vereinbarten einen neuen Treffpunkt: auf dem Lindenhof beim Brunnen.", "id": 35 }, "geometry": { "type": "Point", "coordinates": [8.541318, 47.372181] } },
            { "type": "Feature", "properties": { "WordNumber": 9801, "Location": "Rieterpark", "TextExample": "»Im Rieterpark«, rief sie hintendrein. ", "id": 36 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 9881, "Location": "Lindenhof, Zürich", "TextExample": "ich freute mich, auf den Lindenhof zu einer Leidensgenossin flüchten zu können", "id": 37 }, "geometry": { "type": "Point", "coordinates": [8.541318, 47.372181] } },
            { "type": "Feature", "properties": { "WordNumber": 9893, "Location": "St. Peter, Kirche, St. Peterhofstatt 2, Zürich", "TextExample": "Als der St. Peter draj mol seine glok schlug", "id": 38 }, "geometry": { "type": "Point", "coordinates": [8.540695, 47.371101] } },
            { "type": "Feature", "properties": { "WordNumber": 9907, "Location": "Predigerkirche, Zähringerplatz 6, Zürich", "TextExample": "stimmte einen Wimpernschlag schpejter die Predigerkirche in das altehrwürdige Geläut ein", "id": 39 }, "geometry": { "type": "Point", "coordinates": [8.545095, 47.37388] } },
            { "type": "Feature", "properties": { "WordNumber": 10037, "Location": "Lindenhof, Zürich", "TextExample": "Durch meine Schritte auf dem Kies des Lindenhofes fand es seine historisch passende Untermalung", "id": 40 }, "geometry": { "type": "Point", "coordinates": [8.541042, 47.373048] } },
            { "type": "Feature", "properties": { "WordNumber": 10103, "Location": "Rieterpark", "TextExample": "Motti! Wo bist du? Du bist nicht im Rieterpark!", "id": 41 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 10130, "Location": "See, Zürichsee", "TextExample": "»Michèle und ich haben uns spontan entschieden, zum See hinunterzugehen, weil heute so ein schejner tog ist.«", "id": 42 }, "geometry": { "type": "Point", "coordinates": [8.751896, 47.22266] } },
            { "type": "Feature", "properties": { "WordNumber": 10185, "Location": "Rieterpark", "TextExample": "»Übrigens! Ich habe hier im Rieterpark Frau Blattgrün getroffen! So lustig!«", "id": 43 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 10506, "Location": "Limmatquai, Zürich, See", "TextExample": "»Am Limmatquai am Spazieren«, sagte ich und schaute Michèle an, und sie teilte ihrer Mutter kurz darauf das Gleiche mit.", "id": 44 }, "geometry": { "type": "Point", "coordinates": [8.54285, 47.371794] } },
            { "type": "Feature", "properties": { "WordNumber": 10905, "Location": "Rieterpark", "TextExample": "»Im Rieterpark!«", "id": 45 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 10912, "Location": "St. Peter Kirche, St. Peterhofstatt 2, Zürich", "TextExample": "Der St. Peter schlug vier mol und die Predigerkirche machte mit.", "id": 46 }, "geometry": { "type": "Point", "coordinates": [8.540695, 47.371101] } },
            { "type": "Feature", "properties": { "WordNumber": 11012, "Location": "Predigerkirche, Zähringerplatz 6, Zürich", "TextExample": "Der St. Peter schlug vier mol und die Predigerkirche machte mit.", "id": 47 }, "geometry": { "type": "Point", "coordinates": [8.545095, 47.37388] } },
            { "type": "Feature", "properties": { "WordNumber": 11015, "Location": "Rieterstraße", "TextExample": "Gelegentlich übernahm unsere farsicherung auch treuhänderische Aufgaben, und so begab ich mich an die Rieterstraße", "id": 48 }, "geometry": { "type": "Point", "coordinates": [8.526198, 47.356582] } },
            { "type": "Feature", "properties": { "WordNumber": 11031, "Location": "Enge", "TextExample": "im Enge-Quartier, wo ebenfalls viele jidn ihr hajm haben", "id": 49 }, "geometry": { "type": "Point", "coordinates": [8.528543, 47.364055] } },
            { "type": "Feature", "properties": { "WordNumber": 11942, "Location": "Universität Zürich", "TextExample": "Am frimorgn war ich an der uniwersitejt gewejn und hatte mich draj Vorlesungsstunden lang an Lauras Anblick gewärmt", "id": 50 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 12027, "Location": "Israel", "TextExample": "»Viele Leute spenden für Israel«, antwortete ich", "id": 51 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 12034, "Location": "Israel", "TextExample": "»Ich werde einen Teil für Israel spenden«, sagte Frau Silberzweig ein wenig gelangweilt", "id": 52 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 14413, "Location": "Altersheim, Sikna Stiftung Zürich, Sallenbachstrasse 40, Zürich", "TextExample": "Wir besuchten meine bubbe und meinen sajde im jüdischen Altersheim", "id": 53 }, "geometry": { "type": "Point", "coordinates": [8.498219, 47.369161] } },
            { "type": "Feature", "properties": { "WordNumber": 14416, "Location": "Triemli Spital Zürich", "TextExample": "Einmol, vor ungefähr seks jorn, da transportierte mein Großvater einen Kunden, der vom Triemli ins Seefeld wollte", "id": 54 }, "geometry": { "type": "Point", "coordinates": [8.498, 47.365863] } },
            { "type": "Feature", "properties": { "WordNumber": 14420, "Location": "Seefeld, Zürich", "TextExample": "Einmol, vor ungefähr seks jorn, da transportierte mein Großvater einen Kunden, der vom Triemli ins Seefeld wollte", "id": 55 }, "geometry": { "type": "Point", "coordinates": [8.553313, 47.356494] } },
            { "type": "Feature", "properties": { "WordNumber": 14448, "Location": "Frauenfeld", "TextExample": "nach Frauenfeld, obwohl der Fahrgast auf der ganzen Strecke heftig dagegen protestierte", "id": 56 }, "geometry": { "type": "Point", "coordinates": [8.898754, 47.5536] } },
            { "type": "Feature", "properties": { "WordNumber": 14934, "Location": "Frauenfeld", "TextExample": "während mein Großvater darauf bestand, das genannte Fahrziel sei Frauenfeld gewejn, also werde auch nach Frauenfeld gefahren.", "id": 57 }, "geometry": { "type": "Point", "coordinates": [8.898754, 47.5536] } },
            { "type": "Feature", "properties": { "WordNumber": 16266, "Location": "Uraniastrasse", "TextExample": "Meine mame ging nicht drauf ein, doch ich wünschte, an die Uraniastraße gefahren zu werden.", "id": 58 }, "geometry": { "type": "Point", "coordinates": [8.538849, 47.374554] } },
            { "type": "Feature", "properties": { "WordNumber": 16355, "Location": "Innenstadt", "TextExample": "Munter spazierte ich Richtung Innenstadt; in der hofenung, auf ein Optikergeschäft mit mehr Auswahl zu stoßen.", "id": 59 }, "geometry": { "type": "Point", "coordinates": [6.957773, 50.941029] } },
            { "type": "Feature", "properties": { "WordNumber": 16986, "Location": "Badenerstraße", "TextExample": "Als ich die Badenerstraße überquerte, bemerkte ich ein briln-gescheft", "id": 60 }, "geometry": { "type": "Point", "coordinates": [8.500257, 47.382908] } },
            { "type": "Feature", "properties": { "WordNumber": 17187, "Location": "Universität Zürich", "TextExample": "Am nächsten frimorgn ging ich zur Uni, um das Seminar Ökonomie und Politik der Innovation zu besuchen", "id": 61 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 17305, "Location": "Hopfenstrasse, Zürich", "TextExample": "Während ich ahajm an die Hopfenstraße radelte, überlegte ich, was zu tun sei, um Laura näherzukommen", "id": 62 }, "geometry": { "type": "Point", "coordinates": [8.520572, 47.365182] } },
            { "type": "Feature", "properties": { "WordNumber": 17371, "Location": "Rämistraße", "TextExample": "Grimmig ließ ich meinem redl die Rämistraße hinunter freien Lauf", "id": 63 }, "geometry": { "type": "Point", "coordinates": [8.550331, 47.372951] } },
            { "type": "Feature", "properties": { "WordNumber": 17380, "Location": "Optiker Kalkbreite, Badenerstrasse 156, Zürich", "TextExample": "»Herr Wolkenbruch!«, freute sich der Optiker, als ich seine krom bei der Kalkbreite betrat.", "id": 64 }, "geometry": { "type": "Point", "coordinates": [8.521831, 47.374582] } },
            { "type": "Feature", "properties": { "WordNumber": 18235, "Location": "Kalkbreite", "TextExample": "»Herr Wolkenbruch!«, freute sich der Optiker, als ich seine krom bei der Kalkbreite betrat.", "id": 65 }, "geometry": { "type": "Point", "coordinates": [8.521149, 47.3744] } },
            { "type": "Feature", "properties": { "WordNumber": 18485, "Location": "Olive Garden, Restaurant, Lavaterstrasse 33", "TextExample": "Sie gewährte es und wir verabredeten uns im Olive Garden, einem koscheren Restaurant.  ", "id": 66 }, "geometry": { "type": "Point", "coordinates": [8.532421, 47.363162] } },
            { "type": "Feature", "properties": { "WordNumber": 19609, "Location": "Zürich", "TextExample": "»Weil ich nicht mehr aussehen will wie all die anderen jidn in Zürich«", "id": 67 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 19649, "Location": "Israel", "TextExample": "Davids sibnköpfige Familie feierte pajsech dieses Jahr in Israel bei einem befreundeten Biologenpaar.", "id": 68 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 20431, "Location": "Syrien", "TextExample": "Schloime schlug vor, auch den Syrern zu zeigen, wer im Nahen Osten die hojsn anhabe. ", "id": 69 }, "geometry": { "type": "Point", "coordinates": [38.996815, 34.802075] } },
            { "type": "Feature", "properties": { "WordNumber": 20434, "Location": "Damaskus", "TextExample": "Schloime seinerseits hatte all seine Kriegsflaggen entrollt; sie flatterten schon über Damaskus, Teheran, Amman und Kairo.", "id": 70 }, "geometry": { "type": "Point", "coordinates": [36.276528, 33.513807] } },
            { "type": "Feature", "properties": { "WordNumber": 20437, "Location": "Teheran", "TextExample": "Schloime seinerseits hatte all seine Kriegsflaggen entrollt; sie flatterten schon über Damaskus, Teheran, Amman und Kairo.", "id": 71 }, "geometry": { "type": "Point", "coordinates": [51.388974, 35.689198] } },
            { "type": "Feature", "properties": { "WordNumber": 20440, "Location": "Amman", "TextExample": "Schloime seinerseits hatte all seine Kriegsflaggen entrollt; sie flatterten schon über Damaskus, Teheran, Amman und Kairo.", "id": 72 }, "geometry": { "type": "Point", "coordinates": [35.928372, 31.945367] } },
            { "type": "Feature", "properties": { "WordNumber": 21253, "Location": "Kairo", "TextExample": "Schloime seinerseits hatte all seine Kriegsflaggen entrollt; sie flatterten schon über Damaskus, Teheran, Amman und Kairo.", "id": 73 }, "geometry": { "type": "Point", "coordinates": [31.235712, 30.04442] } },
            { "type": "Feature", "properties": { "WordNumber": 21532, "Location": "Minneapolis, USA", "TextExample": " »Draj Schwestern aus Minneapolis. ›America’s Wartime Sweethearts‹ genannt.", "id": 74 }, "geometry": { "type": "Point", "coordinates": [-93.265011, 44.977753] } },
            { "type": "Feature", "properties": { "WordNumber": 21656, "Location": "Süddeutschland", "TextExample": "»Wussten Sie, dass die Nazis glaubten, dieses Lied stamme in seiner ursprünglichen Version aus Süddeutschland, und deshalb ganz stolz darauf waren?«", "id": 75 }, "geometry": { "type": "Point", "coordinates": [9.893822, 49.006575] } },
            { "type": "Feature", "properties": { "WordNumber": 21668, "Location": "Israel", "TextExample": "»Sie werden also – das ist mein zweiter rabbinischer Rat – nach Israel fliegen«", "id": 76 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 21675, "Location": "Israel", "TextExample": "»Da verlieben Sie sich noch am Flughafen.«  »Israel?«, fragte ich verwirrt.", "id": 77 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 21693, "Location": "Israel", "TextExample": "»Ja, Israel. Hören Sie, die Andrews Sisters verzeihe ich Ihnen, die waren ja nicht amol jiddisch, aber Israel sollten Sie schon kennen.«", "id": 78 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 21701, "Location": "Israel", "TextExample": "»Ja, Israel. Hören Sie, die Andrews Sisters verzeihe ich Ihnen, die waren ja nicht amol jiddisch, aber Israel sollten Sie schon kennen.«", "id": 79 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 21727, "Location": "Israel", "TextExample": "»Ich kenne Israel!«, verteidigte ich mich.", "id": 80 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 21779, "Location": "Tel Aviv", "TextExample": "Wir hatten Verwandte in Tel Aviv, Onkel Jonathan, den Bruder meiner mame, und seine froj Malka", "id": 81 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 21789, "Location": "Tel Aviv", "TextExample": "Seitdem limitierte sie Aufenthalte in Tel Aviv radikal.", "id": 82 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 21800, "Location": "Israel", "TextExample": "ber wie dem auch sei, ich kannte Israel.", "id": 83 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 22071, "Location": "Israel", "TextExample": "»Sejer git, sejer git, als jid muss einem Israel ein Begriff sein«", "id": 84 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 22163, "Location": "Israel", "TextExample": "»Also, junger man. Sie gehen nach Israel, verlieben sich, und dann haben wir diese sach aus der Welt geschafft.", "id": 85 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 22277, "Location": "Ben Gurion, Flughafen, Israel", "TextExample": "Die Art, wie der El-Al-Kapitän im Endanflug die Boeing 757 in eine Hundertachtzig-Grad-Kurve warf, um den Flughafen Ben Gurion vom Landesinneren her anzufliegen", "id": 86 }, "geometry": { "type": "Point", "coordinates": [34.885411, 32.005532] } },
            { "type": "Feature", "properties": { "WordNumber": 22360, "Location": "Israel", "TextExample": "Meine mame betrachtete Israel eher sachbezogen: Es sei, sagte sie, der einzige Ort auf der Welt ohne Antisemiten.", "id": 87 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 22390, "Location": "Israel", "TextExample": "Was der Zweck meiner Reise nach Israel sei, wollte die Zollbeamtin wissen", "id": 88 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 22484, "Location": "Tel Aviv", "TextExample": "Ich besuche Verwandte, sagte ich.  Wo die wohnen.  In Tel Aviv.", "id": 89 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 22830, "Location": "Jerusalem", "TextExample": "Malka, in Jerusalem geboren, sagte auf Hebräisch, sie freuten sich, mich zu sehen. ", "id": 90 }, "geometry": { "type": "Point", "coordinates": [35.21371, 31.768319] } },
            { "type": "Feature", "properties": { "WordNumber": 24371, "Location": "Tel Aviv", "TextExample": "Von der Autofahrt nach Tel Aviv bekam ich nichts mit.", "id": 91 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 25045, "Location": "Tel Aviv", "TextExample": "ob ich Hunger hätte, schlug einen Ausflug zu Hakusem vor, Tel Avivs bestem Falafelrestaurant,", "id": 92 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 25133, "Location": "Tel Aviv", "TextExample": "ein Blau, so blau wie die See vor Tel Aviv", "id": 93 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 25258, "Location": "Tel Aviv", "TextExample": "ich mache meine mischpuche zu schpot und diese Michal sei a nafke und a schlumpe und dieses Tel Aviv an ejnzik schandhojs", "id": 94 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 25350, "Location": "Israel", "TextExample": "»So, Herr Wolkenbruch, haben Sie Israel gefunden?«", "id": 95 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 25689, "Location": "Israel", "TextExample": "»Oj wej, Herr Wolkenbruch… da habe ich wohl etwas zu gute Werbung gemacht für Israel… meinen Sie damit, was ich glaube?«", "id": 96 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 26064, "Location": "Tel Aviv", "TextExample": "Auf ein mol fiel es mir schwer zu glauben, dass die Zürcher jidn ebenso jidn sein sollen wie jene hier in Tel Aviv.", "id": 97 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 26274, "Location": "Israel", "TextExample": "»Hallo. Ich bin in Israel«, sagte ich.  »Ferien?«  »Nein. Ich soll mich verlieben. Order von Rav Wolf.« ", "id": 98 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 26402, "Location": "Zürich", "TextExample": "Ich versprach Michèle, am Sonntag wie gebucht den aeroplan zurik nach Zürich zu nehmen.", "id": 99 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 26928, "Location": "Schenkin Street, Tel Aviv", "TextExample": " In den schicken Läden an der Schenkin-Straße traute ich mich anfangs nicht recht", "id": 100 }, "geometry": { "type": "Point", "coordinates": [34.774907, 32.068901] } },
            { "type": "Feature", "properties": { "WordNumber": 26976, "Location": "Zürich", "TextExample": "Der Flug nach Zürich erschien mir lang und das Essen schmeckte mir nicht.", "id": 101 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 26982, "Location": "Zürich", "TextExample": "Dann wurde die erd grüner und der himl dunkler, und als er uwnt-bloj war, setzte die Maschine in Zürich auf", "id": 102 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 27254, "Location": "Flughafen Zürich, Kloten", "TextExample": "wo bereits im Terminal alles viel sauberer und ordentlicher war als in Israel und, wie ich fand, auch wesentlich langweiliger.", "id": 103 }, "geometry": { "type": "Point", "coordinates": [8.555476, 47.458217] } },
            { "type": "Feature", "properties": { "WordNumber": 27310, "Location": "Milchbucktunnel", "TextExample": "»Weil –«, Blinken, Spurwechsel in den Milchbucktunnel, »weil –«, Abbremsen, Rückstau vor Tunnelende", "id": 104 }, "geometry": { "type": "Point", "coordinates": [8.54458, 47.392796] } },
            { "type": "Feature", "properties": { "WordNumber": 27334, "Location": "Sihlpost", "TextExample": "Wieder sagte er nichts mehr; bis zur Sihlpost.", "id": 105 }, "geometry": { "type": "Point", "coordinates": [8.53558, 47.377437] } },
            { "type": "Feature", "properties": { "WordNumber": 27373, "Location": "Kantonsolizei Zürich, Kasernenstrase 29, Zürich", "TextExample": "Nun schwieg ich; bis zum Posten der Kantons-polizaj.", "id": 106 }, "geometry": { "type": "Point", "coordinates": [8.53231, 47.374892] } },
            { "type": "Feature", "properties": { "WordNumber": 27380, "Location": "Zweierstrasse", "TextExample": "Anfahren.  »Weißt denn du, was gut ist für dich?«  Zweierstraße.", "id": 107 }, "geometry": { "type": "Point", "coordinates": [8.521487, 47.371639] } },
            { "type": "Feature", "properties": { "WordNumber": 27526, "Location": "Bahnhof Wiedikon", "TextExample": "achdem wir beim Bahnhof Wiedikon über die kurze brik über die Geleise gefahren waren, antwortete ich", "id": 108 }, "geometry": { "type": "Point", "coordinates": [8.523614, 47.371394] } },
            { "type": "Feature", "properties": { "WordNumber": 27634, "Location": "Tel Aviv", "TextExample": "Von der mediterranen Hochlaune, in der ich in Tel Aviv die Maschine bestiegen hatte, war nichts mehr übrig.", "id": 109 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 27639, "Location": "Mühlegasse", "TextExample": "Am darauffolgenden Nachmittag war ich knapp dran für die Vorlesung und trat tapfer in die Pedale; die Mühlegasse hinauf", "id": 110 }, "geometry": { "type": "Point", "coordinates": [8.544462, 47.374185] } },
            { "type": "Feature", "properties": { "WordNumber": 27644, "Location": "Hirschengraben, Zürich", "TextExample": "in den Hirschengraben hinein", "id": 111 }, "geometry": { "type": "Point", "coordinates": [8.547062, 47.372848] } },
            { "type": "Feature", "properties": { "WordNumber": 27650, "Location": "Neumarkt, Zürich", "TextExample": "und beim Neumarkt hinauf ", "id": 112 }, "geometry": { "type": "Point", "coordinates": [8.546268, 47.372846] } },
            { "type": "Feature", "properties": { "WordNumber": 27939, "Location": "Künstlergasse, Zürich", "TextExample": "in die steile Künstlergasse, verboten auf dem Trottoir", "id": 113 }, "geometry": { "type": "Point", "coordinates": [8.547894, 47.37427] } },
            { "type": "Feature", "properties": { "WordNumber": 28571, "Location": "Zürich", "TextExample": " Auf dem Flug nach Zürich hatte ich ausgiebig darüber gerätselt, ob ich nach meinem bagegenisch mit Michal wohl noch immer so intensiv auf Lauras Anwesenheit reagieren würde.", "id": 114 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 29028, "Location": "Rondellcafé, Univesität, Zürich", "TextExample": "Im Rondellcafé setzten wir unsere Unterhaltung fort.  »Also hattest du schon mal Krach mit deiner Familie?«", "id": 115 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 29506, "Location": "Tel Aviv", "TextExample": "Frohgemut zog ich meine neuen Jeans an und dazu eines der neuen Oberteile, die ich in Tel Aviv gekauft hatte", "id": 116 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 29839, "Location": "Karibik", "TextExample": "das Kind, die Lilien und die Wege, neuerdings auch das Herz und der Klee und der Brief sowie eine froj, die aussah wie eine Gouverneurstochter aus der Karibik", "id": 117 }, "geometry": { "type": "Point", "coordinates": [-78.656894, 21.469114] } },
            { "type": "Feature", "properties": { "WordNumber": 29995, "Location": "Rieterpark", "TextExample": "Auf dem Rückweg ins ofis machte ich einen Abstecher in den Rieterpark. ", "id": 118 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 30027, "Location": "Universität Zürich", "TextExample": "Doch weder am darauffolgenden tog noch an einem der restlichen woch sah ich Laura an der uniwersitejt wieder.", "id": 119 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 30034, "Location": "Rondellcafé, Univesität, Zürich", "TextExample": "verbrachte jeden Mittag in der Mensa, platzierte mich taktisch geschickt im Rondellcafé,", "id": 120 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 30309, "Location": "Lichthof, Univesität, Zürich", "TextExample": "lümmelte scheinbar zufällig im Lichthof herum, doch zwecklos", "id": 121 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 30336, "Location": "Limmatquai", "TextExample": "Ich fuhr am frühen uwnt mit dem Rad das Limmatquai entlang", "id": 122 }, "geometry": { "type": "Point", "coordinates": [8.54285, 47.371794] } },
            { "type": "Feature", "properties": { "WordNumber": 30753, "Location": "Central, Zürich", "TextExample": "Laura schlenderte mir in einem schwarzen rok, der ein gehöriges schtik über dem Knie endete, und einer hellblauen Bluse mit gekrempelten Ärmeln in Richtung Central entgegen", "id": 123 }, "geometry": { "type": "Point", "coordinates": [8.543911, 47.377007] } },
            { "type": "Feature", "properties": { "WordNumber": 31065, "Location": "Zürich", "TextExample": "weshalb alle jidn in Zürich einen Previa fahren, worauf sie wissen wollte, warum die jidn auch im Sommer riesige Pelzhüte tragen", "id": 124 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } },
            { "type": "Feature", "properties": { "WordNumber": 31275, "Location": "Seefeld, Zürich", "TextExample": "Die ganze Welt schien zu leuchten, als wir durch das Seefeld-Quartier spazierten", "id": 125 }, "geometry": { "type": "Point", "coordinates": [8.553313, 47.356494] } },
            { "type": "Feature", "properties": { "WordNumber": 32233, "Location": "Seeufer Zürichsee", "TextExample": "Dann spazierte ich am Seeufer entlang ahajm, mein redl schiebend und ganz benommen von der Gesellschaft dieser jungen froj", "id": 126 }, "geometry": { "type": "Point", "coordinates": [8.751896, 47.22266] } },
            { "type": "Feature", "properties": { "WordNumber": 32537, "Location": "Israel", "TextExample": "Ich wolle gar nichts, log ich, und es sei unvermeidlich, dass man an einer uniwersitejt außerhalb Israels mit Nichtjuden in Kontakt komme.", "id": 127 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 32642, "Location": "Universitätsspital Zürich", "TextExample": "Aber sie lässt ausrichten, du mögest sie besuchen. Sie ist im Unischpitol.", "id": 128 }, "geometry": { "type": "Point", "coordinates": [8.551049, 47.376755] } },
            { "type": "Feature", "properties": { "WordNumber": 32729, "Location": "Universitätsspital Zürich", "TextExample": "Dann fuhr ich mit der tramwaj Richtung Unispital.", "id": 129 }, "geometry": { "type": "Point", "coordinates": [8.551049, 47.376755] } },
            { "type": "Feature", "properties": { "WordNumber": 33419, "Location": "Universitätsspital Zürich", "TextExample": "Vor mir erhob sich monumental das Universitätsspital der Stadt Zürich, Schauplatz jahrzehntelangen Ringens zwischen Vergänglichkeit und Heilkunst.", "id": 130 }, "geometry": { "type": "Point", "coordinates": [8.551049, 47.376755] } },
            { "type": "Feature", "properties": { "WordNumber": 33651, "Location": "Gaza", "TextExample": "Sie hätte mich ohnehin zu allem einladen können; von mir aus zu einer Städtereise nach Gaza, ich wäre sofort mitgegangen.", "id": 131 }, "geometry": { "type": "Point", "coordinates": [34.308826, 31.354676] } },
            { "type": "Feature", "properties": { "WordNumber": 33790, "Location": "Höschgasse", "TextExample": "Wohl hatte ich mir, als ich Laura nach Hause begleitet hatte, gemerkt, dass sie an der Höschgasse wohnte", "id": 132 }, "geometry": { "type": "Point", "coordinates": [8.553716, 47.357516] } },
            { "type": "Feature", "properties": { "WordNumber": 33843, "Location": "Seefeld", "TextExample": "Kurz nach acht stand ich mit einem kleinen Blumenstrauß und übermütigem Herzen vor Lauras Haus im Seefeld.", "id": 133 }, "geometry": { "type": "Point", "coordinates": [11.187774, 47.330002] } },
            { "type": "Feature", "properties": { "WordNumber": 34423, "Location": "Universität Zürich", "TextExample": "ch drehte mich um. Es war Lauras Freundin von der uniwersitejt.", "id": 134 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 37958, "Location": "Deutschland", "TextExample": "Da war Maike, eine weißblonde, großgewachsene froj aus Deutschland, die mit großem Mund und aufgestütztem Unterarm rojcherte und mich die ganze zajt fixierte.", "id": 135 }, "geometry": { "type": "Point", "coordinates": [10.451526, 51.165691] } },
            { "type": "Feature", "properties": { "WordNumber": 39010, "Location": "Israel", "TextExample": "»Der Sohn Israels!«, rief er vergnügt und bot mir das heftig qualmende Ding an.", "id": 136 }, "geometry": { "type": "Point", "coordinates": [34.851612, 31.046051] } },
            { "type": "Feature", "properties": { "WordNumber": 39654, "Location": "Universität Zürich", "TextExample": "Meine mame gab einen entsetzten krechz von sich. Dann fragte sie: »Wer ist Laura?«  »Ich kenne sie von der uniwersitejt.«", "id": 137 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 39677, "Location": "Universität Zürich", "TextExample": " Eigentlich hätte mich an diesem tog, einem Mittwoch, die uniwersitejt erwartet, doch nach den jüngsten gescheenischn musste ich mich erst mol ordnen.", "id": 138 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 40264, "Location": "Rieterpark", "TextExample": "Also fasste ich im Hauseingang mein redl, fuhr zum Rieterpark und spazierte unter den hoheitsvollen, knospenden Bäumen hindurch", "id": 139 }, "geometry": { "type": "Point", "coordinates": [8.530552, 47.35789] } },
            { "type": "Feature", "properties": { "WordNumber": 40846, "Location": "Café des Rietberg-Museums", "TextExample": "bis ich darüber hungerik wurde und mir aus dem Café des Rietberg-Museums einen Tomaten-Mozzarella-Salat und einen Fruchtsaft holte", "id": 140 }, "geometry": { "type": "Point", "coordinates": [8.530225, 47.358929] } },
            { "type": "Feature", "properties": { "WordNumber": 41004, "Location": "Universität Zürich", "TextExample": " Ahajm?  Eher nicht.  Uniwersitejt?  Keine Lust.  Laura?  Ging nicht ohne auffordernde Signale ihrerseits, die ärgerlicherweise weiterhin ausblieben.", "id": 141 }, "geometry": { "type": "Point", "coordinates": [8.550981, 47.374322] } },
            { "type": "Feature", "properties": { "WordNumber": 41067, "Location": "Helvetiaplatz", "TextExample": "Während der Schussfahrt zum Helvetiaplatz gab ich mich der Überlegung hin, ob unsere heutige zajt gegenüber früheren nicht eine viel schmerzvollere sei", "id": 142 }, "geometry": { "type": "Point", "coordinates": [8.5272, 47.376299] } },
            { "type": "Feature", "properties": { "WordNumber": 41682, "Location": "Volkshaus", "TextExample": "Ohne onschtrengung fand ich das Lokal mit dem Namen Volkshaus.", "id": 143 }, "geometry": { "type": "Point", "coordinates": [8.527224, 47.375458] } },
            { "type": "Feature", "properties": { "WordNumber": 42231, "Location": "Volkshaus", "TextExample": "Enzo hatte die brillante Idee gehabt, die Single-Malt-Abteilung der Volkshaus-Karte auf und ab zu eilen", "id": 144 }, "geometry": { "type": "Point", "coordinates": [8.527224, 47.375458] } },
            { "type": "Feature", "properties": { "WordNumber": 42324, "Location": "München", "TextExample": "»Natürlich. Thorsten mag allerdings keine Juden. Er ist aus München.« ", "id": 145 }, "geometry": { "type": "Point", "coordinates": [11.58198, 48.135125] } },
            { "type": "Feature", "properties": { "WordNumber": 42584, "Location": "Volkshaus", "TextExample": "Ich hielt ein taksi an und ließ mich ins Volkshaus fahren. ", "id": 146 }, "geometry": { "type": "Point", "coordinates": [8.527224, 47.375458] } },
            { "type": "Feature", "properties": { "WordNumber": 42685, "Location": "München", "TextExample": "ein Freund aus München hat bei mir gewohnt und ist letzte Woche zurück nach Deutschland gefahren.", "id": 147 }, "geometry": { "type": "Point", "coordinates": [11.58198, 48.135125] } },
            { "type": "Feature", "properties": { "WordNumber": 43542, "Location": "Kanzleistraße", "TextExample": "»Kanzleistraße«, sagte Thorsten, »gleich hier in der Nähe.«", "id": 148 }, "geometry": { "type": "Point", "coordinates": [8.521595, 47.376535] } },
            { "type": "Feature", "properties": { "WordNumber": 44034, "Location": "Hopfenstrasse, Zürich", "TextExample": "Doch der Begriff »Zuhause« hatte ja mit der Wohnung an der Hopfenstraße, wo Moische Wolkenbruch mit seiner froj Judith, geborene Eisengeist, wohnte, für mich nichts mehr gemein.", "id": 149 }, "geometry": { "type": "Point", "coordinates": [8.520572, 47.365182] } },
            { "type": "Feature", "properties": { "WordNumber": 44599, "Location": "Yalla Habibi, Meinard-Lienard-Strasse 27, Zürich", "TextExample": "Dann machte ich mich zu fus auf den Weg zur Wolkenbruch Versicherung, mit einem Zwischenhalt bei einem libanesischen Imbisslokal, in dem die Speisen in lustiger-Façon angeschrieben waren", "id": 150 }, "geometry": { "type": "Point", "coordinates": [8.517301, 47.375157] } },
            { "type": "Feature", "properties": { "WordNumber": 44605, "Location": "Birmensdorferstasse, Zürich", "TextExample": "Absichtslos ging ich die Birmensdorferstraße entlang, bis ich beim Stauffacher ankam, wo ich erst recht nicht wusste, was ich tun sollte.", "id": 151 }, "geometry": { "type": "Point", "coordinates": [8.496741, 47.368763] } },
            { "type": "Feature", "properties": { "WordNumber": 44703, "Location": "Stauffacher, Zürich", "TextExample": "Absichtslos ging ich die Birmensdorferstraße entlang, bis ich beim Stauffacher ankam, wo ich erst recht nicht wusste, was ich tun sollte.", "id": 152 }, "geometry": { "type": "Point", "coordinates": [8.529023, 47.373617] } },
            { "type": "Feature", "properties": { "WordNumber": 44778, "Location": "Volkshaus", "TextExample": "Abendessen gern, sieben, Volkshaus? Gruß, Jew. ", "id": 153 }, "geometry": { "type": "Point", "coordinates": [8.527224, 47.375458] } },
            { "type": "Feature", "properties": { "WordNumber": 44802, "Location": "Helvetiaplatz", "TextExample": "Beflügelt nahm ich den Weg zum nahen Helvetiaplatz unter di fis, obwohl ich viel zu fri dran war. ", "id": 154 }, "geometry": { "type": "Point", "coordinates": [8.5272, 47.376299] } },
            { "type": "Feature", "properties": { "WordNumber": 44985, "Location": "Volkshaus", "TextExample": "Um die Wartezeit zu überbrücken, kaufte ich in einer Buchhandlung neben dem Volkshaus etwas zu lesen.", "id": 155 }, "geometry": { "type": "Point", "coordinates": [8.527224, 47.375458] } },
            { "type": "Feature", "properties": { "WordNumber": 45014, "Location": "Moskau", "TextExample": "Kannte ich nicht.  »Moskauer Orgasmus!«, rief der Buchhändler und zog ein Buch aus dem riesigen Regal. »Ein herrliches Buch.«", "id": 156 }, "geometry": { "type": "Point", "coordinates": [37.6173, 55.755826] } },
            { "type": "Feature", "properties": { "WordNumber": 45164, "Location": "Moskau", "TextExample": "Die Geschichte handelte vom Moskauer Juden Mandelbaum, der die Tochter eines New Yorker Mafiabosses geschwängert und ihr dabei ihren ersten Orgasmus verschafft hatte. ", "id": 157 }, "geometry": { "type": "Point", "coordinates": [37.6173, 55.755826] } },
            { "type": "Feature", "properties": { "WordNumber": 46489, "Location": "Tel Aviv", "TextExample": "Zudem wirkte ich vermutlich eher wie a jid auf der Flucht vor der Gestapo als wie einer, der sich am Strand von Tel Aviv auf dem Liegestuhl fläzt.", "id": 158 }, "geometry": { "type": "Point", "coordinates": [34.781768, 32.0853] } },
            { "type": "Feature", "properties": { "WordNumber": 47643, "Location": "Kanzleistraße", "TextExample": "Ich ließ es drauf ankommen, hielt Laura die tir auf, trat nach ihr auf die Straße hinaus und schlug ohne ein Wort den Weg zur Kanzleistraße ein.", "id": 159 }, "geometry": { "type": "Point", "coordinates": [8.521595, 47.376535] } },
            { "type": "Feature", "properties": { "WordNumber": 47657, "Location": "Hotel Marriott", "TextExample": " »Irgendeines. Nicht hier.«  »Hotel Marriott? Meine Frau… travaille! In Kuche!« Er strahlte.", "id": 160 }, "geometry": { "type": "Point", "coordinates": [8.540511, 47.382558] } },
            { "type": "Feature", "properties": { "WordNumber": 47821, "Location": "Hotel Marriott", "TextExample": "»Von mir aus, Hotel Marriott.«  Das taksi fuhr los. Ich saß hinten rechz, wie damals bei meinem sajde immer.", "id": 161 }, "geometry": { "type": "Point", "coordinates": [8.540511, 47.382558] } },
            { "type": "Feature", "properties": { "WordNumber": 47828, "Location": "Limmat", "TextExample": "Ich begab mich in den elften schtok. Das zimer war klein, aber elegant. Ich hatte Ausblick auf die Limmat. Sie floss schtil nach irgendwo.", "id": 162 }, "geometry": { "type": "Point", "coordinates": [8.541694, 47.376887] } }
        ]
    };

    // set style and map of locations and add geojson data
    locations.setStyle({
        icon: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Small-dark-green-circle.svg',
            scaledSize: new google.maps.Size(16, 16),
            visible: true,
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(8, 8)

        }
    });
    locations.addGeoJson(locationsObjects);
    showLocations(0);

    // set infowindow (text, map) on click on locations
    locations.addListener('click', function (event) {
        currantLocationID = event.feature.getProperty('id');
        infowindow.setContent('<h3>' + event.feature.getProperty('Location') + '</h3>' +
            '<button type="button" onclick="document.getElementById(\'nextLocation_hiddenButton\').click();">Next Location</button>' +
            '<p><span class="infowindow">"' + event.feature.getProperty('TextExample') + '"</span></p>');
        infowindow.setPosition(event.feature.getGeometry().get());
        infowindow.open(map);

        // remove storyPath
        removeStoryPath();
    });

    // set infowindow to next location on button click and center map on infowindow
    nextLocationButton.addEventListener('click', function () {
        var feature;
        var oldFeature;
        locations.forEach(function (f) {
            switch (f.getProperty('id')) {
                case currantLocationID:
                    oldFeature = f;
                    break;
                case currantLocationID + 1:
                    feature = f;
                    break;
            }
        });

        if (feature.getProperty('visible')) {
            currantLocationID = feature.getProperty('id');
            infowindow.setContent('<h3>' + feature.getProperty('Location') + '</h3>' +
                '<button type="button" onclick="document.getElementById(\'nextLocation_hiddenButton\').click();">Next Location</button>' +
                '<p><span  class="infowindow"">"' + feature.getProperty('TextExample') + '"</span></p>');
            infowindow.setPosition(feature.getGeometry().get());
            map.panTo(feature.getGeometry().get());

            // add path from feature to next feature
            oldFeatureLatLng = oldFeature.getGeometry().get();
            featureLatLng = feature.getGeometry().get();
            path.push(oldFeatureLatLng);
            path.push(featureLatLng);
            storyPath.setPath(path);
            storyPath.setMap(map);

        }
    });

};

// function to remove the story path from the map and to clear the points in the path array
function removeStoryPath() {
    path.clear();
    storyPath.setPath(path);
    storyPath.setMap(null);
}

// on slider change --> display locations according to story progression shown by slider
// only show locations within 20 normpages (= 20*30rows*60characters ~ 20*300 words) --> 6000 words
function showLocations(value) {
    value = Number(value);
    infowindow.close();
    locations.forEach(function (f) {
        var wordNumber = f.getProperty('WordNumber');
        if (wordNumber <= value - 3000 || wordNumber >= value + 3000) {
            locations.overrideStyle(f, styleHidden);
            f.setProperty('visible', false);
        } else {
            locations.revertStyle(f);
            f.setProperty('visible', true);
        }
    });
    locations.setMap(map);

    // remove story path
    removeStoryPath();
}

// display the range of pages from where locations are shown
function showSliderText(page) {
    page = parseInt(page / 300);
    var rangeBottom;
    var rangeTop;

    switch (true) {
        case (page <= 10):
            rangeBottom = 1;
            rangeTop = page + 10;
            break;
        case (page > 10 && page < 150):
            rangeBottom = page - 10;
            rangeTop = page + 10;
            break;
        case (page >= 150):
            rangeBottom = page - 10;
            rangeTop = 160;
            break;
    };

    var textbox = document.getElementById('textbox');
    textbox.style.display = 'block';
    textbox.innerHTML = 'Displaying locations from page ' + rangeBottom +
        ' to page ' + rangeTop + '.';
}


// center on zurich
function centerOnZurich() {
    map.panTo(new google.maps.LatLng(47.372135, 8.527377));
    map.setZoom(14);
}

//Slider play function
function play_function() {
    //this function starts by pressing the play button

    if (slider_is_running == "false") {
        var background = document.querySelector(".playbutton");
        background.style.backgroundImage = "url('src/paused-button.png')";

        intervalID = setInterval(changeValue, 300);
        //Change here the intervall of change in the slider in millisec (1000ms = 1s).

        slider_is_running = "true";

    } else {

        var background = document.querySelector(".playbutton");
        background.style.backgroundImage = "url('src/play-icon-white-png-8.png')";

        clearInterval(intervalID);

        slider_is_running = "false";
    }
}

//Slider value changer
function changeValue() {
    let value = document.getElementById("slider").value;
    document.getElementById("slider").value = value - (-300);
    //Change here the step of the slider.

    showLocations(document.getElementById("slider").value);
    showSliderText(document.getElementById("slider").value);
}

// switch between the "Locations and Emotions"-map and the "Chart Map"-map
window.addEventListener("message", receiveData, false);
function receiveData(evt) {
    var mapName = evt.data.map.name;
    var mapLocEm = document.getElementById("w_map1");
    var mapChart = document.getElementById("w_map2");
    var map1Tools = document.getElementById("w_map1_tools");
    switch (mapName) {
        case "Locations and emotions":
            mapLocEm.style.display = "grid";
            mapChart.style.display = "none";
            map1Tools.style.display = "block";
            break;
        case "Chart Map":
            mapLocEm.style.display = "none";
            mapChart.style.display = "grid";
            map1Tools.style.display = "none";
            break;
        default:
            mapLocEm.style.display = "grid";
            mapChart.style.display = "none";
            map1Tools.style.display = "block";
            break;
    }
}

// image viewer for pannable and zoomable image
$(function(){
	$('.center-fit').ImageViewer();
});