var marker;
var map;

$("#link1").click(function(){
    changeMarkerPos(-23.3847943, 144.2401117);
});
$("#link2").click(function(){
    changeMarkerPos(-23.3857963, 144.2401117);
});
$("#link3").click(function(){
    changeMarkerPos(-23.3877948, 144.2401117);
});
$("#link4").click(function(){
    changeMarkerPos(-23.3897948, 144.2399117);
});

function initialize() {
    var styles = [{
        stylers: [{
            saturation: -100
        }]
    }];
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });
    var mapProp = {
        center: new google.maps.LatLng(-23.3847943, 144.2401117),
        zoom: 17,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: true,
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), mapProp);
  
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style')

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.3847943, 144.2401117),
        animation: google.maps.Animation.DROP,
        icon: 'https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/location-24-32.png',
    });

    google.maps.event.addListener(marker,'mouseover',function(){
      $('img[src="'+this.icon+'"]').parent().attr("class", "map-user-image");
    });

    google.maps.event.addListener(marker, 'load', initialize);
  
    marker.setMap(map);
    map.panTo(marker.position);
}

function changeMarkerPos(lat, lon){
    myLatLng = new google.maps.LatLng(lat, lon)
    marker.setPosition(myLatLng);
    map.panTo(myLatLng);
}

google.maps.event.addDomListener(window, 'load', initialize);