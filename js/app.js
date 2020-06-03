let map = L.map('map').setView([20.547165, -104.045974], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker1 = L.marker([20.547165, -104.045974]).addTo(map);
let marker2 = L.marker([19.547165, -104.045974])
   .bindPopup('<h3>Titul0</h3>Hola -estoy aqui-') //agregar marxador con un popup 
   .addTo(map)
   .openPopup();

let popup = L.popup().setLatLng([20.847165, -104.145974]).setContent('Este es el popup'); //poup independiente

marker1.bindPopup(popup).openPopup(); //AGREGAR (asignar) POPUP AL MARKADOR