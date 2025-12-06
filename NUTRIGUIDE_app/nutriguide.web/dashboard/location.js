// Initialize map (default view: Manolo Fortich, Bukidnon)
const map = L.map('map').setView([8.3695, 124.8645], 13);

// Tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add fixed marker for Manolo Fortich
L.marker([8.372036, 124.856406])
    .addTo(map)
    .bindPopup("<b>Calanawan</b><br>Rural Health Center")
    .openPopup();


L.marker([8.353366, 124.813206])
    .addTo(map)
    .bindPopup("<b>Damilag</b><br>Health Center")
    .openPopup();

L.marker([8.333822, 124.816017])
    .addTo(map)
    .bindPopup("<b>Agusan Canyon </b><br>Health Center")
    .openPopup();

L.marker([8.41649, 124.80992])
    .addTo(map)
    .bindPopup("<b>Alae</b><br>Health Center")
    .openPopup();


// Make the Locate Me button functional
document.getElementById("locateBtn").addEventListener("click", () => {
    map.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
});

// When user's location is found
map.on("locationfound", (e) => {
    L.marker(e.latlng)
        .addTo(map)
        .bindPopup("📍 You are here!")
        .openPopup();

    // Add circle radius around user (optional)
    L.circle(e.latlng, {
        radius: e.accuracy,
        color: "#007bff",
        fillColor: "#3399ff",
        fillOpacity: 0.3
    }).addTo(map);
});
