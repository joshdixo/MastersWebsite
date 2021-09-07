(function($){
  $(function(){

    $('.sidenav').sidenav();

  });
})(jQuery);


// Google Maps API

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.502279623093415, lng: -82.02267051777315 },
    zoom: 16,
  });
}