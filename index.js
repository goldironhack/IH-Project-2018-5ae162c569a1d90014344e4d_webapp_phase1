var URLs = ["https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json?accessType=DOWNLOAD",
    "https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson",
    "https://data.cityofnewyork.us/resource/9s4h-37hy.json",
    "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json?accessType=DOWNLOAD"];

var borough = {
    1: "Manhattan",
    2: "Brooklyn",
    3: "Queens",
    4: "The Bronx",
    5: "Staten Island"
};
var neighborhood = new Map();
var districts = new Map();
var crimes = new Map();
var housing = new Map();

window.onload = getData;


function getDataFromURL(urlKey){
	
	$.getJSON(URLs[urlKey], function(data){
	    switch(urlKey){
	        case 0:
	            $.each( data.data, function( key, val) {
                    neighborhood.set(key, [val[11], val[12], val[9]]); 
                });
                break;
            case 1:
                $.each( data.features, function( key, val) {
                    districts.set(val.properties.BoroCD,val.geometry); 
                });
	            break;
	        case 2:
	            
	            $.each( data, function( key, val) {
                    
                    if(val["lat_lon"] !== null)
                         crimes.set(val["cmplnt_num"], [val["boro_nm"], val["ofns_desc"], val["latitude"],val["longitude"], val["cmplnt_fr_dt"]]);    
                    
                });

                break;
            case 3:
                $.each( data.data, function( key, val) {
                    if(val[16] !== null && val[0] !== null)
                        housing.set(val[8], [val[17], val[23], val[24], val[31], val[9]]); 
                });
	    }
            
	})
	.done( function(){
	})
	.fail( function(error){
		console.error(error);
	});
}

function getData(){
    for(var i = 0; i < URLs.length; i++){
        getDataFromURL(i);
    }
}


