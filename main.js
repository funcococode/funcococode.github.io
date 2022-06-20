// AIzaSyAJNAD0UlLmeqMdaB72v1hZm6wgKAmidNA

// Initialize and add the map
// function initMap() {
//     // The location of Uluru
//     const StudioHR = { lat: 22.718251479538928, lng: 75.88473309787932 };
//     // The map, centered at StudioHR
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 18,
//       center: StudioHR,
//     });
//     // The marker, positioned at StudioHR
//     const marker = new google.maps.Marker({
//       position: StudioHR,
//       map: map,
//     });
//   }

// position we will use later
var lat = 22.718251479538928;
var lon = 75.88473309787932;
// initialize map
map = L.map('mapDiv').setView([lat, lon], 18);
// set map tiles source
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(map);
// add marker to the map
marker = L.marker([lat, lon]).addTo(map);
// add popup to the marker
marker.bindPopup("<b>Studio HR</b><br />Indore").openPopup()