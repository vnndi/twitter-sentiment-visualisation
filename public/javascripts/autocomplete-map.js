function initialize(){var e={center:new google.maps.LatLng(-33.8688,151.2195),zoom:13},o=new google.maps.Map(document.getElementById("map-canvas"),e),n=document.getElementById("txtLocation").removeAttribute("placeholder"),t=new google.maps.places.Autocomplete(n),s=new google.maps.InfoWindow,a=new google.maps.Marker({map:o,anchorPoint:new google.maps.Point(0,-29)});google.maps.event.addListener(t,"place_changed",function(){s.close(),a.setVisible(!1);var e=t.getPlace();if(!e.geometry)return void window.alert("Autocomplete's returned place contains no geometry");e.geometry.viewport?o.fitBounds(e.geometry.viewport):(o.setCenter(e.geometry.location),o.setZoom(17)),a.setIcon({url:e.icon,size:new google.maps.Size(71,71),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(17,34),scaledSize:new google.maps.Size(35,35)}),a.setPosition(e.geometry.location),a.setVisible(!0);var n="";e.address_components&&(n=[e.address_components[0]&&e.address_components[0].short_name||"",e.address_components[1]&&e.address_components[1].short_name||"",e.address_components[2]&&e.address_components[2].short_name||""].join(" ")),s.setContent("<div><strong>"+e.name+"</strong><br>"+n),s.open(o,a)}),x}google.maps.event.addDomListener(window,"load",initialize);