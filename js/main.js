function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

    function showPosition(){

        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(showMap, showError,
    {maximumAge:10000, timeout:5000, enableHighAccuracy: true});

        } else{

            alert("Sorry, your browser does not support HTML5 geolocation.");

        }

    }

     

    // Define callback function for successful attempt

    function showMap(position){

        // Get location data

        lat = position.coords.latitude;

        long = position.coords.longitude;

        var mymap = L.map('embedMap').setView([lat, long],13);

        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 16,
		minZoom: 7,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11'
	}).addTo(mymap);

        L.marker([lat, long]).addTo(mymap)
		.bindPopup(`<b>You are here!</b>.<br> <p>This is your position</p><p> <b>latitude</b>: ${lat} </p><p><b>longitude</b>: ${long}</p>`);


    }

     

    // Define callback function for failed attempt

    function showError(error){

        if(error.code == 1){

            result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";

        } else if(error.code == 2){

            result.innerHTML = "The network is down or the positioning service can't be reached.";

        } else if(error.code == 3){

            result.innerHTML = "The attempt timed out before it could get the location data.";

        } else{

            result.innerHTML = "Geolocation failed due to unknown error.";

        }

    }
