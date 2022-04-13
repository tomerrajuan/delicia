(function() {

    var mymap1 = L.map('mapid1').setView([52.509880, 13.461770], 13);
    L.marker([52.509880, 13.461770]).addTo(mymap1);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9tZXJyYWp1YW4iLCJhIjoiY2tiZ3JqczRwMThicTMwbm9mZ2lncWJxeCJ9.v3F5ARQKx95kiICwow6RJw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap1);


    var mymap2 = L.map('mapid2').setView([52.498870, 13.442920], 13);
    L.marker([52.498870, 13.442920]).addTo(mymap2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidG9tZXJyYWp1YW4iLCJhIjoiY2tiZ3JqczRwMThicTMwbm9mZ2lncWJxeCJ9.v3F5ARQKx95kiICwow6RJw', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap2);


})();