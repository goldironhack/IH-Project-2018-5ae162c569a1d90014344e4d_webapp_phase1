var map;
var markers = [];
var cnt = {lat: 40.7291, lng: -73.9965};

function initMap() {
        map = new google.maps.Map(document.getElementById('mapa'), {
          center: cnt,
          zoom: 17
        });
        
        var marker = new google.maps.Marker({
            position: cnt,
            map: map,
            title: 'NYU Stern School of Business'
        });
        
    
        
}

function resetMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
}


function drawDistr() {
    map.setZoom(10);
    map.setCenter(cnt);
    map.data.loadGeoJson(
      'https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');
}


function drawHousing(distr){
    resetMarkers();
    housing.forEach(function(val) {
        if(val[0] !== null && parseInt(val[0][0]) == distr){
            var marker = new google.maps.Marker({
            position: {lat: parseFloat(val[1]),lng: parseFloat(val[2])},
            map: map,
            title: val[4]
        });
        markers.push(marker);

        }
    });
}

function calcDistance(pnt){
    return Math.sqrt(130000*(pnt.lat-cnt.lat)*(pnt.lat-cnt.lat) + 130000*(pnt.lng-cnt.lng)*(pnt.lng-cnt.lng));
}

function drawHousingDist(dist){
    resetMarkers();
    housing.forEach(function(val) {
        if(calcDistance({lat: parseFloat(val[1]), lng: parseFloat(val[2])}) <= dist){
            var marker = new google.maps.Marker({
            position: {lat: parseFloat(val[1]),lng: parseFloat(val[2])},
            map: map,
            title: val[4]
        });
        markers.push(marker);
            
        }
    });
    
}
