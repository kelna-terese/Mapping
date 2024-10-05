// Function to simulate tide data based on location
function getTideInfo(lat, lon) {
    // Simulate a tide based on the coordinates (lat and lon)
    const tideStatus = Math.random() > 0.5 ? "High Tide" : "Low Tide";

    // Display the tide information on the webpage
    document.getElementById("tide-status").textContent =` The current tide for your location (Lat: ${lat}, Lon: ${lon}) is: ${tideStatus}`;
}

// Function to handle Geolocation success
function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Display the user's location
    document.getElementById("location").textContent = `Your location is Latitude: ${latitude}, Longitude: ${longitude}`;

    // Check tide information based on the location
    getTideInfo(latitude, longitude);
}

// Function to handle Geolocation errors
function error() {
    document.getElementById("location").textContent = "Unable to retrieve your location.";
}

// Event listener for the button
document.getElementById("check-tide").addEventListener("click", function() {
    // Check if the browser supports geolocation
    if (navigator.geolocation) {
        document.getElementById("location").textContent = "Fetching location...";
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        document.getElementById("location").textContent = "Geolocation is not supported by your browser.";
    }
});