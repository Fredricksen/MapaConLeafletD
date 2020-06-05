let map = L.map('map').setView([20.547165, -104.045974], 10);

var Stamen_Watercolor = L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}',
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 16,
    ext: 'jpg'
  }
);

Stamen_Watercolor.addTo(map);

let favoriteIcon = L.icon({
  iconUrl: 'icons/favorite.png',
  iconSize: [36, 36]
});

let feedbackIcon = L.icon({
  iconUrl: 'icons/feedback.png',
  iconSize: [36, 36],
  iconAnchor: [0, 36]//punto de agranaje punta
  });

var redMarker = L.ExtraMarkers.icon({
  icon: 'fa-book',
  markerColor: 'blue',
  shape: 'circle',
  prefix: 'fa'
});

L.marker()
  .setLatLng([20.547165, -104.045974]) //COORDENADAS CON SETLATNG
  .setIcon(redMarker)
  .bindPopup('Estoy aqui')
  .addTo(map);
/*
 let marker = L.marker ([20.547165, -104.045974],{
    icon: feedbackIcon
  })
  .bindPopup('Me Encuentro HERE')
  .addTo(map);*/