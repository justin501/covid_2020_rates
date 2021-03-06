mapboxgl.accessToken = 'pk.eyJ1IjoiamFrb2J6aGFvIiwiYSI6ImNpcms2YWsyMzAwMmtmbG5icTFxZ3ZkdncifQ.P9MBej1xacybKcDN_jehvw';
const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/light-v10', // style URL
        zoom: 3.8, // starting zoom
        center: [-99, 39], // starting center
        projection: 'albers'
    }
);

map.on('load', () => {

map.addSource('covidrate', {
    type: 'geojson',
    data: 'assets/us-covid-2020-rates.geojson'
});

map.addLayer({
    'id': 'covid-layer',
    'type': 'fill',
    'source': 'covidrate',
    'paint': {
        'fill-color': [
            'step',
            ['get', 'rates'],
            '#FFEDA0',   // stop_output_0
            10,          // stop_input_0
            '#FED976',   // stop_output_1
            20,          // stop_input_1
            '#FEB24C',   // stop_output_2
            30,          // stop_input_2
            '#FD8D3C',   // stop_output_3
            50,         // stop_input_3
            '#FC4E2A',   // stop_output_4
            70,         // stop_input_4
            '#E31A1C',   // stop_output_5
            90,         // stop_input_5
            '#BD0026',   // stop_output_6
            100,        // stop_input_6
            "#800026"    // stop_output_7
        ],
        'fill-outline-color': '#BBBBBB',
        'fill-opacity': 0.7,
    }
});

    const layers = [
        '0-9',
        '10-19',
        '20-29',
        '30-49',
        '50-69',
        '70-89',
        '90-110',
        '100 and more'
    ];
    const colors = [
        '#FFEDA070',
        '#FED97670',
        '#FEB24C70',
        '#FD8D3C70',
        '#FC4E2A70',
        '#E31A1C70',
        '#BD002670',
        '#80002670'
    ];

    const legend = document.getElementById('legend');
    legend.innerHTML = "<b>Covid-19 Rates:<br> Cases per 1000 people</b><br><br>";

    layers.forEach((layer, i) => {
        const color = colors[i];
        const item = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'legend-key';
        key.style.backgroundColor = color;

        const value = document.createElement('span');
        value.innerHTML = `${layer}`;
        item.appendChild(key);
        item.appendChild(value);
        legend.appendChild(item);
    });

    map.on('mousemove', ({point}) => {
        const county = map.queryRenderedFeatures(point, {
            layers: ['covid-layer']
        });
        document.getElementById('text-description').innerHTML = county.length ?
            `<h3>${county[0].properties.county}</h3><p><strong><em>${county[0].properties.rates}</strong> cases per county</em></p>` :
            `<p>Hover over any county!</p>`;
    });
});