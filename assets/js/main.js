mapboxgl.accessToken = 'pk.eyJ1IjoiaG9wZXN3ZWF0eSIsImEiOiJjano1cGV1czYwcGE0M25wYTN1YXNvbnhkIn0.NullqWCIxE0T6tiqoVgj5g';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [28.956192667464165, 41.0151062297364],
    zoom: 13.20
});

function getLngLat(){
    var center = map.getCenter();
    console.log(center);
    document.getElementById("center").innerHTML = center;
}

function getZoom(){
    var zoom = map.getZoom();
    console.log(zoom);
    document.getElementById("zoom").innerHTML = +","+zoom;
}

map.on('load', function () {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Pothole Detected!</strong><p>Local authorities have noticed the pothole and have sent repair team.</p>',
                        'icon': 'campsite'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [28.96167922931579, 41.01072084322166]
                    }
                }
            ]
        }
    });

    map.addSource('route', {
        'type': 'geojson',
        'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': [
                    [28.944820576626284, 41.0222259074601],
                    [28.94494948018132, 41.02211853356138],
                    [28.946399943530537, 41.020694851965175],
                    [28.946444700176244, 41.020644570421155],
                    [28.946726044690195, 41.02035653621891],
                    [28.94802783027967, 41.019062199018805],
                    [28.9498230357965, 41.01735609938149],
                    [28.950343655027268, 41.016929824703425],
                    [28.9506700036477, 41.01673420854257],
                    [28.9506700036477, 41.01673420854257],
                    [28.95660068392783, 41.013350936209775],
                    [28.95961361553725, 41.01208025430728],
                    [28.959817298634448, 41.01194783321708],
                    [28.960175216669654, 41.011858810663824],
                    [28.961132702647774, 41.01112975236188],
                    [28.96125431686528, 41.01098813225616],
                    [28.961556923893113, 41.01074880896496],
                    [28.961556923893113, 41.01074880896496]
                ]
            }
        }
    });
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#32CD32',
            'line-width': 8
        }
    });
    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': '{icon}-15',
            'icon-allow-overlap': true
        }
    });

    // When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    map.on('click', 'places', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    map.on('mouseenter', 'places', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'places', function () {
        map.getCanvas().style.cursor = '';
    });

    map.on('mousemove', function(e) {
        getLngLat();
        getZoom();
    });
});
