import React from "react";
import mapboxgl from 'mapbox-gl';
import { render } from "react-dom";
import { Map } from "@commodityvectors/react-mapbox-gl";

import './fonts/Noah/NoahText-Regular.ttf';
import './fonts/Noah/NoahText-Bold.ttf';

import "./style.css";

const BaseMap = ({ children, ...props }) => {
  return (
    <Map
      mapStyle={"mapbox://styles/valeriabelousova/clfkslwn8001g01pp9irv5yta"}
      accessToken="pk.eyJ1IjoidmFsZXJpYWJlbG91c292YSIsImEiOiJjazVkcm51YzMwZGZjM2xvM2xnZmltOHd5In0.1xUC4Qs0uGpmWUQElmlDGA"
      center={[37.6156, 55.7522]}
      zoom={3}
      options={{
        minZoom: 3,
        renderWorldCopies: false,
        attributionControl: false}}
      {...props}
    >
      {children}
    </Map>
  );
};

const TwoFingerDrag = Map.component(TwoFingerDragComponent);
function TwoFingerDragComponent({ map }) {
  const nav = new mapboxgl.NavigationControl({
    showCompass: false,
    showZoom: true
});
  map.addControl(nav, 'top-left');
  map.on('load', () => {
    var previousSelectedFeatureId = null;
    map.addSource('wines', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/ValeriaBelousova/json_data/master/wine_poi_id_itog_photos.geojson',
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 38
    });
    map.addSource('msk_poi', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Москва"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        37.6156,
                        55.7522
                    ]
                }
            }]
        }
    });
    map.addSource('spb_poi', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Санкт-Петербург"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        30.315877,
                        59.939099
                    ]
                }
            }]
        }
    });
    map.addSource('krs_poi', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Красноярск"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        92.8672,
                        56.0184
                    ]
                }
            }]
        }
    });
    map.addSource('nino_poi', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Нижний Новгород"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        44.002,
                        56.3287
                    ]
                }
            }]
        }
    });
    map.addSource('ekb_poi', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Екатеринбург"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        60.6122,
                        56.8519
                    ]
                }
            }]
        }
    });
    map.addSource('nsb_poi', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Новосибирск"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        82.9346,
                        55.0415
                    ]
                }
            }]
        }
    });
    map.addSource('brn_poi', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {"name": "Барнаул"},
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        83.7636,
                        53.3606
                    ]
                }
            }]
        }
    });

    map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'wines',
        filter: ['has', 'point_count'],
        paint: {
            'circle-color': [
                'step',
                ['get', 'point_count'],
                '#000000',
                100,
                '#000000',
                750,
                '#000000'
            ],
            'circle-radius': [
                'step',
                ['get', 'point_count'],
                22,
                10,
                30,
                25,
                40
            ]
        }
    });

    map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'wines',
        filter: ['has', 'point_count'],
        layout: {
            'text-field': ['get', 'point_count_abbreviated'],
            'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
            'text-size': 16
        },
        paint: {
              'text-color': '#ffffff'
            }
    });

    map.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'wines',
        filter: ['!', ['has', 'point_count']],
        paint: {
            'circle-color': ['case',
            ['==', ['feature-state', 'selected'], true], '#ffffff',
            '#000000'
            ],
            'circle-radius': ['case',
            ['==', ['feature-state', 'selected'], true], 5,
            7
            ],
            'circle-stroke-width': ['case',
            ['==', ['feature-state', 'selected'], true], 2,
            0
            ],
            'circle-stroke-color': ['case',
            ['==', ['feature-state', 'selected'], true], '#000000',
            '#000000'
            ],
        }
    });
    const labelLayer = {
        id: 'label_layer',
        type: 'symbol',
        source: 'wines',
        layout: {
            'text-field': "{Город}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [0.64, 0.23],
        },
        paint: {
        'text-color': '#000000',
        }
    };

    const labelWines = {
        id: 'wine_names',
        type: 'symbol',
        source: 'wines',
        visibility: 'none',
        layout: {
            'text-field': "{Назва}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [0.54, 0.23],
        },
        paint: {
        'text-color': '#000000',
        }
    };

    const msk_label = {
        id: 'msk_names',
        type: 'symbol',
        source: 'msk_poi',
        visibility: 'none',
        layout: {
            'text-field': "{name}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [0.74, -2.33],
        },
        paint: {
        'text-color': '#000000',
        }
    };
    const spb_label = {
        id: 'spb_names',
        type: 'symbol',
        source: 'spb_poi',
        visibility: 'none',
        layout: {
            'text-field': "{name}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [1.54, -1.3],
        },
        paint: {
        'text-color': '#000000',
        }
    };
    const krs_label = {
        id: 'krs_names',
        type: 'symbol',
        source: 'krs_poi',
        visibility: 'none',
        layout: {
            'text-field': "{name}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [1.34, -0.8],
        },
        paint: {
        'text-color': '#000000',
        }
    };
    const nino_label = {
        id: 'nino_names',
        type: 'symbol',
        source: 'nino_poi',
        visibility: 'none',
        layout: {
            'visibility': 'none',
            'text-field': "{name}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [1.34, -0.8],
        },
        paint: {
        'text-color': '#000000',
        }
    };
    const ekb_label = {
        id: 'ekb_names',
        type: 'symbol',
        source: 'ekb_poi',
        visibility: 'none',
        layout: {
            'visibility': 'none',
            'text-field': "{name}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [1.34, -0.8],
        },
        paint: {
        'text-color': '#000000',
        }
    };
    const nsb_label = {
        id: 'nsb_names',
        type: 'symbol',
        source: 'nsb_poi',
        visibility: 'none',
        layout: {
            'visibility': 'none',
            'text-field': "{name}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [1.34, -0.8],
        },
        paint: {
        'text-color': '#000000',
        }
    };
    const brn_label = {
        id: 'brn_names',
        type: 'symbol',
        source: 'brn_poi',
        layout: {
            'visibility': 'none',
            'text-field': "{name}",
            'text-size': 15,
            'text-anchor': "bottom-left",
            'text-font': ['Roboto Light', 'Arial Unicode MS Bold'],
            'symbol-avoid-edges': true,
            'text-offset': [1.34, -0.8],
        },
        paint: {
        'text-color': '#000000',
        }
    };

    map.addLayer(labelWines);
    map.addLayer(labelLayer);
    map.addLayer(msk_label);
    map.addLayer(spb_label);
    map.addLayer(krs_label);
    map.addLayer(ekb_label);
    map.addLayer(nsb_label);
    map.addLayer(brn_label);
    map.addLayer(nino_label);

    map.on('click', 'clusters', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
            layers: ['clusters']
        });
        const clusterId = features[0].properties.cluster_id;
        map.getSource('wines').getClusterExpansionZoom(
            clusterId,
            (err, zoom) => {
                if (err) return;

                map.easeTo({
                    center: features[0].geometry.coordinates,
                    duration: 3000,
                    essential: true,
                    zoom: zoom + 3
                });
            }
        );
    });
    map.on('click', (event) => {
        const features = map.queryRenderedFeatures(event.point, {layers: ['unclustered-point']});
        if (!features.length) { 
            map.setFeatureState({ source: 'wines', id: previousSelectedFeatureId }, { selected: false })
            return;
            }
        else {
            map.setFeatureState({ source: 'wines', id: previousSelectedFeatureId }, { selected: false })
        }
        const feature = features[0];
        if (feature) {
            var selectedFeatureId = feature.id;
            map.setFeatureState({ source: 'wines', id: previousSelectedFeatureId }, { selected: false })
            map.setFeatureState({ source: 'wines', id: selectedFeatureId }, { selected: true })
            previousSelectedFeatureId = selectedFeatureId;
        }
    });

    map.on('click', 'unclustered-point', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const name = e.features[0].properties['Назва'];
      const url = e.features[0].properties['Сайт'];

      const alt_url = url.replace('https://', '').replace('http://', '').replace('instagram.com/', '').split('/')[0].split('?')[0]
      const type = e.features[0].properties['Тип_з'].replace(';', ',');
      const city = e.features[0].properties['Город'];
      const address = e.features[0].properties['Адрес'];
      var author = e.features[0].properties['Имя_с'];
  
      const photos = e.features[0].properties['photos'].split(',');

      const isCaruselShow = (photos.length > 0) && (photos[0] != '');
      const onlyOnePhoto = (photos.length == 1) && (photos[0] != '');
      var noAuthor = author.length <= 4;

      var car_el = ``;
      photos.forEach((photo, index) => {
                                  var photo_name = photo;
                                  if (index == 0) {
                                      car_el = car_el + 
                                      `<div class="carousel-item active">
                                          <img class="d-block w-100"
                                           src="https://storage.yandexcloud.net/wine/${photo_name.replace('\'', '').replace('\'', '').replace(' ', '')}" 
                                           alt="First slide">
                                      </div>`
                                  }
                                  else {
                                      car_el = car_el + 
                                      `<div class="carousel-item">
                                          <img class="d-block w-100"
                                           src="https://storage.yandexcloud.net/wine/${photo_name.replace('\'', '').replace('\'', '').replace(' ', '')}" 
                                           alt="First slide">
                                      </div>`
                                  }
                                  }
                              )
      
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
              `<div class='content'>
                  ${isCaruselShow ? `
                      <div class='carousel'>
                      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner">
                              ${car_el}
                          </div>
                          ${ !onlyOnePhoto ? `
                              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                              <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="sr-only">Next</span>
                          </a>` : ``}
                          </div>
                  </div>` : ``}
                  
                  <div class='description'>
                      <div class='name'>${name}</div>
                      <div class='type'>${type}</div>
                      <br>
                      <div class='address'>${city}, ${address}</div>
                      <div class='url'><a href=${url} style="color: black">Сайт</a></div>
                      <br>
                      ${!noAuthor ? `<div class='type'>Автор винной подборки –</div>
                                  <div class='author'>${author}</div>` : `` }
                  </div>
              </div>`
          )
          .addTo(map);
  });

    map.on('mouseenter', 'clusters', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'clusters', () => {
        map.getCanvas().style.cursor = '';
    });
    // Center the map on the coordinates of any clicked circle from the 'circle' layer.
    map.on('click', 'unclustered-point', (e) => {
      console.log(e.features[0].geometry.coordinates)
      var lon = e.features[0].geometry.coordinates[0];
      var lat = e.features[0].geometry.coordinates[1];
      if (e.features[0].id == 73) {
          console.log(e.features[0].id);
          map.flyTo({
          center: [lon, lat + 0.85],
          zoom: 5,
          duration: 6000,
          essential: true
          });
      }
      if (e.features[0].id == 67) {
          console.log(e.features[0].id);
          map.flyTo({
          center: [lon, lat + 0.02],
          zoom: 12,
          duration: 6000,
          essential: true
          });
      }
      else {
          map.flyTo({
          center: [lon, lat + 0.006],
          zoom: 14,
          duration: 4000,
          essential: true
          });
      }
  });

    map.on('mouseenter', 'unclustered-point', () => {
        map.getCanvas().style.cursor = 'pointer';
    });
    map.on('mouseleave', 'unclustered-point', () => {
        map.getCanvas().style.cursor = '';
    });
    // zoom labels
    map.on('zoom', function(e) {
        var zoom = map.getZoom();
        if (zoom > 11) {
            map.setLayoutProperty('wine_names', 'visibility', 'visible');
        }
        if (zoom <= 11) {
            map.setLayoutProperty('wine_names', 'visibility', 'none');
        }
        if (map.getZoom() > 7) {
            map.setLayoutProperty('label_layer', 'visibility', 'none');
            map.setLayoutProperty('msk_names', 'visibility', 'none');
            map.setLayoutProperty('spb_names', 'visibility', 'none');
            map.setLayoutProperty('krs_names', 'visibility', 'none');
        }
        else {
            map.setLayoutProperty('label_layer', 'visibility', 'visible');
            map.setLayoutProperty('msk_names', 'visibility', 'visible');
            map.setLayoutProperty('spb_names', 'visibility', 'visible');
            map.setLayoutProperty('krs_names', 'visibility', 'visible');
        }
    });
    map.on('zoom', function(e) {
        var zoom = map.getZoom();
        if (zoom < 3.2 || zoom > 7) {
            map.setLayoutProperty('ekb_names', 'visibility', 'none');
            map.setLayoutProperty('nsb_names', 'visibility', 'none');
            map.setLayoutProperty('brn_names', 'visibility', 'none');
        }
        if (zoom < 5 || zoom > 7) {
            map.setLayoutProperty('nino_names', 'visibility', 'none');
        }
        else {
            map.setLayoutProperty('ekb_names', 'visibility', 'visible');
            map.setLayoutProperty('nsb_names', 'visibility', 'visible');
            map.setLayoutProperty('brn_names', 'visibility', 'visible');
            map.setLayoutProperty('nino_names', 'visibility', 'visible');
        }
    });
});



  return null;
}

const App = () => {
  return (
    <>
      <BaseMap>
        <TwoFingerDrag />
      </BaseMap>
    </>
  );
};

render(<App />, document.getElementById("root"));
